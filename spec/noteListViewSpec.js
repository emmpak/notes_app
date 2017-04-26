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

  function testGetAllNotes20() {
    var noteList = new NoteList();
    noteList.saveNote("This is a note! This is a note!");
    var noteListView = new NoteListView(noteList);
    var html = "<ul><li><div>This is a note! This</div></li></ul>"
    assert.isEqual(noteListView.getAllNotes(),html);
  }

  testGetAllNotes20();
  testNoteListView();
  testGetAllNotes();
})(this);
