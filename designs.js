// Initialize the main Variables vor the color, Grid Size Inoput and the Canvas aka Grid
let colorPicker = document.getElementById("colorPicker").value;
const pixelCanvas = document.getElementById("pixelCanvas");
const initGrid = document.getElementById('sizePicker');

// This Function Creates the Pixelgrid based on the based on the input of the user
// The first fo Loop checks the height input by the user and creates therefore the tablerows
// The second intendend loop checks the width input and creates the tablecells
function makeGrid(height, width) {
    for (let i = 0; i < height; i++) {
        let table = pixelCanvas.insertRow();
        for (let i = 0; i < width; i++) {
            table.insertCell();
        }
    }
}

// This function checks checks the color the user chooses and stores it in #colorPicker EventListener pixels
function colorPickerFct(element){
    colorPicker = document.querySelector("#colorPicker").value;
    element.target.style.backgroundColor = colorPicker;
}

// Main Function which stores the Values in Height und Width input in Variables and passes them to makeGrid Function
// The Eventlistener checks if grid element is clicked and fires the colorPickerFct filling the grid element background
// color with the one picked with the ColorPicker
function handleSubmit(e){
    e.preventDefault();
    document.getElementById("pixelCanvas").innerHTML = "";

    let gridHeight = document.getElementById("inputHeight").value;
    let gridWidth = document.getElementById("inputWidth").value;

    makeGrid(gridHeight, gridWidth);

    let pixels = document.querySelectorAll('table');

    for (let i = 0; i < pixels.length; i++) {
        pixels[i].addEventListener('click', colorPickerFct, false);
    }
}

// Check if submit button has been pressed and fire the main Function handleSubmit
initGrid.addEventListener('submit', handleSubmit);