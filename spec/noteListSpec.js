(function(exports) {
  function testNoteList() {
    var noteList = new NoteList();
    assert.isEqual(noteList.allNotes.length, 0);
  };

  function testGetNotes() {
    var noteList = new NoteList();
    assert.isEqual(noteList.getNotes(), noteList.allNotes)
  }


  (function() {
    var noteList = new NoteList();
    note = new Note("hey");
    note1 = new Note("hi");
    note2 = new Note("bye");
    noteList.allNotes.push(note.getText(), note1.getText(), note2.getText());
    assert.arraysEqual(noteList.allNotes, ["hey", "hi", "bye"])
  })();
  testNoteList();
  testGetNotes();
})(this);
