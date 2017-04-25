(function(exports) {
  function NoteListView(noteList) {
    this.notesRepo = noteList;
    this.getAllNotes = function() {
      // this.NotesRepo.allNotes.join("<li><div>")
      var html = []
      for(var i=0; i < this.notesRepo.allNotes.length; i++) {
        html.push('<li><div>' + this.notesRepo.allNotes[i].text + '</div></li>');
      }
      return '<ul>' + html.join('') + '</ul>';
    }
  }

  exports.NoteListView = NoteListView;
})(this);




var html = "<ul><li><div>Hello</div></li><li><div>World</div></li></ul>";
