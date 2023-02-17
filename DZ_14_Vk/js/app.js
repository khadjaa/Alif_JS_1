'use strict';

const counterEl = document.querySelector('[data-id="counter"]');
counterEl.__counterValue = 0;
const interval = 1000;

setInterval(() => {
    counterEl.textContent = counterEl.__counterValue;
    counterEl.__counterValue += 10;
},interval);

// counterEl.textContent =  Number(counterEl.textContent) + 10;
