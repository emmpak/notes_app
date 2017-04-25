(function(exports) {
  function NoteList() {
    this.allNotes = [];
  };

  NoteList.prototype.getNotes = function () {
    return this.allNotes;
  };

  NoteList.prototype.saveNote = function(note) {
    return this.allNotes.push(note);
  }

  exports.NoteList = NoteList;
})(this);
