(function(exports) {
  function NoteListView(noteList) {
    this.notesRepo = noteList;
  }

  NoteListView.prototype = {
    getAllNotes: function() {
        var html = []
        for(var i=0; i < this.notesRepo.allNotes.length; i++) {
          html.push('<li><div>' + this.notesRepo.allNotes[i].text + '</div></li>');
        }
        return '<ul>' + html.join('') + '</ul>';
      }
    }

  exports.NoteListView = NoteListView;
})(this);
