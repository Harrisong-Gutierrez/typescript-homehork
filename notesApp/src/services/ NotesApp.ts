// import { Log } from '../models/Log';
// import { Note } from '../models/Note';




// function LogAction(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
//     const originalMethod = descriptor.value;

//     descriptor.value = async function (...args: any[]) {
//         const log = new Log(`Action: ${propertyKey}`);
//         console.log(`Logging action: ${log.action} at ${log.timestamp}`);
//         return await originalMethod.apply(this, args);
//     };

//     return descriptor;
// }

// export class NotesApp {
//     notes: Note[];

//     constructor() {
//         this.notes = [];
//     }

//     @LogAction
//     async createNote(title: string, description: string, userId: string, dueDate: Date) {
//         const note = new Note(title, description, userId, dueDate);
//         this.notes.push(note);
//         return { ...note }; 
//     }

//     @LogAction
//     async updateNote(noteId: string, updatedFields: Partial<Note>) {
//         const note = this.notes.find(note => note.userId === noteId);
//         if (!note) {
//             throw new Error(`Note with id ${noteId} not found`);
//         }
//         Object.assign(note, updatedFields);
//         return { ...note }; 
//     }
    

//     @LogAction
//     async deleteNote(noteId: string) {
//         const index = this.notes.findIndex(note => note.userId === noteId);
//         if (index === -1) {
//             throw new Error(`Note with id ${noteId} not found`);
//         }
//         this.notes.splice(index, 1);
//         return true;
//     }

//     @LogAction
//     async getNoteById(noteId: string) {
//         const note = this.notes.find(note => note.userId === noteId);
//         if (!note) {
//             throw new Error(`Notewith id ${noteId} not found`);
//         }
//         return note;
//     }
// }

import fs from 'fs'; // Importa el módulo fs para manejar archivos
import { Log } from '../models/Log';
import { Note } from '../models/Note';

export class NotesApp {
    notes: Note[];

    constructor() {
        this.notes = this.loadNotesFromFile(); // Carga las notas desde el archivo JSON al inicializar la aplicación

 
        this.createNote = this.logAction(this.createNote);
        this.updateNote = this.logAction(this.updateNote);
        this.deleteNote = this.logAction(this.deleteNote);
        this.getNoteById = this.logAction(this.getNoteById);
    }

    // Método para cargar notas desde el archivo JSON
    private loadNotesFromFile(): Note[] {
        try {
            const data = fs.readFileSync('./data/data.json', 'utf-8');
            return JSON.parse(data);
        } catch (error) {
            // Si ocurre un error (por ejemplo, el archivo no existe), devuelve un array vacío
            return [];
        }
    }

    // Método para guardar notas en el archivo JSON
    private saveNotesToFile(): void {
        fs.writeFileSync('./data/data.json', JSON.stringify(this.notes, null, 2), 'utf-8');
    }

    // Método decorador para log de acciones
    private logAction(method: Function) {
        return async (...args: any[]) => {
            const log = new Log(`Action: ${method.name}`);
            console.log(`Logging action: ${log.action} at ${log.timestamp}`);
            const result = await method.apply(this, args);
            this.saveNotesToFile(); // Guarda las notas después de la acción
            return result;
        };
    }

    // Métodos CRUD

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
