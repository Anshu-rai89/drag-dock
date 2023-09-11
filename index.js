const container1 = document.getElementById("cont-1");
const container2 = document.getElementById("cont-2");
const container = document.querySelector(".container");
const  container3 = document.getElementById("cont-3");
const resizeContainers = document.querySelectorAll(".resize");

container1.addEventListener("dragstart", handleDragStart);
container2.addEventListener("dragstart", handleDragStart);

container1.addEventListener("dragend", handleDragEnd);
container2.addEventListener("dragend", handleDragEnd);
container.addEventListener("drop", dragDrop);
container.addEventListener("dragover", dragOver);
container.addEventListener("dragenter", dragEnter);
container.addEventListener("dragleave", dragLeave);
resizeContainers.forEach(element => {
  element.addEventListener("dragstart", handleResize);
  element.addEventListener('dragend', handleResizeStop);
});

console.log("ele", resizeContainers);

let dragItem = null;
let isResize = false;

function handleDragStart(e) {
    setTimeout(() => {
        this.className = "invisible";
        document.getElementById("cont-3").style.width='90vw';
    }, 0);
}

function handleDragEnd(e) {
  setTimeout(() => {
    this.className = "visible";
     document.getElementById("cont-3").style.width = "80vw";
}, 0);


  if(isResize) { return}
  if (e.clientX > 800 && !isResize) {
    this.style.order = 4;
  } else if (e.clientX > 600 && e.clientX < 800 && !isResize) {
    this.style.order = 3;
  } else if (e.clientX < 100 && !isResize) {
    this.style.order = 1;
  } else if (e.clientX < 200 && e.clientX > 100 && !isResize) {
    this.style.order = 2;
  }

  if (isResize) {
    isResize = false;
  }
}

function dragOver(e) {
    e.preventDefault();
     console.log("Drag enter", e.clientX);

     if(isResize && dragItem) {
       const left = Math.floor(
         dragItem.parentElement.getBoundingClientRect().left
       );
       const right = e.clientX;
       const originalWidth = dragItem.parentElement.clientWidth;
       const width = right - left;
       const diff = width - originalWidth;
       const container3Width = container3.clientWidth;

       container3.style.width = container3Width + diff + "px";
       dragItem.parentElement.style.width = width + "px";

       console.log("details", originalWidth, diff, width);
     }
     
}

function dragLeave(e) {
}

function dragEnter(e) {
 
}

function dragDrop(e){
  if(isResize) {
    isResize = false;
  }
}

function handleResize(e){
  e.stopPropagation();
  
  console.log(
    "element",
    this.parentElement.clientWidth,
    this.parentElement.getBoundingClientRect().left
  );
  console.log("Event", e.clientX);
  dragItem = this;
  isResize = true; 
}

function handleResizeStop(e){
  isResize = false;
  dragItem = null;
}


function Demo() {
  this.name = 'Anshu';
  this.displayName = function () {
    return this.name;
  }
}

console.log("check", this.name);