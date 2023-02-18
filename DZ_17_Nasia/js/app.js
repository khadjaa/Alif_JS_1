'use strict';

const postEl = document.querySelector('[data-id="cards"]');
const nasiaEl = postEl.querySelector('[data-tab="nasia"]');
const alifmobi = postEl.querySelector('[data-tab="alifmobi"]');
const nasiaText = postEl.querySelector('[data-tabpane="nasia"]');
const alifmobiText = postEl.querySelector('[data-tabpane="alifmobi"]');

const postWidget = {
    nasiaEl,
    nasiaText,
    alifmobi,
    alifmobiText,
};

postWidget.nasiaEl.onclick = () => {
    postWidget.nasiaText.style.display = 'block';
    postWidget.alifmobiText.style.display = 'none';
};

postWidget.alifmobiText.style.display = 'none';

postWidget.alifmobi.onclick = () => {
    postWidget.alifmobiText.style.display = 'block';
    postWidget.nasiaText.style.display = 'none';
};