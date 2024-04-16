import fs from 'fs';
import { Note } from '../models/Note';
import { logAction } from '../decorators/NotesAppDecorators';


export class NotesApp {
    notes: Note[];

    constructor() {
        this.notes = this.loadNotesFromFile();
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

    @logAction
    async createNote(title: string, description: string, userId: string, dueDate: Date) {
        const note = new Note(title, description, userId, dueDate);
        this.notes.push(note);
        this.saveNotesToFile();
        return { ...note };
    }

    @logAction
    async updateNote(noteId: string, updatedFields: Partial<Note>) {
        const note = this.notes.find(note => note.userId === noteId);
        if (!note) {
            throw new Error(`Note with id ${noteId} not found`);
        }
        Object.assign(note, updatedFields);
        return { ...note };
    }

    @logAction
    async deleteNote(noteId: string) {
        const index = this.notes.findIndex(note => note.userId === noteId);
        if (index === -1) {
            throw new Error(`Note with id ${noteId} not found`);
        }
        this.notes.splice(index, 1);
        return true;
    }

    @logAction
    async getNoteById(noteId: string) {
        const note = this.notes.find(note => note.userId === noteId);
        if (!note) {
            throw new Error(`Note with id ${noteId} not found`);
        }
        return note;
    }
}