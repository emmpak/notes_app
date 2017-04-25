// var assert = require("./testing_library/assert").assert
(function(exports) {
  (function testContentOfNote() {
    var note = new Note("This is a note!");
    assert.isTrue(note.text === "This is a note!");
  })();

  (function testGetContentOfNote() {
    var note = new Note("This is a note!");
    assert.isEqual(note.getText(), note.text);
  })();

  (function testGetContentOfNote() {
    var note = new Note("This is a note!");
    assert.doesInclude(note.getText(), "This");
  })();

  (function testGetContentOfNote() {
    var note = new Note("This is a note!");
    assert.isNotEqual(note.getText(), "Practice test");
  })();

})(this);
