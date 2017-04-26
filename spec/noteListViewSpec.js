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
    var html = "<ul><li><div><a href=#notes/0>Hello</a></div></li><li><div><a href=#notes/1>World</a></div></li></ul>";
    assert.isEqual(noteListView.getAllNotes(),html);
  }

  function testGetAllNotes20() {
    var noteList = new NoteList();
    noteList.saveNote("This is a note! This is a note!");
    var noteListView = new NoteListView(noteList);
    var html = "<ul><li><div><a href=#notes/0>This is a note! This</a></div></li></ul>"
    assert.isEqual(noteListView.getAllNotes(),html);
  }

  testGetAllNotes20();
  testNoteListView();
  testGetAllNotes();
})(this);
