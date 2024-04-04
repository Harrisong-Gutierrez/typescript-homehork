import fs from 'fs';
import { Log } from '../models/Log';
import { Note } from '../models/Note';

export class NotesApp {
    notes: Note[];

    constructor() {
        this.notes = this.loadNotesFromFile();


        this.createNote = this.logAction(this.createNote);
        this.updateNote = this.logAction(this.updateNote);
        this.deleteNote = this.logAction(this.deleteNote);
        this.getNoteById = this.logAction(this.getNoteById);
    }


    private loadNotesFromFile(): Note[] {
        try {
            const data = fs.readFileSync('./data/data.json', 'utf-8');
            return JSON.parse(data);
        } catch (error) {

            return [];
        }
    }

    private saveNotesToFile(): void {
        fs.writeFileSync('./data/data.json', JSON.stringify(this.notes, null, 2), 'utf-8');
    }

    private logAction(method: Function) {
        return async (...args: any[]) => {
            const log = new Log(`Action: ${method.name}`);
            console.log(`Logging action: ${log.action} at ${log.timestamp}`);
            const result = await method.apply(this, args);
            this.saveNotesToFile();
            return result;
        };
    }

    async createNote(title: string, description: string, userId: string, dueDate: Date) {
        const note = new Note(title, description, userId, dueDate);
        this.notes.push(note);
        return { ...note };
    }

    async updateNote(noteId: string, updatedFields: Partial<Note>) {
        const note = this.notes.find(note => note.userId === noteId);
        if (!note) {
            throw new Error(`Note with id ${noteId} not found`);
        }
        Object.assign(note, updatedFields);
        return { ...note };
    }

    async deleteNote(noteId: string) {
        const index = this.notes.findIndex(note => note.userId === noteId);
        if (index === -1) {
            throw new Error(`Note with id ${noteId} not found`);
        }
        this.notes.splice(index, 1);
        return true;
    }

    async getNoteById(noteId: string) {
        const note = this.notes.find(note => note.userId === noteId);
        if (!note) {
            throw new Error(`Note with id ${noteId} not found`);
        }
        return note;
    }
}
