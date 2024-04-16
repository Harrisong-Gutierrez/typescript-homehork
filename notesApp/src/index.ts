import { User } from './models/User';
import { NotesApp } from './services/ NotesApp';



async function createNewNote(notesApp: NotesApp, user: User) {
    return await notesApp.createNote("fryday", "This is a new note", user.email, new Date());
}

async function updateNoteDescription(notesApp: NotesApp, userId: string, newDescription: string) {
    return await notesApp.updateNote(userId, { description: newDescription });
}

async function getNoteById(notesApp: NotesApp, userId: string) {
    return await notesApp.getNoteById(userId);
}

async function deleteNoteById(notesApp: NotesApp, userId: string) {
    return await notesApp.deleteNote(userId);
}



(async () => {
    try {
        const user = new User("Harrisong", "Gutierrez", "Harrisong@gmail.com");

        const notesApp = new NotesApp();

        const newNote = await createNewNote(notesApp, user);
        console.log("Note created:", newNote);

        const updatedNote = await updateNoteDescription(notesApp, newNote.userId, "New description");
        console.log("Updated note:", updatedNote);

        const retrievedNote = await getNoteById(notesApp, updatedNote.userId);
        console.log("Retrieved note:", retrievedNote);

        const deleted = await deleteNoteById(notesApp, retrievedNote.userId);
        console.log("Deleted note:", deleted);

    } catch (error: any) {
        console.error("Error:", error.message);

    }
})();

