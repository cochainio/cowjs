import Plugin from './plugin'

export class PluginRepositorySingleton {
    plugins: Plugin[] = []

    loadPlugin (plugin: Plugin) {
        if (!this.plugin(plugin.name)) {
            this.plugins.push(plugin)
        }
    }

    plugin (name: string) {
        return this.plugins.find(plugin => plugin.name === name)
    }

    supportedBlockchains (): string[] {
        return this.plugins.map(plugin => plugin.name)
    }
}

const PluginRepository = new PluginRepositorySingleton()
export default PluginRepository
