document.getElementById('toggleNote').addEventListener('click', function() {
    const noteSection = document.getElementById('noteSection');
    noteSection.classList.toggle('hidden');
});

document.getElementById('toggleEditor').addEventListener('click', function() {
    const editorSection = document.getElementById('editorSection');
    editorSection.classList.toggle('hidden');
});

document.getElementById('saveNote').addEventListener('click', function() {
    const noteInput = document.getElementById('noteInput');
    const notesDisplay = document.getElementById('notesDisplay');
    const note = noteInput.value;

    if (note) {
        const noteElement = document.createElement('div');
        noteElement.textContent = note;
        notesDisplay.appendChild(noteElement);
        noteInput.value = '';
    }
});

document.getElementById('savePost').addEventListener('click', function() {
    const editor = document.getElementById('editor');
    const postsDisplay = document.getElementById('postsDisplay');
    const postContent = editor.innerHTML;

    if (postContent) {
        const postElement = document.createElement('div');
        postElement.innerHTML = postContent;
        postsDisplay.appendChild(postElement);
        editor.innerHTML = '';
    }
});

function formatText(command) {
    document.execCommand(command, false, null);
}