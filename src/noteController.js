
(function(exports){
  function NoteController(noteList) {
    noteListView = new NoteListView(noteList);
  }

  NoteController.prototype = {
    setupNoteList: function () {
        document.getElementById('list').innerHTML = noteListView.getAllNotes();
    }
  };

  exports.NoteController = NoteController;
})(this);

// updated above so it calls a new method to load
// the notes list on page load


// remove below as its not required
// document.getElementById('app').innerHTML = "Howdy";
