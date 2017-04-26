
(function(exports) {
  var note = new Note("This is a note!",0);

  (function testContentOfNote() {
    assert.isTrue(note.text === "This is a note!");
  })();

  (function testContentOfNote() {
    assert.isTrue(note.id === 0);
  })();

  (function testGetContentOfNote() {
    assert.isEqual(note.getText(), note.text);
  })();

  (function testGetContentOfNote() {
    assert.doesInclude(note.getText(), "This");
  })();

  (function testGetContentOfNote() {
    assert.isNotEqual(note.getText(), "Practice test");
  })();

  (function testGetContentOfNote() {
    assert.isLesserThan(note.text.length, 20);
  })();

  (function testGetContentOfNote() {
    assert.isGreaterThan(note.text.length, 10);
  })();

})(this);
