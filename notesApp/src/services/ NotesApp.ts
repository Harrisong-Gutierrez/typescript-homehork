import { Log } from '../models/Log';
import { Note } from '../models/Note';




function LogAction(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    const originalMethod = descriptor.value;

    descriptor.value = async function (...args: any[]) {
        const log = new Log(`Action: ${propertyKey}`);
        console.log(`Logging action: ${log.action} at ${log.timestamp}`);
        return await originalMethod.apply(this, args);
    };

    return descriptor;
}

class NotesApp {
    notes: Note[];

    constructor() {
        this.notes = [];
    }

    @LogAction
    async createNote(title: string, description: string, userId: string, dueDate: Date) {
        const note = new Note(title, description, userId, dueDate);
        this.notes.push(note);
        return note;
    }

    @LogAction
    async updateNote(noteId: string, updatedFields: Partial<Note>) {
        const note = this.notes.find(note => note.userId === noteId);
        if (!note) {
            throw new Error(`Note with id ${noteId} not found`);
        }
        Object.assign(note, updatedFields);
        return note;
    }

    @LogAction
    async deleteNote(noteId: string) {
        const index = this.notes.findIndex(note => note.userId === noteId);
        if (index === -1) {
            throw new Error(`Note with id ${noteId} not found`);
        }
        this.notes.splice(index, 1);
        return true;
    }

    @LogAction
    async getNoteById(noteId: string) {
        const note = this.notes.find(note => note.userId === noteId);
        if (!note) {
            throw new Error(`Notewith id ${noteId} not found`);
        }
        return note;
    }
}

export { NotesApp };