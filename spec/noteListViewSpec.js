(function(exports) {


  function testNoteListView() {
    var noteList = new NoteList();
    var noteListView = new NoteListView(noteList);
    assert.isEqual(noteListView.notesRepo,noteList)
  }

  function testGetAllNotes() {
    var noteList = new NoteList();
    noteList.saveNote("Hello");
    noteList.saveNote("World");
    var noteListView = new NoteListView(noteList);
    var html = "<ul><li><div>hey</div></li><li><div>Hello</div></li><li><div>World</div></li></ul>";
    assert.doesInclude(noteListView.getAllNotes(), html);
  }

  testNoteListView();
  testGetAllNotes();
})(this);
