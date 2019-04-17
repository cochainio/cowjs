import Network from './network';
import Plugin from './plugin';
import Service from './service';
export { Network, Plugin, Service };
declare class Cow {
    loadPlugin(plugin: Plugin): void;
    supportedBlockchains(): string[];
    getWallets(blockchain?: string): Promise<{}>;
    getCurrentWallet(): Promise<{}>;
    shareSNS(title: string, desc: string, url: string, image: string): Promise<{}>;
    sign(data: string, whatFor?: string, isHash?: boolean): Promise<{}>;
}
declare const _default: Cow;
export default _default;
