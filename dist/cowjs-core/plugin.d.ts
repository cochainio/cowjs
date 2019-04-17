export default class Plugin {
    name: string;
    static placeholder(): Plugin;
    static fromJson(json: object): Plugin & object;
    constructor(name?: string);
}
