// The DOM - Document Model 

const notes = [{
    title: 'My next trip',
    body: 'I would like to go to Spain'
}, {
    title: 'Habits to work on',
    body: 'Drink more'
}, {
    title: 'Office Modifications',
    body: 'Get a new seat'
}]

const filters = {
    searchText: ''
}

const renderNotes = function (notes, filters) {
    const filteredNotes = notes.filter(function (note) {
        return note.title.toLowerCase().includes(filters.searchText.toLowerCase())
    })

    document.querySelector('#notes').innerHTML = ''

    filteredNotes.forEach(function (note) {
        const noteElement = document.createElement('p')
        noteElement.textContent = note.title
        document.querySelector('#notes').appendChild(noteElement)
    })
}

renderNotes(notes, filters)

document.querySelector('#create-note').addEventListener('click', function(e) {
    e.target.textContent = 'The button was clicked'
})


document.querySelector('#search-text').addEventListener('input', (e) => {
    filters.searchText = e.target.value
    renderNotes(notes, filters)
})

//Cancel default
document.querySelector('#name-form').addEventListener('submit', (e) => {
    e.preventDefault()
    e.target.elements.firstName.value = ''
    // console.log(e.target.elements.firstName.value)
})













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