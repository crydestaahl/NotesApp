'use strict'

/********************************************************
 Check for saved data in local storage
 *******************************************************/


const getSavedNotes = () => {
    const notesJSON = localStorage.getItem('notes')
    
    try {
        return notesJSON ? JSON.parse(notesJSON) : []
    } catch (e) {
        return []
    }
}

/********************************************************
Remove note   
 *******************************************************/
const removeNote = (id) => {
    const noteIndex = notes.findIndex((note) =>  note.id === id)

    if (noteIndex > -1) {
        notes.splice(noteIndex, 1)
    }
}

/********************************************************
Generate notes
 *******************************************************/ 


const generateNoteDOM = (note) => {
    
    const noteElement = document.createElement('div')
    const textElement = document.createElement('a')
    const button = document.createElement('button')
       
    button.textContent = 'x'
    noteElement.appendChild(button)
    button.addEventListener('click', function () {
        removeNote(note.id)
        saveNotes(notes)
        renderNotes(notes, filters)
    })

    //Setup the note title text 
    if (note.title.length > 0) {
        textElement.textContent = note.title
    } else {
        textElement.textContent = 'Unnamed note'
    }
   
    textElement.setAttribute('href', `/edit.html#${note.id}`)
    noteElement.appendChild(textElement)

    return noteElement
}

/********************************************************
Sort notes
 *******************************************************/

const sortNotes = (notes, sortBy) => {
    if (sortBy === 'byEdited') {
        return notes.sort(function (a, b) {
            if (a.updatedAt > b.updatedAt) {
                return -1
            } else if (a.updatedAt < b.updatedAt) {
                return 1
            } else {
                return 0
            }
        })
    } else if (sortBy === 'byCreated') {
        return notes.sort(function (a, b) {
            if (a.createdAt > b.createdAt) {
                return -1
            } else if (a.createdAt < b.createdAt) {
                return 1
            } else {
                return 0
            }
        })
    } else if (sortBy === 'byAlphabet') {
        return notes.sort(function (a, b) {
            if (a.title.toLowerCase() < b.title.toLowerCase()) {
                return -1
            } else if (a.title.toLowerCase > b.title.toLowerCase()) {
                return 1
            } else {
                return 0
            }
        })
    } 
}


/********************************************************
Render app notes
 *******************************************************/

const renderNotes = (notes, filters) => {
    notes = sortNotes(notes, filters.sortBy)
    const filteredNotes = notes.filter(function (note) {
        return note.title.toLowerCase().includes(filters.searchText.toLowerCase())
    })

    document.querySelector('#notes').innerHTML = ''

    filteredNotes.forEach(function (note) {
        const noteElement = generateNoteDOM(note)
        document.querySelector('#notes').appendChild(noteElement)
    })
}

/********************************************************
Save notes to local storage
 *******************************************************/

const saveNotes = (notes) => {
    localStorage.setItem('notes', JSON.stringify(notes))
}

/********************************************************
Get the last edited message
 *******************************************************/
const generateLastEdited = (timestamp) => {
    return `Last edited ${moment(timestamp).fromNow()}`
}
    