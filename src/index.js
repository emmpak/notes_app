list = new NoteList();
list.saveNote("Favourite drink: seltzer");
list.saveNote("Will loves JavaScript");

var controller = new NoteController(list);
controller.setupNoteList();

makeUrlChangeShowNoteForCurrentPage();

function makeUrlChangeShowNoteForCurrentPage() {
  window.addEventListener("hashchange", showNoteForCurrentPage);
};

function showNoteForCurrentPage() {
  controller.showNote(list.getSpecificNote(getNoteFromURL(window.location)));
};

function getNoteFromURL(location) {
  return location.hash.split("/")[1];
}
