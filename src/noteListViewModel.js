(function(exports) {
  function NoteListView(noteList) {
    this.notesRepo = noteList;

  }

  NoteListView.prototype = {
    getAllNotes: function() {
        var html = []
        for(var i=0; i < this.notesRepo.allNotes.length; i++) {
          html.push('<li><div><a href=#notes/' + this.notesRepo.allNotes[i].id + '>' + this.notesRepo.allNotes[i].text.slice(0, 20) + '</a></div></li>');
        }
        return '<ul>' + html.join('') + '</ul>';
      }
    }

  exports.NoteListView = NoteListView;
})(this);
