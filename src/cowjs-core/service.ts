import CowError from './error'

export default class Service {
    static callback (method: string, methodID: number, response: string) {
        if (!this.callAwaits.has(methodID)) {
            console.warn(`call id ${methodID} not found`)
            return
        }
        const [ resolve, reject ] = this.callAwaits.get(methodID)
        this.callAwaits.delete(methodID)

        const rep = JSON.parse(response)
        if (rep.code) { // failed
            reject(new CowError(rep.code, rep.msg))
        } else { // succeeded
            resolve(rep)
        }
    }

    static async call (method: string, args: object, timeout: number = 120000) { // default timeout is 120s
        // Lazily set callback
        if (!(window as any).cochain.callback) {
            (window as any).cochain.callback = Service.callback
        }

        return new Promise((resolve, reject) => {
            const methodID = (window as any).cochain.exec(JSON.stringify({
                method,
                args
            }))

            if (this.callAwaits.has(methodID)) {
                reject(new CowError(1, 'inconsistent remote exec'))
            }

            setTimeout(() => {
                if (this.callAwaits.has(methodID)) {
                    reject(new CowError(1, 'timeout'))
                    this.callAwaits.delete(methodID)
                }
            }, timeout)

            this.callAwaits.set(methodID, [resolve, reject])
        })
    }

    private static callAwaits = new Map<number, [any, any]>()
}
