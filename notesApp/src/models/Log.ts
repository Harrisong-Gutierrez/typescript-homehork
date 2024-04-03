export class Log {
    action: string;
    timestamp: Date;

    constructor(action: string) {
        this.action = action;
        this.timestamp = new Date();
    }
}

