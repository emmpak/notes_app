(function(exports) {

  (function testNoteList() {
    var noteList = new NoteList();
    assert.isEqual(noteList.allNotes.length, 0);
  })();

  (function testGetNotes() {
    var noteList = new NoteList();
    assert.isEqual(noteList.getNotes(), noteList.allNotes)
  })();

  (function testSaveNote() {
    var noteList = new NoteList();
    noteList.saveNote("hey");
    assert.isEqual(noteList.allNotes.length, 1);
    assert.doesInclude(noteList.allNotes[0].text, "hey");
    assert.isEqual(noteList.allNotes[0].id,0)
    noteList.saveNote("hey");
    assert.isEqual(noteList.allNotes[1].id,1)
  })();

  (function testGetSpecificNote() {
    var noteList = new NoteList();
    noteList.saveNote("Hello");
    console.log(noteList.allNotes)
    assert.isEqual(noteList.getSpecificNote(0).text, "Hello")
  })();

})(this);
