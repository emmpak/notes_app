(function(exports) {

  function SingleNoteView(note) {
    this.note = note
    this.showSingleNote = function() {return "<p>" + this.note.text + "</p>";};
  };

  exports.SingleNoteView = SingleNoteView;
})(this);
