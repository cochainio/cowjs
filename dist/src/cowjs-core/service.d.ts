export default class Service {
    static callback(method: string, methodID: number, response: string): void;
    static call(method: string, args: object, timeout?: number): Promise<{}>;
    private static callAwaits;
}
