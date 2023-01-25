const container = document.querySelector(".container");
createGrid(32);

let mode = 0 // controls the mode of the app 0 - color 1 - rainbow. starts in color mode

let squares = document.querySelectorAll(".square");
const resetBtn = document.querySelector("#reset");
const resizeBtn = document.querySelector("#resize");
const colorBtn = document.querySelector("#color");
const rainbowBtn = document.querySelector("#rainbow");

resetBtn.addEventListener("click", reset);
resizeBtn.addEventListener("click", resize);
colorBtn.addEventListener("click", () => mode = 0);
rainbowBtn.addEventListener("click", () => mode = 1); 

squares.forEach(element => {
    element.addEventListener("mouseover", paintSquare);  
});

function paintSquare(e){
    //if (e.buttons === 0) return;
    switch(mode){
        case 0:
            this.style.backgroundColor = "black";
            break;
        case 1:
            this.style.backgroundColor = `rgb(${randomColor()},${randomColor()},${randomColor()})`;
            break;
        default:
            console.log("mode is invalid");
    }
}

function createGrid(size){
    for (let i = 0; i<size; i++){
        const col = document.createElement("div");
        col.classList.add("column");
        for (let j = 0; j<size; j++){
            const div = document.createElement("div");
            div.classList.add("square");
            col.appendChild(div);
        }
        container.appendChild(col);
    }
}

function reset(e){
    squares.forEach(element => {
        element.style.backgroundColor = "#ffffff";
    });
}

function resize(e){
    answer = prompt("what is the new size?");
    if(Number.isInteger(+answer) && answer<100){
        while(container.firstChild){
            container.removeChild(container.firstChild);
        }
        createGrid(answer);
        squares = document.querySelectorAll(".square");
        squares.forEach(element => {
            element.addEventListener("mouseover", paintSquare);  
        });
    }
    else{
        alert("invalid");
    }
}

function randomColor(){
    return Math.floor(Math.random()*256);
}