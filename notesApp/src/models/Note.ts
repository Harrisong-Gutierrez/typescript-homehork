import { MinLength } from "../decorators/MinLength";
import { Required } from "../decorators/Required";
import { ValidateDate } from "../decorators/ValidateDate";


export class Note {



    @MinLength(3)
    @Required
    title: string;

    description: string;
    userId: string;
    @ValidateDate
    dueDate: Date;

    constructor(title: string, description: string, userId: string, dueDate: Date) {
        this.title = title;
        this.description = description;
        this.userId = userId;
        this.dueDate = dueDate;
    }
}

