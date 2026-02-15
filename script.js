
let notesTitles = ['Aufgaben', 'Essen'];
let notes = ['Lernen', 'Pizza bestellen'];
let trashNotesTitles = [];
let trashNotes = [];

let allNotes = {
    'notesTitles': ['Aufgaben', 'Essen'],
    'notes': ['Lernen', 'Pizza bestellen'],
    'trashNotesTitles': [],
    'trashNotes': []
};

function moveNote(indexNote, startKey, destinationKey) {
    let trashNote = allNotes[startKey].splice(indexNote, 1);
    allNotes[destinationKey].push(trashNote[0]);

    let trashNoteTitle = allNotes[startKey + "Titles"].splice(indexNote, 1);
    allNotes[destinationKey + "Titles"].push(trashNoteTitle[0]);


    renderNotes();
    renderTrashNotes();
}

function renderNotes() {
    let contentRef = document.getElementById("content");
    contentRef.innerHTML = "";


    for (let indexNote = 0; indexNote < allNotes.notes.length; indexNote++) {
        contentRef.innerHTML += getNoteTemplate(indexNote);
    }
}

function renderTrashNotes() {
    let trashContentRef = document.getElementById("trash_content");
    trashContentRef.innerHTML = "";


    for (let indexTrashNote = 0; indexTrashNote < allNotes.trashNotes.length; indexTrashNote++) {
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
    localStorage.setItem('notesTitles', JSON.stringify(notesTitles));
    localStorage.setItem('notes', JSON.stringify(notes));
}

function saveTrashToLocalStorage() {
    localStorage.setItem('trashNotesTitles', JSON.stringify(trashNotesTitles));
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
        trashNotesTitles = arrTrashTitle;
    }

    if (arrTitle) {
        trashNotes = arrTrash;
    }

    renderNotes();
    renderTrashNotes();
}

function toTrashNote(indexNote) {
    let trashNoteTitle = notesTitles.splice(indexNote, 1);
    let trashNote = notes.splice(indexNote, 1);
    trashNotesTitles.push(trashNoteTitle[0]);
    trashNotes.push(trashNote[0]);

    saveToLocalStorage();
    saveTrashToLocalStorage();
    renderNotes();
    renderTrashNotes();
}

function deleteNote(indexTrashNote) {
    trashNotesTitles.splice(indexTrashNote, 1);
    trashNotes.splice(indexTrashNote, 1);
    saveTrashToLocalStorage();
    renderTrashNotes();
}


