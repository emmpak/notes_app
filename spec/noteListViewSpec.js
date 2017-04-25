(function(exports) {
  function testNoteListView() {
    var noteList = new NoteList();
    var noteListView = new NoteListView(noteList);
    assert.isEqual(noteListView.notesRepo,noteList)
  }

  testNoteListView();
})(this);
