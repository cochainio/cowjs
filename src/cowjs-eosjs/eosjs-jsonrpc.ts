import axios, { AxiosInstance, AxiosRequestConfig } from 'axios'
import * as ByteBuffer from 'bytebuffer'
import { AbiProvider, AuthorityProvider, AuthorityProviderArgs, BinaryAbi } from 'eosjs/src/eosjs-api-interfaces'
import { base64ToBinary, convertLegacyPublicKeys } from 'eosjs/src/eosjs-numeric'
import {
    Abi,
    GetAbiResult,
    GetBlockResult,
    GetCodeResult,
    GetInfoResult,
    GetRawCodeAndAbiResult,
    PushTransactionArgs
} from 'eosjs/src/eosjs-rpc-interfaces'
import RpcError from 'eosjs/src/eosjs-rpcerror'

function arrayToHex (data: Uint8Array) {
    let result = ''
    for (const x of data) {
        result += ('00' + x.toString(16)).slice(-2)
    }
    return result
}

export default class JsonRpc implements AuthorityProvider, AbiProvider {
    public api: AxiosInstance

    constructor (endpoint: string, args: any = { timeout: 10000 }) {
        const config = {
            baseURL: endpoint,
            timeout: args.timeout
        }
        this.api = axios.create(config as AxiosRequestConfig)
    }

    // tslint:disable-next-line:variable-name
    public async get_abi (account_name: string): Promise<GetAbiResult> {
        return this.api.get('/v1/eos/contracts/' + account_name).then(r => {
            const abiStr = r.data.abi
            const abi = JSON.parse(abiStr)
            return {
                account_name,
                abi: abi as Abi
            } as GetAbiResult
        })
    }

    // tslint:disable-next-line:variable-name
    public async get_account (account_name: string): Promise<any> {
        return this.api.get('/v1/eos/accounts/' + account_name).then(r => {
            return r.data
        })
    }

    // tslint:disable-next-line:variable-name
    public async get_block_header_state (block_num_or_id: number | string): Promise<any> {
        throw new Error('not implemented')
    }

    // tslint:disable-next-line:variable-name
    public async get_block (block_num_or_id: number | string): Promise<GetBlockResult> {
        let req: any = {}
        if (typeof block_num_or_id === 'number') {
            req = {
                num_start: block_num_or_id,
                num_end: block_num_or_id + 1,
                num_asc: true,
                include_transactions: true
            }
        } else {
            req.id = block_num_or_id
        }
        return this.api.post('/v1/eos/blocks', req).then(r => {
            const block = r.data.blocks[0] // TODO: satisfy GetBlockResult?
            if (block.id) {
                block.ref_block_prefix = ByteBuffer.fromHex(block.id.slice(16, 32),
                                                            ByteBuffer.LITTLE_ENDIAN).readUint32()
            }
            if (block.timestamp && block.timestamp.endsWith('Z')) {
                block.timestamp = block.timestamp.substr(0, block.timestamp.length - 1)
            }
            if (block.num) {
                block.block_num = block.num
            }
            return block
        })
    }

    // tslint:disable-next-line:variable-name
    public async get_code (account_name: string, code_as_wasm: boolean = false): Promise<GetCodeResult> {
        return this.api.get('/v1/eos/contracts/' + account_name, {
            params: { include_code: true, raw: true, wast: !code_as_wasm }
        }).then(r => {
            const abiStr = r.data.abi
            const abi = JSON.parse(abiStr)
            return {
                account_name,
                abi: abi as Abi,
                wasm: r.data.wasm,
                wast: r.data.wast,
                code_hash: r.data.code_hash
            } as GetCodeResult
        })
    }

    public async get_currency_balance (code: string, account: string, symbol: string = null): Promise<any> {
        return this.api.get(`/v1/eos/accounts/${account}/balance?contract=${code}&symbol=${symbol}`).then(r => {
            return r.data.balances.map((b: any) => {
                return `${b.balance.toFixed(4)} ${b.symbol}` // TODO: precision may be not 4
            })
        })
    }

