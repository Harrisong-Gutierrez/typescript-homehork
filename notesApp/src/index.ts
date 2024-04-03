import { User } from './models/User';
import { NotesApp } from './services/ NotesApp';

let arrData: any[] = [];

(async () => {
    const user = new User("Harrisong", "Gutierrez", "Harrisong@gmail.com");
    console.log("This is my user", user)
    const notesApp = new NotesApp();

    try {
        const newNote = await notesApp.createNote("Venus", "En la tranquila noche, mis nostalgias amargas sufría. En busca de quietud bajé al fresco y callado jardín. En el obscuro cielo Venus bella temblando lucía, como incrustado en ébano un dorado y divino jazmín. A mi alma enamorada, una reina oriental parecía,que esperaba a su amante bajo el techo de su camarín", user.email, new Date());
        // console.log("Note created:", newNote);
        arrData.push(newNote)



        const updatedNote = await notesApp.updateNote(newNote.userId, { description: "New description" });
        // console.log("Updated note:", updatedNote);
        arrData.push(updatedNote)
        // console.log(updatedNote)

        const retrievedNote = await notesApp.getNoteById(updatedNote.userId);
        // console.log("Recovered note:", retrievedNote);

        const deleted = await notesApp.deleteNote(retrievedNote.userId);
        // console.log("Deleted note:", deleted);
        console.log("All notes", arrData)
    } catch (error: any) {
        console.error("Error:", error.message);
    }
})();