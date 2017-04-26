(function(exports) {
  function NoteList() {}

  NoteList.prototype = {
    allNotes: [],
    getNotes: function () { return this.allNotes; },
    saveNote: function(text) {
                var note = new Note(text, this.allNotes.length);
                return this.allNotes.push(note);
              }
  }

  exports.NoteList = NoteList;
})(this);
