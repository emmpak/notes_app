(function(exports) {
  function Note(text) {
    this.text = text,
    this.getText = function() { return this.text; };
  };

  exports.Note = Note;

})(this);
