const inputText = document.querySelector('#search-text');

// The DOM - Document Model 

let notes = getSavedNotes()

const filters = {
    searchText: ''
}

renderNotes(notes, filters)

document.querySelector('#create-note').addEventListener('click', function(e) {
    const uniqueId = uuidv4();
    notes.push({
        id: uniqueId,
        title: '',
        body: ''   
    })
    saveNotes(notes)
    location.assign(`/edit.html#${uniqueId}`)
})


inputText.addEventListener('input', (e) => {
    filters.searchText = e.target.value
    renderNotes(notes, filters)
})


document.querySelector('#filter-by').addEventListener('change', function (e) {
    console.log(e.target.value)
})

window.addEventListener('storage', (e) => {
    if (e.key === 'notes') {
        notes = JSON.parse(e.newValue)
        renderNotes(notes, filters)
    }
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