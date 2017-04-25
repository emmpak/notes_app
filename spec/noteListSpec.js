(function(exports) {
  function testNoteList() {
    var noteList = new NoteList();
    assert.isEqual(noteList.allNotes.length, 0);
  };

  function testGetNotes() {
    var noteList = new NoteList();
    assert.isEqual(noteList.getNotes(), noteList.allNotes)
    var note = new Note();
    noteList.saveNote(note);
    assert.isEqual(noteList.getNotes(), noteList.allNotes)

  }

  function testSaveNote() {
    var noteList = new NoteList();
    var note = new Note();
    assert.isEqual(noteList.saveNote(note), note)
  }

  testNoteList();
  testGetNotes();
  testSaveNote();
})(this);
