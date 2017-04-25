(function(exports) {
  function NoteList() {
    this.allNotes = [];
  };

  NoteList.prototype.getNotes = function () {
    return this.allNotes;
  };

  exports.NoteList = NoteList;
  exports.NoteList.getNotes = NoteList.getNotes;
})(this);
