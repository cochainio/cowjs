import { AxiosInstance } from 'axios';
import { AbiProvider, AuthorityProvider, AuthorityProviderArgs, BinaryAbi } from 'eosjs/dist/eosjs-api-interfaces';
import { GetAbiResult, GetBlockResult, GetCodeResult, GetInfoResult, GetRawCodeAndAbiResult, PushTransactionArgs } from 'eosjs/dist/eosjs-rpc-interfaces';
export default class JsonRpc implements AuthorityProvider, AbiProvider {
    api: AxiosInstance;
    coin: string;
    constructor(endpoint: string, args?: any);
    get_abi(account_name: string): Promise<GetAbiResult>;
    get_account(account_name: string): Promise<any>;
    get_block_header_state(block_num_or_id: number | string): Promise<any>;
    get_block(block_num_or_id: number | string): Promise<GetBlockResult>;
    get_code(account_name: string, code_as_wasm?: boolean): Promise<GetCodeResult>;
    get_currency_balance(code: string, account: string, symbol?: string): Promise<any>;
    get_currency_stats(code: string, symbol: string): Promise<any>;
    get_info(): Promise<GetInfoResult>;
    get_producer_schedule(): Promise<any>;
    get_producers(json?: boolean, lower_bound?: string, limit?: number): Promise<any>;
    get_raw_code_and_abi(account_name: string): Promise<GetRawCodeAndAbiResult>;
    getRawAbi(accountName: string): Promise<BinaryAbi>;
    get_table_rows({ json, code, scope, table, table_key, // TODO: useless?
    lower_bound, upper_bound, limit }: any): Promise<any>;
    /** Get subset of `availableKeys` needed to meet authorities in `transaction`. Implements `AuthorityProvider` */
    getRequiredKeys(args: AuthorityProviderArgs): Promise<string[]>;
    /** Push a serialized transaction */
    push_transaction({ signatures, serializedTransaction }: PushTransactionArgs): Promise<any>;
    db_size_get(): Promise<void>;
    history_get_actions(account_name: string, pos?: number, offset?: number): Promise<void>;
    history_get_transaction(id: string, block_num_hint?: number): Promise<void>;
    history_get_key_accounts(public_key: string): Promise<{
        account_names: any;
    }>;
    history_get_controlled_accounts(controlling_account: string): Promise<void>;
}
