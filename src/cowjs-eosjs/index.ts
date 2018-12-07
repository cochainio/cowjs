import { Network, Plugin, Service } from '../cowjs-core'

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
    static blockchain: string = 'eos'

    constructor () {
        super(CowEOS.blockchain)
    }

    hookProvider (network: Network, fieldsFetcher?: () => object): SignatureProvider {
        return {
            getAvailableKeys: async () => {
                const keys = await Service.call('getAvailableKeys', {
                    blockchain: CowEOS.blockchain
                })
                return keys as string[]
            },

            sign: async (signatureProviderArgs: SignatureProviderArgs) => {
                const requiredFields = fieldsFetcher ? fieldsFetcher() : {}

                const args = {
                    blockchain: CowEOS.blockchain,
                    network,
                    signatureProviderArgs,
                    requiredFields
                }
                const sigatures = await Service.call('signTransaction', args)
                return sigatures as string[]
            }
        }
    }

    signatureProvider () {
        return (network: Network, eosjs: any, options: object) => {
            if (!network.isValid()) {
                throw new Error('invalid network') // TODO
            }

            let requiredFields = {}
            const fieldsFetcher = () => requiredFields
            const signatureProvider = this.hookProvider(network, fieldsFetcher)

            return new Proxy(new eosjs(Object.assign(options, { signatureProvider })), {
                get (eosjsInstance, method) {
                    return (...args: any[]) => {
                        const rqf = args.find(arg => arg.hasOwnProperty('requiredFields'))
                        requiredFields = rqf ? rqf.requiredFields : {}
                        return eosjsInstance[method](...args)
                    }
                }
            })
        }
    }
}
