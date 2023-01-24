const container = document.querySelector(".container");
createGrid();
const squares = document.querySelectorAll("square");
console.log(squares);


function createGrid(){
    for (let i = 0; i<16; i++){
        const col = document.createElement("div");
        col.classList.add("column");
        for (let j = 0; j<16; j++){
            const div = document.createElement("div");
            div.classList.add("square");
            col.appendChild(div);
        }
        container.appendChild(col);
    }
}