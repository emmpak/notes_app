(function(exports) {

  function singleNoteView(note) {
    this.note = note
    this.showSingleNote = function() {return "<p>" + this.note.text + "</p>";};
  };

  exports.singleNoteView = singleNoteView;
})(this);
