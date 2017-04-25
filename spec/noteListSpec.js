(function(exports) {
  function testNoteList() {
    var noteList = new NoteList();
    assert.isEqual(noteList.allNotes.length, 0);
  };

  function testGetNotes() {
    var noteList = new NoteList();
    assert.isEqual(noteList.getNotes(), noteList.allNotes)
  }

  testNoteList();
  testGetNotes();
})(this);
