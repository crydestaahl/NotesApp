// The DOM - Document Model 

let notes = []

const filters = {
    searchText: ''
}

//Check for existing saved data
const notesJSON = localStorage.getItem('notes')

if (notesJSON !== null) {
    notes = JSON.parse(notesJSON)
}


const renderNotes = function (notes, filters) {
    const filteredNotes = notes.filter(function (note) {
        return note.title.toLowerCase().includes(filters.searchText.toLowerCase())
    })

    document.querySelector('#notes').innerHTML = ''

    filteredNotes.forEach(function (note) {
        const noteElement = document.createElement('p')

        if (note.title.length > 0) {
            noteElement.textContent = note.title
        } else {
            noteElement.textContent = 'Unnamed note'
        }

        document.querySelector('#notes').appendChild(noteElement)
    })
}

renderNotes(notes, filters)

document.querySelector('#create-note').addEventListener('click', function(e) {
    notes.push({
        title: '',
        body: ''
    })
    localStorage.setItem('notes', JSON.stringify(notes))
    renderNotes(notes, filters)
})


document.querySelector('#search-text').addEventListener('input', (e) => {
    filters.searchText = e.target.value
    renderNotes(notes, filters)
})


document.querySelector('#filter-by').addEventListener('change', function (e) {
    console.log(e.target.value)
})



// Intro till Local Storage

// const user = {
//     name : 'andrew',
//     age : 27
// }
// const userJSON = JSON.stringify(user)
// console.log(userJSON)
// localStorage.setItem('user', userJSON)


// const userJSON = localStorage.getItem('user')
// const user = JSON.parse(userJSON)
// console.log(`${user.name} is ${user.age}`)



//localStorage.setItem('location', 'Göteborg')

//console.log(localStorage.getItem('location'))

//localStorage.removeItem('location')

// localStorage.clear()


// //Cancel default
// document.querySelector('#name-form').addEventListener('submit', (e) => {
//     e.preventDefault()
//     e.target.elements.firstName.value = ''
//     // console.log(e.target.elements.firstName.value)
// })


// document.querySelector('#remove-all').addEventListener('click', (e) => {
//     document.querySelectorAll('.note').forEach(function (note) {
//         note.remove()
//     })
// })

// document.querySelector('.note').addEventListener('click', (e) => {
    
// })



//let ps = document.querySelectorAll('p'); 

// ps.forEach(p => {
//     p.textContent = '******'
    
//     //console.log(p.textContent)
//remove stuff
//     //p.remove()
// });

// Add new element
// const newParagraph = document.createElement('p')
// newParagraph.textContent = 'This is the new text'
// document.querySelector('body').appendChild(newParagraph)