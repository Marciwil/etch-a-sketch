const body= document.body;
const container= document.createElement("container");
container.classList.add("container")
const square= document.createElement("div");

square.classList.add("square");

// square.style.border= "black";
// square.style.borderStyle= "solid";
// square.style.borderWidth= "1px";

body.appendChild(container);
// container.appendChild(square);

    // Nested For Loop
for(let i = 0; i < 17; i++){
    const row = document.createElement("div")
    row.classList.add("row")
    for(let j = 0; j < 17; j++){
        const square= document.createElement("div");
        square.classList.add("square")
        row.appendChild(square)
    }
container.appendChild(row)
}
// Create a hover effect for each of the square divs.
// Use an event listener to create the effect.
// When the mouse hovers over the squares, fill black.     

square.addEventListener("mouseover",()  => {
    square.style.backgroundColor= 'black';
});

