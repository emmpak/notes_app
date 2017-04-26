(function(exports) {
  function NoteList() {
    this.allNotes = [],
    this.getNotes = function () { return this.allNotes; },
    this.saveNote = function(text) {
      var note = new Note(text, this.allNotes.length);
      return this.allNotes.push(note);
    };
  };

  exports.NoteList = NoteList;
})(this);
