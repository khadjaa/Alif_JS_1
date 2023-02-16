'use strict';

function extractOwnerId(postId){
    const selector = `[data-id="${postId}"]`;
    const element = document.querySelector(selector);
    const ownerId = element && element.getAttribute('data-ownerid') 
        ? element.getAttribute('data-ownerid')
        :'not found';

    return ownerId;
}

console.log(extractOwnerId(1));


