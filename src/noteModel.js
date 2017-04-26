(function(exports) {
  function Note(text, id) {
    this.id = id
    this.text = text,
    this.getText = function() { return this.text; };
  };

  exports.Note = Note;

})(this);
