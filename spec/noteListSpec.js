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
    noteList.saveNote("hey");
    assert.isEqual(noteList.allNotes.length, 1)
    assert.doesInclude(noteList.allNotes[0].text, "hey")
  }

  testNoteList();
  testGetNotes();
  testSaveNote();
})(this);
