const sliderOutput = document.getElementById('slider-value');
let sliderValue;

const slider = document.getElementById('slider').oninput = function() {
    sliderOutput.innerHTML = `${this.value} x ${this.value}`;
    sliderValue = this.value;
}


