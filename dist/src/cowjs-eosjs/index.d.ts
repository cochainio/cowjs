import { Network, Plugin } from '../cowjs-core';
export interface BinaryAbi {
    account_name: string;
    abi: Uint8Array;
}
export interface SignatureProviderArgs {
    /** Chain transaction is for */
    chainId: string;
    /** Public keys associated with the private keys needed to sign the transaction */
    requiredKeys: string[];
    /** Transaction to sign */
    serializedTransaction: Uint8Array;
    /** ABIs for all contracts with actions included in `serializedTransaction` */
    abis: BinaryAbi[];
}
export interface SignatureProvider {
    /** Public keys associated with the private keys that the `SignatureProvider` holds */
    getAvailableKeys: () => Promise<string[]>;
    /** Sign a transaction */
    sign: (args: SignatureProviderArgs) => Promise<string[]>;
}
export default class CowEOS extends Plugin {
    static blockchain: string;
    constructor();
    hookProvider(network: Network, fieldsFetcher?: () => object): SignatureProvider;
    signatureProvider(): (network: Network, eosjs: any, options: object) => any;
}
