(function(exports) {
  function NoteList() {
    this.allNotes = [];
  };

  NoteList.prototype.getNotes = function () {
    return this.allNotes;
  };

  NoteList.prototype.saveNote = function(note) {
    return note;
  }

  exports.NoteList = NoteList;
  exports.NoteList.getNotes = NoteList.getNotes;
})(this);
