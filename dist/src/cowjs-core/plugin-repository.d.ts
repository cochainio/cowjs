import Plugin from './plugin';
export declare class PluginRepositorySingleton {
    plugins: Plugin[];
    loadPlugin(plugin: Plugin): void;
    plugin(name: string): Plugin;
    supportedBlockchains(): string[];
}
declare const PluginRepository: PluginRepositorySingleton;
export default PluginRepository;
