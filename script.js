const container = document.getElementById("container");
let gridSize = 16;
const sizeButton = document.getElementById("popup");
const eraseButton = document.getElementById("erase");

let isMouseDown = false; // Track whether the mouse button is pressed
let lastColoredSquare = null; // Track the last square that was colored
let eraseMode = false; // Track whether erase mode is active

// Detect when the mouse button is pressed down
document.body.addEventListener("mousedown", () => {
    isMouseDown = true;
});

// Detect when the mouse button is released
document.body.addEventListener("mouseup", () => {
    isMouseDown = false;
    lastColoredSquare = null; // Reset the last colored square
});

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

    // Clear the existing grid
    container.innerHTML = '';

    createGrid(gridSize);
});

function createGrid(gridSize) {
    for(let i = 0; i < gridSize * gridSize; i++) {
        const gridSquare = document.createElement("div");
        gridSquare.classList.add("grid");

        // Calculate the size of each grid square based on gridSize
        const squareSize = `calc(100% / ${gridSize})`;
        gridSquare.style.flex = `0 0 ${squareSize}`;
        gridSquare.style.height = squareSize;

        // Change color or erase on click and drag
        gridSquare.addEventListener("mousedown", () => {
            changeColor(gridSquare);
        });

        gridSquare.addEventListener("mousemove", () => {
            if (isMouseDown && gridSquare !== lastColoredSquare) {
                changeColor(gridSquare);
            }
        });

        container.appendChild(gridSquare);
    }    
}

function changeColor(gridSquare) {
    if (eraseMode) {
        gridSquare.style.backgroundColor = ''; // Clear color (erase)
    } else {
        gridSquare.style.backgroundColor = getRandomColor(); // Apply random color
    }
    lastColoredSquare = gridSquare; // Update the last colored square
}

function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

// Toggle erase mode
eraseButton.addEventListener("click", () => {
    eraseMode = !eraseMode;
    eraseButton.textContent = eraseMode ? "Erase" : "Drawing";
});

// Initial grid creation
createGrid(gridSize);
