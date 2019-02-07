'use strict'

const titleValue = document.querySelector('#note-title')
const lastEditedText = document.querySelector('#last-edited')
const bodyValue = document.querySelector('#note-body')
const removeButton = document.querySelector('#remove-note')
const noteId = location.hash.substring(1)
const homeBtn = document.querySelector('#go-home')

//Get the notes
let notes = getSavedNotes();

let note = notes.find((note) => note.id === noteId)

if (!note) {
    location.assign('/index.html')
}

titleValue.value = note.title
bodyValue.value = note.body
lastEditedText.textContent = generateLastEdited(note.updatedAt)

//Listener for changes in input and save to local storage
titleValue.addEventListener('input',  () => {
    note.title = document.querySelector('#note-title').value
    note.updatedAt = moment().valueOf()
    lastEditedText.textContent = generateLastEdited(note.updatedAt)
    saveNotes(notes)
})

//Listener for changes in body text and save to local storage
bodyValue.addEventListener('input', () => {
    note.body = document.querySelector('#note-body').value
    note.updatedAt = moment().valueOf()
    lastEditedText.textContent = generateLastEdited(note.updatedAt)
    saveNotes(notes)
})

//Listener for clicks on button 
removeButton.addEventListener('click', () => {
    removeNote(note.id)
    saveNotes(notes)
    location.assign('/index.html')
})

window.addEventListener('storage', (e) => {
    if (e.key === 'notes') {
        notes = JSON.parse(e.newValue)
        let note = notes.find(function (note) {
            return note.id === noteId
        })

        if (!note) {
            location.assign('/index.html')
        }

        titleValue.value = note.title
        bodyValue.value = note.body
        lastEditedText.textContent = generateLastEdited(note.updatedAt)
    }
})

homeBtn.addEventListener('click', () => location.assign('/index.html'))
