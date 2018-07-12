//Creating a container
var container = document.createElement("div");
container.id = "container"
document.body.appendChild(container);

//Creating a sidebar container
var sideContainer = document.createElement("div");
sideContainer.id = "sideContainer"
container.appendChild(sideContainer);

//Creating a container to house the color pixels
var colorContainer = document.createElement("div");
colorContainer.id = "colorContainer"
sideContainer.appendChild(colorContainer);

//Creating colorRows at any amount that is set in the condition
for(var i = 0; i < 10; i++) {
    let createColorRows = document.createElement("div"); //Creating a row
    createColorRows.id = "row" + (i+1);
    createColorRows.className = "colorRows"
    colorContainer.appendChild(createColorRows);
};

//Variable for getting the colorRows class
var colorRows = document.getElementsByClassName("colorRows");


//color palette id counter to create an individual ID
var c = 0 

//For loop that will create the div(square) for every color
for(var i = 0; i < colorRows.length; i++) {
    for(var j = 0; j < 5; j++) {
        c++;
        let createPalette = document.createElement("button"); //Creating a color square
        createPalette.id = "color" + (c); 
        createPalette.className = "colorBlocks";
        colorRows[i].appendChild(createPalette);
    };
};

//Get colorBlocks element
var colorBlocks = document.getElementsByClassName("colorBlocks");

//For loop that will generate a new RGB decimal code at every block
for(var i = 0; i < colorBlocks.length; i++) {

    //Creating random numbers for color decimal code
    var redNumber = Math.floor(Math.random() * 256);
    var greenNumber = Math.floor(Math.random() * 256);
    var blueNumber = Math.floor(Math.random() * 256);
    var transparency = (Math.round(Math.random()*10)/10) + 0.1;

    var rgbColor = 'rgba(' + redNumber + ',' + greenNumber + ',' + blueNumber + ',' + transparency + ')';

    //Second "for" loop that will check the [i] colorBlock the loop is at, against every other block to see if that color that has been generated for the [i] iteration is identical to any color in any block
    for(var j = 0; j < colorBlocks.length; j++) {

        //If it is past the first block (since the first block can be any color), and match every colorBlock ID starting at the ID "color1"  to the current generated rgbColor
        if ( i > 0 && (document.getElementById("color" + (j+1) == rgbColor)) ){

            //If it does match any color used so far, generate a new RGB decimal code (generated number uses "Two" to notate new variables)
            var redNumberTwo = Math.floor(Math.random() * 256);
            var greenNumberTwo = Math.floor(Math.random() * 256);
            var blueNumberTwo = Math.floor(Math.random() * 256);
            var transparencyTwo = (Math.round(Math.random()*10)/10) + 0.1;
            
            var rgbColorTwo = 'rgba(' + redNumberTwo + ',' + greenNumberTwo + ',' + blueNumberTwo  + ',' + transparencyTwo + ')';
            
            //Adds the color background (if identical)
            document.getElementById("color" + (i+1)).style.backgroundColor = rgbColorTwo;

        } else{
            //Adds the color background with the generated color in the first for loop (if not identical)
            document.getElementById("color" + (i+1)).style.backgroundColor = rgbColor;
            }
        }
    }   

//Creating a container for the pixel div section
var pixelContainer = document.createElement("div");
pixelContainer.id = "pixelContainer"
container.appendChild(pixelContainer);

//Creating pixelRows at any amount that is set in the condition
for(var i = 0; i < 10; i++) {
    let createPixelRows = document.createElement("div"); //Creating a row
    createPixelRows.id = "row" + (i+1);
    createPixelRows.className = "pixelRows"
    pixelContainer.appendChild(createPixelRows);
};

//Variable for getting the pixelRows class
var pixelRows = document.getElementsByClassName("pixelRows");


//pixel blocks id counter to create an individual ID
var p = 0 

//For loop that will create the empty div(square)
for(var i = 0; i < pixelRows.length; i++) {
    for(var j = 0; j < 10; j++) {
        p++;
        let createPixel = document.createElement("div");
        createPixel.id = "pixel" + (p); 
        createPixel.className = "pixelBlocks";
        pixelRows[i].appendChild(createPixel);
    };
};

//Get pixelBlocks element
var pixelBlocks = document.getElementsByClassName("pixelBlocks");

//Variable to store the color to paint with (default white)
var savedColor = "rgb(255, 255, 255)";

//Adding eventlistener to color blocks
for(var i = 0; i<colorBlocks.length; i++){
    colorBlocks[i].addEventListener("click", grabColor);
  };

//Function to save color to our color variable
function grabColor() {
    savedColor = this.style.backgroundColor;
};

//Adding eventlisteners to pixel blocks
for(var i = 0; i<pixelBlocks.length; i++){
    pixelBlocks[i].addEventListener("mousedown", addColor);
  };

for(var i = 0; i<pixelBlocks.length; i++){
    pixelBlocks[i].addEventListener("mousedown", mouseDown);
  };

for(var i = 0; i<pixelBlocks.length; i++){
    pixelBlocks[i].addEventListener("mouseup", mouseUp);
  };

for(var i = 0; i<pixelBlocks.length; i++){
    pixelBlocks[i].addEventListener("mouseover", mouseDrag);
  };

//Function to add mouseStatus for drag
var mouseStatus = "";

function mouseDown () {
  mouseStatus = "down";
};

function mouseUp () {
    mouseStatus = "up";
};

//Function to add color while dragging
function mouseDrag() {
    if(mouseStatus === "down"){
        this.style.backgroundColor = savedColor;
    } else {
        mouseStatus = "up";
    }
}

//Function to add color to our pixel blocks
function addColor() {
    this.style.backgroundColor = savedColor;
};

//Creating a container for the two buttons
var buttonContainer = document.createElement("div");
buttonContainer.id = "buttonContainer"
sideContainer.appendChild(buttonContainer);

//Creating erase div
var eraser = document.createElement("button");
eraser.id = "eraser";
eraser.innerHTML = "Eraser";
// eraser.src = "https://www.flaticon.com/free-icon/erase-text_77705";
buttonContainer.appendChild(eraser);

//Adding event listener to eraser
var getEraser = document.getElementById("eraser");
getEraser.addEventListener("click", erase);

//Erase function
function erase() {
    savedColor = "rgb(255, 255, 255)";
};

//Creating clear div
var clearer = document.createElement("button");
clearer.id = "clearer";
clearer.innerHTML = "Clear";
buttonContainer.appendChild(clearer);

//Adding event listener to clear
var getClearer = document.getElementById("clearer");
getClearer.addEventListener("click", clear);

//Clear function
function clear() {
    for(var i = 0; i < pixelBlocks.length; i++) {
        document.getElementById("pixel" + (i+1)).style.backgroundColor = "rgb(255, 255, 255)";
    }
};


