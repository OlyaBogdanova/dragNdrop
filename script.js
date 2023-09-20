const fill = document.querySelector(".fill");
const empty = document.querySelectorAll(".empty");
fill.addEventListener("dragstart", dragStart);
fill.addEventListener("dragend", dragEnd);

empty.forEach((el) => {
  el.addEventListener("dragover", dragOver);
  el.addEventListener("dragenter", dragEnter);
  el.addEventListener("dragleave", dragLeave);
  el.addEventListener("drop", dragDrop);
});

function dragStart() {
  this.className += " hold";
  setTimeout(() => {
    this.className = "invisible";
  }, 0);
}
function dragEnd() {
  this.className = "fill";
}
function dragOver(e) {
  e.preventDefault();
}
function dragEnter(e) {
  e.preventDefault();
  this.className += " hovered";
}

function dragLeave() {
  this.className = "empty";
}
function dragDrop() {
  this.className = "empty";
  this.append(fill);
}
