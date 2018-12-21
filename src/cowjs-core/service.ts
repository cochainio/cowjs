import CowError from './error'

export default class Service {
    static callback (method: string, methodID: number, response: string) {
        (console as any).log(method, methodID, JSON.parse(response))

        if (!Service.callAwaits.has(methodID)) {
            console.warn(`call id ${methodID} not found`)
            return
        }
        const [ resolve, reject ] = Service.callAwaits.get(methodID)
        Service.callAwaits.delete(methodID)

        const rep = JSON.parse(response)
        if (rep.code) { // failed
            reject(new CowError(rep.code, rep.msg))
        } else { // succeeded
            resolve(rep)
        }
    }

    static async call (method: string, args: object, timeout: number = 120000) { // default timeout is 120s
        const w = (window as any)
        // Lazily set callback
        if (!w.cochain.callback) {
            w.cochain.callback = Service.callback
        }

        return new Promise((resolve, reject) => {
            const req = {
                method,
                args
            }

            let methodID: number
            if (w.cochain.exec) { // Android
                methodID = w.cochain.exec(JSON.stringify(req))
            } else if (w.webkit && w.webkit.messageHandlers && w.webkit.messageHandlers.cochain) { // iOS
                methodID = w.cochain.nextMethodID++
                if (!(methodID >= 0)) {
                    reject(new CowError(1, 'no valid method id'))
                    return
                }
                w.webkit.messageHandlers.cochain.postMessage({
                    ...req,
                    methodID
                })
            } else {
                reject(new CowError(1, 'only support android or ios platform under cordova'))
                return
            }

            if (Service.callAwaits.has(methodID)) {
                reject(new CowError(1, 'inconsistent remote exec'))
            }

            setTimeout(() => {
                if (Service.callAwaits.has(methodID)) {
                    reject(new CowError(1, 'timeout'))
                    Service.callAwaits.delete(methodID)
                }
            }, timeout)

            Service.callAwaits.set(methodID, [resolve, reject])
        })
    }

    private static callAwaits = new Map<number, [any, any]>()
}
