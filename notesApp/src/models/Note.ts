export class Note {
    title: string;
    description: string;
    userId: string;
    dueDate: Date;

    constructor(title: string, description: string, userId: string, dueDate: Date) {
        this.title = title;
        this.description = description;
        this.userId = userId;
        this.dueDate = dueDate;
    }
}

