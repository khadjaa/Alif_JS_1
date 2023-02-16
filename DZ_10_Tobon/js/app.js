'use strict';

function bindPartnerToEl(partner, el) {

const linkEl = el.querySelector('[data-id="partner-link"]');
const logoEl = el.querySelector('[data-id="logo"]');
const titleEl = el.querySelector('[data-id="title"]');
const periodEl = el.querySelector('[data-id="period"]');
const categoryEl = el.querySelector('[data-id="category"]');

linkEl.href = partner.url;
logoEl.src = partner.logoUrl;
logoEl.alt = 'logo';
titleEl.textContent = partner.title;
periodEl.textContent = partner.period;
categoryEl.textContent = partner.category;

}

const partner = {
    id: 'tobon',
    url: 'https://salom.alif.tj/partners/tobon',
    logoUrl: 'https://alif-skills.pro/media/tobon.svg',
    title: 'Тобон',
    category: 'Отопление',
    period: 12,
};

const partnerEl = document.querySelector('[data-block="partner"]');
bindPartnerToEl(partner, partnerEl);

// setTimeout( () => {
//     const logoEl = document.querySelector('[data-id="logo"]');
//     const titleEl = document.querySelector('[data-id="title"]');

//     logoEl.src = 'https://lh3.googleusercontent.com/_X4oEpRu4O-nv0KuFwJQV2zX5SLuwRg9fIM1_-Q29L50zDgRd2eLdEr0ZmLVk_cPLA4';
//     titleEl.textContent = 'Hello, Alif!'
// }, 2000)