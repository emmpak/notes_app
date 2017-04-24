// var assert = require("./testing_library/assert").assert
(function(exports) {
  function testContentOfNote() {
    var note = new Note("This is a note!");
    assert.isTrue(note.text === "This is a note!");
  };
  testContentOfNote();
})(this);
