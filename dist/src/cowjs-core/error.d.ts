export default class CowError extends Error {
    code: number;
    message: string;
    name: string;
    constructor(code: number, message: string);
    toString(): string;
}
