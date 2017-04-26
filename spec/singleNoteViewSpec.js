(function(exports) {
  (function() {
    var note = new Note("Hello")
    var singleNote = new SingleNoteView(note);
    var html = "<p>Hello</p>";
    assert.isEqual(singleNote.showSingleNote(),html);
  })();
})(this);
