import { BaseException } from './baseException'

export class CreateException extends BaseException {
    constructor(message: string) {
        super(message, 400, 'CREATE_EXCEPTION')
    }
}
