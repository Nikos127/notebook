
let notesTitles = [];
let notes = [];
let trashNotesTitles = [];
let trashNotes = [];

let allNotes = {
    'notesTitles': [],
    'notes': [],
    'trashNotesTitles': [],
    'trashNotes': []
};

function moveNote(indexNote, startKey, destinationKey) {
    let note = allNotes[startKey].splice(indexNote, 1);
    allNotes[destinationKey].push(note[0]);

    let noteTitle = allNotes[startKey + "Titles"].splice(indexNote, 1);
    allNotes[destinationKey + "Titles"].push(noteTitle[0]);


    renderNotes();
    renderTrashNotes();
    saveToLocalStorage();
    saveTrashToLocalStorage();
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

    allNotes.notesTitles.push(noteTitleInput);
    allNotes.notes.push(noteInput);

    saveToLocalStorage();

    renderNotes();

    noteTitleInputRef.value = "";
    noteInputRef.value = "";
}

function saveToLocalStorage() {
    localStorage.setItem('notesTitles', JSON.stringify(allNotes.notesTitles));
    localStorage.setItem('notes', JSON.stringify(allNotes.notes));
}

function saveTrashToLocalStorage() {
    localStorage.setItem('trashNotesTitles', JSON.stringify(allNotes.trashNotesTitles));
    localStorage.setItem('trashNotes', JSON.stringify(allNotes.trashNotes));
}

function getFromLocalStorage() {
    let arrTitle = JSON.parse(localStorage.getItem('notesTitles'))
    let arr = JSON.parse(localStorage.getItem('notes'));
    let arrTrashTitle = JSON.parse(localStorage.getItem('trashNotesTitles'));
    let arrTrash = JSON.parse(localStorage.getItem('trashNotes'));

    if (arrTitle) {
        allNotes.notesTitles = arrTitle;
    }

    if (arr) {
        allNotes.notes = arr;
    }

    if (arrTrashTitle) {
        allNotes.trashNotesTitles = arrTrashTitle;
    }

    if (arrTrash) {
        allNotes.trashNotes = arrTrash;
    }

    renderNotes();
    renderTrashNotes();
}

function deleteNote(indexTrashNote) {
    allNotes.trashNotes.splice(indexTrashNote, 1);
    allNotes.trashNotesTitles.splice(indexTrashNote, 1);

    saveTrashToLocalStorage();
    renderTrashNotes();
}


