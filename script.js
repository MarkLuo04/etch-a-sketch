const container = document.getElementById("container");
let gridSize = 16;
const sizeButton = document.getElementById("popup");

sizeButton.addEventListener("click", () => {
    let userInt = 0;
    while(true) {
        let userValue = prompt("Enter a grid size between 1 and 100: ", "16");
        userInt = parseInt(userValue);
        if (isNaN(userInt) || userInt > 100 || userInt < 1) {
            alert("Please enter a valid number between 1 and 100.");
            continue;
        } else {
            break;
        }
    }
    gridSize = userInt;
    console.log(gridSize);

    container.innerHTML = '';

    createGrid(gridSize);
});

function createGrid(gridSize) {
    for(let i = 0; i < gridSize * gridSize; i++) {
        const gridSquare = document.createElement("div");
        gridSquare.classList.add("grid");
        container.appendChild(gridSquare);
        console.log("grid added");

        const squareSize = `calc(100% / ${gridSize})`;
        gridSquare.style.flex = `0 0 ${squareSize}`;
        gridSquare.style.height = squareSize;
    
        gridSquare.addEventListener("mouseover", () => {
            gridSquare.style.backgroundColor = getRandomColor();
        });
    }    
}

function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

createGrid(gridSize);
