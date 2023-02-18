'use strict';

const photos = [ 
    { id: 1, src: 'img/telegra', alt: 'a1', }, 
    { id: 2, src: 'img/blue.jpg', alt: 'a2', }, 
    { id: 3, src: 'img/black.png', alt: 'a3', }, 
    { id: 4, src: 'img/vkblue.png', alt: 'a4', }, 
]; 

function bindPhotoToViewer(photo, el) {
    const btnLeft = el.querySelector('[data-action="prev"]');
    const btnRight = el.querySelector('[data-action="next"]');
    const logo = el.querySelector('[data-id="photo"]');

    let counter = 0;

    window.onload = () => {
        logo.src = photo[0].src;
        logo.alt = photo[0].alt;
    };

    btnRight.onclick =()=> {
        photo[counter++];
        if (counter >= photo.length) {
            counter = 0;
        }
        logo.src = photo[counter].src;
        logo.alt = photo[counter].alt;
    };

    btnLeft.onclick =()=> {
        photo[counter--];
        if (counter <= -1) {
            counter = 3;
        }
        logo.src = photo[counter].src;
        logo.alt = photo[counter].alt;
    };
}

bindPhotoToViewer(photos, document);