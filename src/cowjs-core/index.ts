import Network from './network'
import Plugin from './plugin'
import PluginRepository from './plugin-repository'
import Service from './service'

export { Network, Plugin, Service }

class Cow {
    loadPlugin (plugin: Plugin) {
        PluginRepository.loadPlugin(plugin)

        Object.assign(this, {
            [plugin.name]: (plugin as any).signatureProvider(),
            [plugin.name + 'Hook']: (plugin as any).hookProvider
        })
    }

    supportedBlockchains (): string[] {
        return PluginRepository.supportedBlockchains()
    }

    // Get all wallets of specified blockchain type or all blockchain types
    async getWallets (blockchain?: string) {
        return await Service.call('getWallets', {
            blockchain
        })
    }

    async getCurrentWallet () {
        return await Service.call('getCurrentWallet', {})
    }

    async shareSNS (title: string, desc: string, url: string, image: string) {
        return await Service.call('shareSNS', {
            title, desc, url, image
        })
    }

    // Sign arbitrary data using private key of current wallet
    async sign (data: string, whatFor: string = '', isHash: boolean = false) {
        return await Service.call('sign', {
            data,
            whatFor,
            isHash
        })
    }

    /*
    async getPublicKey (blockchain: string) {
        return await Service.call('getPublicKey', {
            blockchain
        })
    }
    */
}

export default new Cow()
