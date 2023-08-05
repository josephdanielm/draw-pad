// Slider
const sliderOutput = document.getElementById('slider-value');
const slider = document.getElementById('slider')
let sliderValue = 16;

slider.oninput = function() {
    sliderOutput.innerHTML = `${this.value} x ${this.value}`;
    sliderValue = this.value;
    document.getElementById('pad').replaceChildren(); // Clears grid of all current divs
    drawGrid(sliderValue);
}



// Pad
function drawGrid(quantity) {
    for (i = 0; i < quantity; ++i) {
        const column = document.createElement('div');
        column.setAttribute('class', 'column');
        for (j = 0; j < quantity; ++j) {
            const row = document.createElement('div');
            row.setAttribute('class', 'padDiv');
            column.appendChild(row);
        }
        document.getElementById('pad').appendChild(column);
    }
}
drawGrid(sliderValue);


// Color Picker

const colorPicker = document.getElementById('color-picker');
let currentColor = colorPicker.value;

colorPicker.oninput = function() {
    currentColor = this.value;
}


// Draw Effect

const padDivs = document.querySelectorAll('padDiv');
let isDrawing = false;

pad.onmousedown = function(){isDrawing = true
console.log('mouse is down')};

pad.onmouseup = function(){isDrawing = false
console.log('mouse is up')};

