function getNoteTemplate(indexNote) {
    return `<p><b>${allNotes.notesTitles[indexNote]}</b><br>${allNotes.notes[indexNote]} </p><button onclick="moveNote(${indexNote},'notes','trashNotes')">Zum Papierkorb</button><div class="line"></div>`
}

function getTrashNoteTemplate(indexTrashNote) {
    return `<p><b>${allNotes.trashNotesTitles[indexTrashNote]}</b><br>${allNotes.trashNotes[indexTrashNote]} <button onclick="deleteNote(${indexTrashNote})">Löschen</button></p><div class="line"></div>`
}   