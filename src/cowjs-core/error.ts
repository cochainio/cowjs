export default class CowError extends Error {
    name = 'CowError'

    constructor (public code: number, public message: string) {
        super(message)

        if (Error.captureStackTrace) {
            Error.captureStackTrace(this, CowError)
        }
    }

    toString (): string {
        return `${this.name}: < code: ${this.code}, message: ${this.message} >`
    }
}
