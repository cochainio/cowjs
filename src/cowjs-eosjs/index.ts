import { Network, Plugin, Service } from '../cowjs-core'
import './scatter'

export interface BinaryAbi {
    account_name: string
    abi: Uint8Array
}

export interface SignatureProviderArgs {
    /** Chain transaction is for */
    chainId: string

    /** Public keys associated with the private keys needed to sign the transaction */
    requiredKeys: string[]

    /** Transaction to sign */
    serializedTransaction: Uint8Array

    /** ABIs for all contracts with actions included in `serializedTransaction` */
    abis: BinaryAbi[]
}

export interface SignatureProvider {
    /** Public keys associated with the private keys that the `SignatureProvider` holds */
    getAvailableKeys: () => Promise<string[]>

    /** Sign a transaction */
    sign: (args: SignatureProviderArgs) => Promise<string[]>
}

export default class CowEOS extends Plugin {
    constructor (public blockchain: string = 'EOS') {
        super(blockchain)
    }

    hookProvider (network: Network, fieldsFetcher?: () => object): SignatureProvider {
        return {
            getAvailableKeys: async () => {
                const keys = await Service.call('getAvailableKeys', {
                    blockchain: this.blockchain
                })
                return keys as string[]
            },

            sign: async (signatureProviderArgs: SignatureProviderArgs) => {
                const requiredFields: any = fieldsFetcher ? fieldsFetcher() : {}

                const eos = requiredFields.eos
                delete requiredFields.eos
                const tx = await eos.deserializeTransactionWithActions(signatureProviderArgs.serializedTransaction)

                const args = {
                    blockchain: this.blockchain,
                    network,
                    signatureProviderArgs: {
                        ...signatureProviderArgs,
                        serializedTransaction: Buffer.from(signatureProviderArgs.serializedTransaction).toString('hex'),
                        transaction: tx
                    },
                    requiredFields
                }
                const sigatures = await Service.call('signTransaction', args)
                return sigatures as string[]
            }
        }
    }

    signatureProvider () {
        return (network: object, eosjs: any, options: object) => {
            const net = Network.fromJSON(network)
            if (!net.isValid()) {
                throw new Error('invalid network') // TODO
            }

            let requiredFields = {}
            const fieldsFetcher = () => requiredFields
            const signatureProvider = this.hookProvider(net, fieldsFetcher)

            const eos = new eosjs(Object.assign(options, { signatureProvider }))

            return new Proxy(eos, {
                get (eosjsInstance, method) {
                    return (...args: any[]) => {
                        const rqf = args.find(arg => arg.hasOwnProperty('requiredFields'))
                        requiredFields = {
                            ...(rqf ? rqf.requiredFields : {}),
                            eos // TODO
                        }
                        return eosjsInstance[method](...args)
                    }
                }
            })
        }
    }
}
