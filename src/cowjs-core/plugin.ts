export default class Plugin {
    static placeholder () {
        return new Plugin()
    }

    static fromJson (json: object) {
        return Object.assign(Plugin.placeholder(), json)
    }

    constructor (public name = '') {}
}
