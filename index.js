const container1 = document.getElementById("cont-1");
const container2 = document.getElementById("cont-2");
const container = document.querySelector(".container");

container1.addEventListener("dragstart", handleDragStart);
container2.addEventListener("dragstart", handleDragStart);

container1.addEventListener("dragend", handleDragEnd);
container2.addEventListener("dragend", handleDragEnd);
container.addEventListener("drop", dragDrop);
container.addEventListener("dragover", dragOver);
container.addEventListener("dragenter", dragEnter);
container.addEventListener("dragleave", dragLeave);

function handleDragStart(e) {
    console.log("drag started");
    setTimeout(() => {
        this.className = "invisible";
        document.getElementById("cont-3").style.width='90vw';
    }, 0);
    console.log("Event", e.clientX);
}

function handleDragEnd(e) {
  setTimeout(() => {
    this.className = "visible";
     document.getElementById("cont-3").style.width = "80vw";
}, 0);
  if (e.clientX > 800) {
    this.style.order = 4;
  } else if (e.clientX > 600 && e.clientX < 800) {
    this.style.order = 3;
  } else if (e.clientX < 100) {
    this.style.order = 1;
  } else if (e.clientX < 200 && e.clientX > 100) {
    this.style.order = 2;
  }
}

function dragOver(e) {
    e.preventDefault();
}

function dragLeave(e) {
}

function dragEnter(e) {
}

function dragDrop(e){
}