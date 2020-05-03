let colorPicker = document.querySelector("#colorPicker").value;
let pixelCanvas = document.getElementById("pixelCanvas");

function makeGrid(height, width) {
    for (let i = 0; i < height; i++) {
        let tr = document.createElement("tr");

        for (let i = 0; i < width; i++) {
            let td = document.createElement("td");
            tr.appendChild(td);
        }
        pixelCanvas.appendChild(tr);
    }
}

function colorPickerFct(element){
    colorPicker = document.querySelector("#colorPicker").value;
    element.target.style.backgroundColor = colorPicker;
}

var initGrid = document.getElementById('sizePicker');
initGrid.addEventListener('submit', function(e){
e.preventDefault();
document.getElementById("pixelCanvas").innerHTML = "";

let gridHeight = document.getElementById("inputHeight").value;
let gridWidth = document.getElementById("inputWidth").value;

makeGrid(gridHeight, gridWidth);

var pixels = document.querySelectorAll('td');

    for (var i = 0; i < pixels.length; i++) {
        pixels[i].addEventListener('click', colorPickerFct, false);
    }
});