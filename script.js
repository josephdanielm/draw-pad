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

            // Draw-Effect
            row.onmousemove = function() {
                if (isDrawing == true) {
                    row.style.backgroundColor = currentColor;
                }
            }
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


// Draw Effect on/off
let isDrawing = false;


pad.onclick = function() {
    if (isDrawing == false) {
        isDrawing = true;
    } else if (isDrawing == true) {
        isDrawing = false;
    }
}


pad.onmouseleave = function(){isDrawing = false}

document.body.setAttribute('draggable', 'false'); // Prevents bugs with dragging pad divs


let clearPad = function() {
    document.getElementById('pad').replaceChildren();
    drawGrid(sliderValue);
}

const clearBtn = document.querySelector('#clear');
clearBtn.addEventListener('click', clearPad);