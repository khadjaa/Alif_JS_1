'use strict';

document.body.style.display = 'block';

const time = 5000;

setTimeout(() => {
    const imgEl = document.querySelector('[data-id]');
    imgEl.style.display = 'none';
}, time);