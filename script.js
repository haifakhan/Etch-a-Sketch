const defaultSize = 16
let rainbowMode = false
let currentColour = "black"

//event listeners 

const grid = document.getElementById("container")

document.getElementById("colorPicker").addEventListener("input", (e) => {
    currentColour = e.target.value; 
    rainbowMode = false; 
});
document.getElementById("rainbowButton").addEventListener("click", () => {
    rainbowMode = true;
});


document.getElementById("clearButton").addEventListener("click", (e) => {
    const cells = grid.querySelectorAll("div");
    cells.forEach((cell) => {
        cell.style.backgroundColor = "white"; 
    });
});

// creates grid of divs 

function createGrid(size) {
    grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    grid.style.gridTemplateRows = `repeat(${size}, 1fr)`; 
    grid.style.width = `${size * 50}px`;
    grid.style.height = `${size * 50}px`; 
    grid.style.margin = "20px auto";
    grid.style.border = "2px solid darkred"; 
    grid.style.display = "grid"; 
    grid.style.gap = "0px"; 
    grid.style.backgroundColor = "white"; 
    grid.style.borderRadius = "0px"; 
    grid.style.overflow = "hidden";
    grid.style.boxShadow = "0 0 22px rgba(155, 4, 4, 0.5)"; 
    grid.style.userSelect = "none"; // disables text selection
    grid.style.cursor = "crosshair"; 
    grid.innerHTML = "";

    for (let i = 0; i < size * size; i++) {
        const div = document.createElement("div")
        div.style.backgroundColor = "white";
        div.style.border = "1px solid lightgrey"
       
        div.addEventListener("mouseover", () => { // change colour of grids on hover
            if (rainbowMode) {
                div.style.backgroundColor = getRandomColor();
            } else {
                div.style.backgroundColor = currentColour;
            }
        
        });
        grid.appendChild(div)

    }
   
}


function getRandomColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}


window.onload = () => {
    createGrid(defaultSize)
  }