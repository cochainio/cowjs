export default class Network {
    static placeholder () { return new Network() }

    static fromJSON (json: object) {
        return Object.assign(Network.placeholder(), json)
    }

    name: string
    protocol: string
    host: string
    port: number = 0
    blockchain: string
    chainID: string

    url () {
        return `${this.protocol}://${this.host}` + (this.port > 0 ? `:${this.port}` : '')
    }

    clone () {
        return Network.fromJSON(JSON.parse(JSON.stringify(this)))
    }

    isValid () {
        return (this.protocol.length && this.host.length && this.port) || this.chainID.length
    }
}
