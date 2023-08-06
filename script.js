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
            row.onmouseenter = function() {
                if (isDrawing == true) {
                    if (colorBtn.classList.contains('selected')) {

                        row.style.backgroundColor = currentColor;

                    }else if (rainbowBtn.classList.contains('selected')) {

                        row.style.backgroundColor = randomColor();

                    }else if (eraserBtn.classList.contains('selected')) {

                        row.style.backgroundColor = ('#F6FFF8');

                    }
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

// Random Color
function randomColor() {
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
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


// Button Handling

const colorBtn = document.getElementById('color-mode');
const rainbowBtn = document.getElementById('rainbow');
const eraserBtn = document.getElementById('eraser');

function handleButtonSelection(selectedButton) {
    colorBtn.classList.remove('selected');
    rainbowBtn.classList.remove('selected');
    eraserBtn.classList.remove('selected');

    selectedButton.classList.add('selected');
}

colorBtn.addEventListener('click', function () {
    handleButtonSelection(this);
})
rainbowBtn.addEventListener('click', function () {
    handleButtonSelection(this);
})
eraserBtn.addEventListener('click', function () {
    handleButtonSelection(this);
})