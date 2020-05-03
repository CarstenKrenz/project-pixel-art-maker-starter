let colorPicker = document.querySelector("#colorPicker").value;
let gameTable   = document.getElementById("pixelCanvas"),pixels;

function makeGrid(height, width) {
    for (let i = 0; i < height; i++) {
        let tableRow = document.createElement("tr");

        for (let j = 0; j < width; j++) {
            let tableCell = document.createElement("td");
            tableRow.appendChild(tableCell);
        }
        gameTable.appendChild(tableRow);
    }
}

function colorPixel(e){
    colorPicker = document.querySelector("#colorPicker").value;
    e.target.style.backgroundColor = colorPicker;
}

var start = document.getElementById('sizePicker');
    start.addEventListener('submit', function(e){
    e.preventDefault();
    document.getElementById("pixelCanvas").innerHTML = "";

    let gridHeight = document.getElementById("inputHeight").value;
    let gridWidth = document.getElementById("inputWidth").value;
    makeGrid(gridHeight, gridWidth);

    var pixels = document.querySelectorAll('td');

    for (var i = 0; i < pixels.length; i++) {
        pixels[i].addEventListener('click', colorPixel, false);
    }
});