(function(exports) {
  function NoteList() {
    this.allNotes = [];
  };

  NoteList.prototype.getNotes = function () {
    return this.allNotes;
  };

  NoteList.prototype.saveNote = function(text) {
    var note = new Note(text);
    return this.allNotes.push(note);
  }

  exports.NoteList = NoteList;
})(this);
