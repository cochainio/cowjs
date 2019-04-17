import { Network, Service } from '../cowjs-core'

let publicKey: any = null

const throwIfNoIdentity = () => {
    if (!publicKey) {
        throw new Error('There is no identity with an account set on your Scatter instance.')
    }
}

const scatter = {
    isExtension: true,
    wallet: 'ScatterExtension',
    identity: null as any,

    async getIdentity (fields: any) {
        const { accounts } = fields
        const identity: any = await Service.call('getIdentity', {
            blockchain: accounts[0].blockchain.toUpperCase()
        })
        scatter.useIdentity(identity)
        return identity
    },

    useIdentity (identity: any) {
        scatter.identity = identity
        publicKey = identity ? identity.publicKey : ''
    },

    async forgetIdentity () {
        throwIfNoIdentity()
        scatter.identity = null
        publicKey = null
        return true
    },

    async suggestNetwork (network: any) {
        return null as any // TODO
    },

    // tslint:disable-next-line
    async getArbitrarySignature (publicKey: any, data: any, whatFor = '', isHash = false) {
        return await Service.call('sign', { data, whatFor, isHash }) // TODO
    },

    eos (network: any, eosAPI: any, options: any = {}, protocol: string = 'http') {
        if (!['http', 'https', 'ws'].includes(protocol)) {
            throw new Error('Protocol must be either http, https, or ws')
        }

        if (!network.hasOwnProperty('protocol') || !network.protocol.length) {
            network.protocol = protocol
        }

        network = Network.fromJSON(network)
        network.chainId = network.chainId ? network.chainId.toString() : options.chainId
        if (typeof network.port === 'string') {
            network.port = +network.port
        }

        if (!network.isValid()) {
            throw new Error('no_network: 402 You must bind a network first')
        }

        const httpEndpoint = `${network.protocol}://${network.host}` + (network.port > 0 ? `:${network.port}` : '')
        const chainId = network.chainId

        return new Proxy(eosAPI({ httpEndpoint, chainId }), {
            get (eosInstance, method) {
                return (...args: [any]) => {
                    if (args.find(arg => arg.hasOwnProperty('keyProvider'))) {
                        // tslint:disable-next-line
                        throw new Error('malicious: 402 Do not use a `keyProvider` with a Scatter. Use a `signProvider` and return only signatures to this object. A malicious person could retrieve your keys otherwise.')
                    }

                    const signProvider = async (signargs: any) => {
                        throwIfNoIdentity()

                        // const { transaction, buf, sign, optionsKeyProvider } = signargs

                        const keys = await Service.call('getAvailableKeys', {
                            blockchain: network.blockchain.toUpperCase()
                        })

                        // tslint:disable-next-line
                        const args = {
                            blockchain: network.blockchain.toUpperCase(),
                            network,
                            signatureProviderArgs: {
                                chainId: network.chainId,
                                requiredKeys: keys,
                                signBuf: Buffer.from(signargs.buf).toString('hex'),
                                transaction: signargs.transaction
                            },
                            requiredFields: {} // TODO
                        }
                        const signatures = await Service.call('signTransaction', args)
                        return signatures
                    }

                    return new Promise((resolve, reject) => {
                        eosAPI(Object.assign(options, { httpEndpoint, signProvider, chainId }))[method](...args)
                            .then((result: any) => {
                                const contractProxy = new Proxy(result, {
                                    // tslint:disable-next-line
                                    get (instance, method) {
                                        if (method === 'then') {
                                            return instance[method]
                                        }
                                        // tslint:disable-next-line
                                        return (...args: [any]) => {
                                            return new Promise(async (res, rej) => {
                                                instance[method](...args).then(res).catch(rej)
                                            })
                                        }
                                    }
                                })

                                resolve(contractProxy)
                            }).catch(reject)
                    })
                }
            }
        })
    }
}

const w = (window as any)
w.scatter = scatter

w.document.dispatchEvent(new Event('scatterLoaded'))
