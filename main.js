let notesListedRootElements = document.querySelector('#notes');
let notesListedRootElements1 = document.querySelector('#editNotes');
let notesListedRootElements2 = document.querySelector('#editNotes1');

var my_div = document.getElementById("notes");

my_div.scrollTop = my_div.scrollHeight;

let notes = [];
let editNotes = [];
let editNotes1 = [];


function renderElementsToscreen(){

    if(localStorage.getItem('notes')){
      notes = JSON.parse(localStorage.getItem('notes'))
      notes.forEach(note=>{
        renderNoteToListed(note, note.uniqueId);
      })
    }
  
}
  
renderElementsToscreen();

function renderElementsToscreen1(){

    if(localStorage.getItem('editNotes')){
        editNotes = JSON.parse(localStorage.getItem('editNotes'))
        editNotes.forEach(editNote=>{
        renderNoteToListed1(editNote, editNote.uniqueId1);
      })
    }
  
}

renderElementsToscreen1();

function renderElementsToscreen2(){

    if(localStorage.getItem('editNotes1')){
        editNotes1 = JSON.parse(localStorage.getItem('editNotes1'))
        editNotes1.forEach(editNote1=>{
        renderNoteToListed2(editNote1, editNote1.uniqueId2);
      })
    }
  
}

renderElementsToscreen2();

document.querySelector('#createNote').addEventListener('click', () =>{

    let uniqueId = 'note' + Math.floor(Math.random() * 1000)
    let uniqueId1 = 'editNote' + Math.floor(Math.random() * 1000)
    let uniqueId2 = 'editNote1' + Math.floor(Math.random() * 1000)

    let note = {
        title : document.querySelector('#title').value,
        content : document.querySelector('#content').value
    }

    let editNote = {
        title : document.querySelector('#title').value,
        content : document.querySelector('#content').value
    }

    let editNote1 = {
        title : document.querySelector('#title').value,
        content : document.querySelector('#content').value
    }

    renderNoteToListed(note, uniqueId);
    renderNoteToListed1(editNote, uniqueId1);
    renderNoteToListed2(editNote1, uniqueId2);

    addNoteToLocalStorage(note, uniqueId)
    addNoteToLocalStorage1(editNote, uniqueId1)
    addNoteToLocalStorage2(editNote1, uniqueId2)
})

function renderNoteToListed(note, uniqueId){

    let noteDiv = document.createElement('div');
    noteDiv.classList.add('note', uniqueId);
    let noteTitle = document.createElement('h5')
    let noteContent = document.createElement('p')


    noteTitle.innerHTML = note.title;
    noteContent.innerHTML = note.content;

    noteDiv.appendChild(noteTitle);
    noteDiv.appendChild(noteContent);

    notesListedRootElements.appendChild(noteDiv);
    

    document.querySelector('#title').value = '',
    document.querySelector('#content').value = ''
}


function renderNoteToListed1(editNote, uniqueId1){
    let noteDiv = document.createElement('div');
    noteDiv.classList.add('note', uniqueId1);
    let noteTitle = document.createElement('h5')
    let noteContent = document.createElement('p')


    noteTitle.innerHTML = editNote.title;
    noteContent.innerHTML = editNote.content;

    noteDiv.appendChild(noteTitle);
    noteDiv.appendChild(noteContent);

    notesListedRootElements1.appendChild(noteDiv);
    

    document.querySelector('#title').value = '',
    document.querySelector('#content').value = ''
}


function renderNoteToListed2(editNote1, uniqueId2){
    let noteDiv = document.createElement('div');
    noteDiv.classList.add('note', uniqueId2);
    let noteTitle = document.createElement('h5')
    let noteContent = document.createElement('p')


    noteTitle.innerHTML = editNote1.title;
    noteContent.innerHTML = editNote1.content;

    noteDiv.appendChild(noteTitle);
    noteDiv.appendChild(noteContent);

    notesListedRootElements2.appendChild(noteDiv);
    

    document.querySelector('#title').value = '',
    document.querySelector('#content').value = ''
}

function addNoteToLocalStorage(note, uniqueId){
    note = {...note , uniqueId}
  
    notes.push(note)
  
    localStorage.setItem('notes', JSON.stringify(notes))
  
}

function addNoteToLocalStorage1(editNote, uniqueId1){
    editNote = {...editNote , uniqueId1}
  
    editNotes.push(editNote)
  
    localStorage.setItem('editNotes', JSON.stringify(editNotes))
  
}

function addNoteToLocalStorage2(editNote1, uniqueId2){
    editNote1 = {...editNote1 , uniqueId2}
  
    editNotes1.push(editNote1)
  
    localStorage.setItem('editNotes1', JSON.stringify(editNotes1))
  
}

// let myEditDiv = document.getElementById('body')

// document.querySelector('#editNote').addEventListener('click', (e)=>{
//     console.log('edit');
//     myEditDiv.value = e.parentElement.previousElementSibling.innerHTML;
//     e.parentElement.parentElement.remove();
// })

// let editNote = (e) => {
//     console.log('edit');
//     myEditDiv.value = e.parentElement.previousElementSibling.innerHTML;
//     e.parentElement.remove();
// }

// editNote();


// SHOW THE TASK-PREVIEW OF THE WHEN 'NEW TASK' BUTTON CLICKED.

let previewContainer = document.querySelector('.task-preview')
let previewTask = document.querySelector('.preview')


document.querySelector('#newTask').addEventListener('click', ()=>{
    previewContainer.style.display = 'flex';
    preview.className = 'active';
});

document.querySelector('.fa-xmark').addEventListener('click', () =>{
    previewContainer.style.display = 'none';
    preview.className = 'none';
    console.log('close')
})

// NEW TASK BUTTON ACTION.

let noteTaskListedOnBody = document.querySelector('#body');

document.querySelector('#task').addEventListener('click', ()=>{

    let matter = {
        content : document.querySelector('#content-task').value
    }

    let taskList = document.createElement('li');

    taskList.innerHTML = matter.content;

    noteTaskListedOnBody.appendChild(taskList);

    document.querySelector('#content-task').value = ''

})

// DELETE BUTTON 

let para = document.querySelector('#para');
let taskHead = document.querySelector('#list');
let points = document.querySelector('#taskPoints');

document.querySelector('#DeleteTask').addEventListener('click', ()=>{
    para.remove();
    taskHead.remove();
    points.remove();
})