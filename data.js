let notes = [];

function addNote() {
  const title = document.getElementById("noteTitle").value.trim();
  const body = document.getElementById("noteBody").value.trim();

  if (title === "" || body === "") {
    alert("Both fields are required!");
    return;
  }

  const newNote = {
    title: title,
    body: body
  };

  notes.push(newNote);
  renderNotes();


  document.getElementById("noteTitle").value = "";
  document.getElementById("noteBody").value = "";
}

function renderNotes() {
  const container = document.getElementById("notesContainer");
  container.innerHTML = "";

  notes.map((note, index) => {
    const noteCard = document.createElement("div");
    noteCard.className = "note-card";

    const noteTitle = document.createElement("h3");
    noteTitle.textContent = note.title;

    const noteBody = document.createElement("p");
    noteBody.textContent = note.body;

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.onclick = () => deleteNote(index);

    noteCard.appendChild(noteTitle);
    noteCard.appendChild(noteBody);
    noteCard.appendChild(deleteBtn);

    container.appendChild(noteCard);
  });
}

function deleteNote(index) {
  notes.splice(index, 1);
  renderNotes();
}