(function(exports) {
  function NoteList() {
    this.allNotes = [];
  }

  NoteList.prototype = {
    getNotes: function () { return this.allNotes; },
    saveNote: function(text) {
                var note = new Note(text, this.allNotes.length);
                return this.allNotes.push(note);
              },
    getSpecificNote: function(id) { return this.allNotes[id] }
  }

  exports.NoteList = NoteList;
})(this);
