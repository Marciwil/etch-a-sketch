const body= document.body;
// create a btn popup for the number of squares per side. 
// once entered, the grid deletes and generate a new one in the same place. 
const btn= document.createElement("button");
btn.classList.add("btn");
btn.textContent= "Click";
btn.addEventListener('click', () => {
    let size = prompt("What is the length and width of the new grid?") | 16;
    createGrid(size)
});


const container= document.createElement("container");
container.classList.add("container")
// const square= document.createElement("div");

// square.classList.add("square");

// square.style.border= "black";
// square.style.borderStyle= "solid";
// square.style.borderWidth= "1px";

body.appendChild(btn);
body.appendChild(container);
// container.appendChild(square);


    // Nested For Loop
function createGrid(size) {
    if (size > 100){
        size = 100
    };

    const oldGrid = document.querySelector(".grid")

    if(oldGrid){
        container.removeChild(oldGrid)
    }

    const newGrid= document.createElement("div");
    newGrid.classList.add("grid")
    for(let i = 0; i < size; i++){
    const row = document.createElement("div")
    row.classList.add("row")
    for(let j = 0; j < size; j++){
        const square= document.createElement("div");
        square.classList.add("square")

        square.addEventListener("mouseover",()  => {
            square.style.backgroundColor= 'black';
        });

        row.appendChild(square)
    }
    newGrid.appendChild(row);
};
    

container.appendChild(newGrid);
}
// Create a hover effect for each of the square divs.
// Use an event listener to create the effect.
// When the mouse hovers over the squares, fill black.     



createGrid(16)

