(function(exports) {

  var note = new Note();
  var noteList = new NoteList();

  function testNoteList() {
    // var noteList = new NoteList();
    assert.isEqual(noteList.allNotes.length, 0);
  };

  function testGetNotes() {
    // var noteList = new NoteList();
    assert.isEqual(noteList.getNotes(), noteList.allNotes)
  }

  function testSaveNote() {
    // var noteList = new NoteList();
    // var note = new Note();
    noteList.saveNote("Hello World")
    assert.isEqual(noteList.allNotes.length, 1)
  }

  testNoteList();
  testGetNotes();
  testSaveNote();
})(this);
