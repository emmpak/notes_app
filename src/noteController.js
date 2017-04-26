(function(exports){
  function NoteController(noteList) {
    noteListView = new NoteListView(noteList);
  }

  NoteController.prototype = {
    setupNoteList: function () {
        document.getElementById('list').innerHTML = noteListView.getAllNotes();
    },
    showNote: function(note) {
      var singleNoteView = new SingleNoteView(note);
      document.getElementById('specific-note').innerHTML = singleNoteView.showSingleNote();
    }
  };

  exports.NoteController = NoteController;
})(this);
