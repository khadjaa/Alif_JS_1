'use strict';

let index = 0; 
const photos = [ 
    { id: 1, src: 'img/telegra', alt: 'telegra', }, 
    { id: 2, src: 'img/blue.jpg', alt: 'blue', }, 
    { id: 3, src: 'img/black.png', alt: 'black', }, 
    { id: 4, src: 'img/vkblue.png', alt: 'vkblue', }, 
]; 
 
const viewerEl = document.querySelector('[data-id="viewer"]'); 
const imgEl = viewerEl.querySelector('[data-id="photo"]'); 
const nextEl = viewerEl.querySelector('[data-action="next"]'); 
const prevEl = viewerEl.querySelector('[data-action="prev"]'); 
 
const photoWidget = { 
    rootEl: viewerEl, 
    imgEl, 
    prevEl, 
    nextEl, 
}; 
 
// prevEl.disabled = true; 
 
function bindPhotoToViewer(photo, el) { 
    el.imgEl.src = photo[index].src; 
    el.imgEl.alt = photo[index].alt; 
 
    el.nextEl.onclick = () => { 
        index++; 
        // el.prevEl.disabled = false; 
        el.imgEl.src = photo[index].src; 
        el.imgEl.alt = photo[index].alt; 
        if (index === 3) { 
          index = -1
        } 
        }; 
    el.prevEl.onclick = () => { 
        el.nextEl.disabled = false; 
        index--; 
        el.imgEl.src = photo[index].src; 
        el.imgEl.alt = photo[index].alt; 
        if (index === 0) { 
          index = 3
            // el.prevEl.disabled = true; 
        } 
    }; 
} 
 
bindPhotoToViewer(photos, photoWidget);