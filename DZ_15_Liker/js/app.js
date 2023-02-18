'use strict';

const post = {
    id: 1,
    userLiked: false,
    url: {
        liked: 'img/liked.svg',
        unliked: 'img/unliked.svg'
    }
};

const postEl = document.querySelector('[data-action="like"]');
const imgEl = postEl.querySelector('[data-id="image"]');

imgEl.src = post.url.unliked;

postEl.onclick = () => {
    if (!post.userLiked) {
        post.userLiked = true;
        imgEl.src = post.url.liked;
        return;
    }
    post.userLiked = false;
    imgEl.src = post.url.unliked;
};