
(function(exports){
  function NoteController(noteList) {

    this.noteListView = new NoteListView(noteList);


  }
  exports.NoteController = NoteController;
})(this);



document.getElementById('app').innerHTML = "Howdy";

document.getElementById('list').innerHTML = .getAllNotes();