    public async get_currency_stats (code: string, symbol: string): Promise<any> {
        return this.api.post('/v1/eos/currency/stats', {
            currencies: [ { contract: code, symbol } ]
        }).then(r => {
            const stats = r.data.stats[0]
            return {
                [symbol]: {
                    supply: `${stats.supply.toFixed(4)} ${symbol}`,
                    max_supply: `${stats.max_supply.toFixed(4)} ${symbol}`,
                    issuer: stats.issuer
                }
            }
        })
    }

    public async get_info (): Promise<GetInfoResult> { // TODO: `get_info` returns block which `get_block` can not find
        return this.api.get('/v1/eos/info').then(r => {
            return r.data
        })
    }

    public async get_producer_schedule (): Promise<any> {
        throw new Error('not implemented')
    }

    // tslint:disable-next-line:variable-name
    public async get_producers (json = true, lower_bound = '', limit = 50): Promise<any> {
        throw new Error('not implemented')
    }

    // tslint:disable-next-line:variable-name
    public async get_raw_code_and_abi (account_name: string): Promise<GetRawCodeAndAbiResult> {
        return this.api.get(`/v1/eos/contracts/${account_name}?include_code=true&raw=true`).then(r => {
            return {
                account_name,
                wasm: r.data.wasm,
                abi: r.data.abi
            }
        })
    }

    public async getRawAbi (accountName: string): Promise<BinaryAbi> {
        const rawCodeAndAbi = await this.get_raw_code_and_abi(accountName)
        const abi = base64ToBinary(rawCodeAndAbi.abi)
        return {
            accountName: rawCodeAndAbi.account_name,
            abi
        }
    }

    public async get_table_rows ({
        json = true,
        code,
        scope,
        table,
        table_key = '', // TODO: useless?
        lower_bound = '',
        upper_bound = '',
        limit = 10 }: any): Promise<any> {
        return this.api.post('/v1/eos/table', {
            code, scope, table, lower_bound, upper_bound, limit,
            binary: !json
        }).then(r => {
            return r.data
        })
    }

    /** Get subset of `availableKeys` needed to meet authorities in `transaction`. Implements `AuthorityProvider` */
    public async getRequiredKeys (args: AuthorityProviderArgs): Promise<string[]> {
        const transaction = JSON.stringify(args.transaction)
        return this.api.post('/v1/eos/required-keys', {
            transaction,
            available_keys: args.availableKeys,
        }).then(r => {
            return convertLegacyPublicKeys(r.data.required_keys)
        })
    }

    /** Push a serialized transaction */
    public async push_transaction ({ signatures, serializedTransaction }: PushTransactionArgs): Promise<any> {
        let r
        try {
            r = await this.api.post('/v1/eos/txs', {
                tx: JSON.stringify({
                    signatures,
                    packed_trx: arrayToHex(serializedTransaction)
                })
            })
        } catch (e) {
            // TODO: 10027 corresponds CodeSendTransactionError
            if (e && e.response && e.response.data && e.response.data.code === 10027) {
                const msg = JSON.parse(e.response.data.message)
                throw new RpcError(msg)
            } else {
                throw e
            }
        }

        let processed
        if (r.data && r.data.processed) {
            processed = JSON.parse(r.data.processed)
            if (processed && processed.except) {
                throw new RpcError({
                    transaction_id: r.data.tx_id,
                    processed
                })
            }
        }
        return {
            transaction_id: r.data.tx_id,
            processed
        }
    }

    public async db_size_get () {
        throw new Error('not implemented')
    }

    // tslint:disable-next-line:variable-name
    public async history_get_actions (account_name: string, pos: number = null, offset: number = null) {
        throw new Error('not implemented')
    }

    // tslint:disable-next-line:variable-name
    public async history_get_transaction (id: string, block_num_hint: number = null) {
        throw new Error('not implemented')
    }

    // tslint:disable-next-line:variable-name
    public async history_get_key_accounts (public_key: string) {
        return this.api.get(`/v1/eos/accounts-for-key?public_key=${public_key}`).then(r => {
            return {
                account_names: r.data.accounts
            }
        })
    }

    // tslint:disable-next-line:variable-name
    public async history_get_controlled_accounts (controlling_account: string) {
        throw new Error('not implemented') // TODO
    }
}
