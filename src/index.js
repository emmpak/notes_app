list = new NoteList();


var controller = new NoteController(list);
controller.setupNoteList();


(function makeUrlChangeShowNoteForCurrentPage() {
  window.addEventListener("hashchange", showNoteForCurrentPage);
})();

function showNoteForCurrentPage() {
  controller.showNote(list.getSpecificNote(getNoteFromURL(window.location)));
};

function getNoteFromURL(location) {
  return location.hash.split("/")[1];
}

(function makeCreateButtonClickAddNote() {
  document.getElementById("create").addEventListener('click', function(clickEvent) {
    clickEvent.preventDefault();
    list.saveNote(document.getElementById('text').value);
    controller.setupNoteList();
});
})();
