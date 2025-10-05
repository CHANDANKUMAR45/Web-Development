const addNoteBtn = document.getElementById('addNoteBtn');
const newNote = document.getElementById('newNote');
const notesContainer = document.getElementById('notesContainer');
const themeToggle = document.getElementById('themeToggle');

let editingNoteIndex = null;

window.addEventListener('load', () => {
  const savedNotes = JSON.parse(localStorage.getItem('notes')) || [];
  savedNotes.forEach((note, index) => createNoteElement(note.text, note.date, index));
});

addNoteBtn.addEventListener('click', () => {
  const noteText = newNote.value;
  if (noteText.trim() === '') return;

  const currentDate = new Date().toLocaleString();
  if (editingNoteIndex !== null) {
    updateNoteInLocalStorage(noteText, currentDate, editingNoteIndex);
    resetInput();
  } else {
    createNoteElement(noteText, currentDate);
    saveNoteToLocalStorage(noteText, currentDate);
  }
  newNote.value = '';
});

function createNoteElement(text, date, index = null) {
  const noteDiv = document.createElement('div');
  noteDiv.classList.add('note');

  const noteText = document.createElement('pre');
  noteText.textContent = text;

  const noteDate = document.createElement('div');
  noteDate.classList.add('note-date');
  noteDate.textContent = date;

  const noteButtons = document.createElement('div');
  noteButtons.classList.add('note-buttons');

  const editBtn = document.createElement('button');
  editBtn.textContent = 'Edit';
  editBtn.addEventListener('click', () => editNote(text, date, index || getNoteIndex(text)));

  const deleteBtn = document.createElement('button');
  deleteBtn.textContent = 'Delete';
  deleteBtn.addEventListener('click', () => {
    noteDiv.remove();
    deleteNoteFromLocalStorage(text);
  });

  noteButtons.appendChild(editBtn);
  noteButtons.appendChild(deleteBtn);

  noteDiv.appendChild(noteText);
  noteDiv.appendChild(noteDate);
  noteDiv.appendChild(noteButtons);
  notesContainer.appendChild(noteDiv);
}

function saveNoteToLocalStorage(note, date) {
  const notes = JSON.parse(localStorage.getItem('notes')) || [];
  notes.push({ text: note, date });
  localStorage.setItem('notes', JSON.stringify(notes));
}

function updateNoteInLocalStorage(newText, newDate, index) {
  const notes = JSON.parse(localStorage.getItem('notes'));
  notes[index] = { text: newText, date: newDate };
  localStorage.setItem('notes', JSON.stringify(notes));

  notesContainer.innerHTML = '';
  notes.forEach((note, i) => createNoteElement(note.text, note.date, i));
  editingNoteIndex = null;
}

function deleteNoteFromLocalStorage(note) {
  const notes = JSON.parse(localStorage.getItem('notes')) || [];
  const updatedNotes = notes.filter(n => n.text !== note);
  localStorage.setItem('notes', JSON.stringify(updatedNotes));
}

function editNote(text, date, index) {
  newNote.value = text;
  editingNoteIndex = index;
  addNoteBtn.textContent = 'Update Note';
}

function getNoteIndex(text) {
  const notes = JSON.parse(localStorage.getItem('notes'));
  return notes.findIndex(note => note.text === text);
}

function resetInput() {
  newNote.value = '';
  addNoteBtn.textContent = 'Add Note';
}

themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark');
  themeToggle.textContent = document.body.classList.contains('dark') ? '☀️' : '🌙';
});
