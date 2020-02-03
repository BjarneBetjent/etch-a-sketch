function drawBoard(numberOfDivs)
{
    let divSize = (720 / numberOfDivs) + "px";
    for(let i = 0; i < numberOfDivs; i++)
    {
        for(let j = 0; j < numberOfDivs; j++)
        {            
            const div = document.createElement("div");
            div.addEventListener("mouseover", function(e)
            {
                hovering(e);
            });
            div.classList.add("sketchHorizontalDiv");
            div.style.height = divSize; 
            div.style.width = divSize;
            drawingBoard.appendChild(div);  
        }
    }    
}

function hovering(e)
{
    e.target.style.backgroundColor = "black";
}

function changeSize()
{
    console.log("Enter clicked")

}

let border = "5px solid black"
const drawingBoard = document.querySelector("#sketch");
drawingBoard.style.border = border;
let height = drawingBoard.style.height;
console.log(drawingBoard.style.border);

const inputSize = document.querySelector("#inputSize");
inputSize.addEventListener("keyup", function(e) {
    if(e.keyCode === 13) changeSize();
});


drawBoard(100);

