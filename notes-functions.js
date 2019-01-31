
/********************************************************
 Check for saved data in local storage
 *******************************************************/


const getSavedNotes = function () {
    const notesJSON = localStorage.getItem('notes')

    if (notesJSON !== null) {
        return JSON.parse(notesJSON)
    } else {
        return []
    }
}

/********************************************************
Remove note
 *******************************************************/
const removeNote = function (id) {
    const noteIndex = notes.findIndex(function (note) {
        return note.id === id
    })

    if (noteIndex > -1) {
        notes.splice(noteIndex, 1)
    }
}

/********************************************************
Generate notes
 *******************************************************/ 



const generateNoteDOM = function (note) {
    
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
Render app notes
 *******************************************************/



const renderNotes = function (notes, filters) {
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



const saveNotes = function (notes) {
    localStorage.setItem('notes', JSON.stringify(notes))
}



/********************************************************
*
 *******************************************************/
