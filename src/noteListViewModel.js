(function(exports) {
  function NoteListView(noteList) {
    this.notesRepo = noteList;
    this.getAllNotes = function() {
      var str = []
      for(var i=0; i < this.notesRepo.allNotes.length; i++) {
        str.push('<li><div><a href=#notes/' + this.notesRepo.allNotes[i].id + '>' + this.notesRepo.allNotes[i].text.slice(0, 20) + '</a></div></li>');
      }
      return '<ul>' + str.join('') + '</ul>';
    }
  }

  exports.NoteListView = NoteListView;
})(this);
