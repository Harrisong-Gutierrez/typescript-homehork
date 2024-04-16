import { Required } from "../decorators/Required";
import { ValidateEmail } from "../decorators/ValidateEmail";




export class User {
    @Required
    name: string;

    @Required
    lastName: string;

    @ValidateEmail
    email: string;

    constructor(name: string, lastName: string, email: string) {
        this.name = name;
        this.lastName = lastName;
        this.email = email;
    }
}