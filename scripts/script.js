let numberOfDivs; 
let blackDivs = true;

function drawBoard()
{
    if(typeof numberOfDivs === "undefined") numberOfDivs = 16;

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
            div.classList.add("sketchBorderDiv");
            div.style.backgroundColor = "white";
            div.style.height = divSize; 
            div.style.width = divSize;
            drawingBoard.appendChild(div);  
        }
    }    
}

function hovering(e)
{ 
    if(blackDivs) e.target.style.backgroundColor = "black";
    else
    {
        if(e.target.style.backgroundColor == "white") e.target.style.backgroundColor = random_rgba();
    }    
    
}

function random_rgba() 
{
    var o = Math.round, r = Math.random, s = 255;
    return 'rgba(' + o(r()*s) + ',' + o(r()*s) + ',' + o(r()*s) + ',' + r().toFixed(1) + ')';
}

function changeSize()
{
    if(inputSize.value < 5) numberOfDivs = 5;
    else if(inputSize.value > 100) numberOfDivs = 100;
    else numberOfDivs = inputSize.value;

    removeDivsFromCanvas();
    drawBoard();
    console.log("Enter clicked")

}

function removeDivsFromCanvas()
{
    while (drawingBoard.firstChild) 
    {
        drawingBoard.removeChild(drawingBoard.firstChild);
      
    }
}


let border = "5px solid black"
const drawingBoard = document.querySelector("#sketch");
drawingBoard.style.border = border;
let height = drawingBoard.style.height;
console.log(drawingBoard.style.border);

const inputSize = document.querySelector("#inputSize");
inputSize.addEventListener("keyup", function(e) 
{
    if(e.keyCode === 13) changeSize();
});


drawBoard();

