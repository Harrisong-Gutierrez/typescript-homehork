import { ValidateDate } from "../decorators/ValidateDate";

export class Log {
    action: string;
    @ValidateDate
    timestamp: Date;

    constructor(action: string) {
        this.action = action;
        this.timestamp = new Date();
    }
}

