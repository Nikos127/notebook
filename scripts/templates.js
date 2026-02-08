function getNoteTemplate(indexNote) {
    return `<p><b>${notesTitle[indexNote]}</b><br>${notes[indexNote]} </p><button onclick="toTrashNote(${indexNote})">Zum Papierkorb</button><div class="line"></div>`
}

function getTrashNoteTemplate(indexTrashNote) {
    return `<p><b>${trashNotesTitle[indexTrashNote]}</b><br>${trashNotes[indexTrashNote]} <button onclick="deleteNote(${indexTrashNote})">Löschen</button></p><div class="line"></div>`
}   