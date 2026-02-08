
let notesTitle = [];
let notes = [];
let trashNotesTitle = [];
let trashNotes = [];

function renderNotes() {
    let contentRef = document.getElementById("content");
    contentRef.innerHTML = "";


    for (let indexNote = 0; indexNote < notes.length; indexNote++) {
        contentRef.innerHTML += getNoteTemplate(indexNote);
    }
}

function renderTrashNotes() {
    let trashContentRef = document.getElementById("trash_content");
    trashContentRef.innerHTML = "";


    for (let indexTrashNote = 0; indexTrashNote < trashNotes.length; indexTrashNote++) {
        trashContentRef.innerHTML += getTrashNoteTemplate(indexTrashNote);
    }
}

function addNote() {
    let noteTitleInputRef = document.getElementById('note_title_input');
    let noteTitleInput = noteTitleInputRef.value;
    let noteInputRef = document.getElementById('note_input');
    let noteInput = noteInputRef.value;

    notesTitle.push(noteTitleInput);
    notes.push(noteInput);

    saveToLocalStorage();

    renderNotes();

    noteTitleInputRef.value = "";
    noteInputRef.value = "";
}

function saveToLocalStorage() {
    localStorage.setItem('notesTitle', JSON.stringify(notesTitle));
    localStorage.setItem('notes', JSON.stringify(notes));
}

function saveTrashToLocalStorage() {
    localStorage.setItem('trashNotesTitle', JSON.stringify(trashNotesTitle));
    localStorage.setItem('trashNotes', JSON.stringify(trashNotes));
}

function getFromLocalStorage() {
    let arrTitle = JSON.parse(localStorage.getItem('notesTitle'))
    let arr = JSON.parse(localStorage.getItem('notes'));
    let arrTrashTitle = JSON.parse(localStorage.getItem('trashNotesTitle'));
    let arrTrash = JSON.parse(localStorage.getItem('trashNotes'));

    if (arrTitle) {
        notesTitle = arrTitle;
    }

    if (arr) {
        notes = arr;
    }

    if (arrTrashTitle) {
        trashNotesTitle = arrTrashTitle;
    }

    if (arrTitle) {
        trashNotes = arrTrash;
    }

    renderNotes();
    renderTrashNotes();
}

function toTrashNote(indexNote) {
    let trashNoteTitle = notesTitle.splice(indexNote, 1);
    let trashNote = notes.splice(indexNote, 1);
    trashNotesTitle.push(trashNoteTitle[0]);
    trashNotes.push(trashNote[0]);
    
    saveToLocalStorage();
    saveTrashToLocalStorage();
    renderNotes();
    renderTrashNotes();
}

function deleteNote(indexTrashNote) {
    trashNotesTitle.splice(indexTrashNote,1);
    trashNotes.splice(indexTrashNote, 1);
    saveTrashToLocalStorage();
    renderTrashNotes();
}


