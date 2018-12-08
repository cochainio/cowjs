export default class Network {
    static placeholder(): Network;
    static fromJSON(json: object): Network & object;
    name: string;
    protocol: string;
    host: string;
    port: number;
    blockchain: string;
    chainID: string;
    url(): string;
    clone(): Network & object;
    isValid(): number;
}
