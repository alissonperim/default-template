import { BaseException } from './baseException'

export class BadRequestException extends BaseException {
    constructor(message) {
        super(message, 400, 'BAD_REQUEST');
    }
}
