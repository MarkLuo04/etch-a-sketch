const container = document.getElementById("container");
const gridSize = 16;

for(let i = 0; i < gridSize * gridSize; i++) {
    const gridSquare = document.createElement("div");
    gridSquare.classList.add("grid")
    container.appendChild(gridSquare);
    console.log("grid added");

}



