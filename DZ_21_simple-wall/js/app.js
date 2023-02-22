'use strict';

const rootEl = document.getElementById('root');

const posts = [
  {
    id: 3,
    type: 'text',
    content: 'Final Week!',
  },
  {
    id: 2,
    type: 'image',
    content: 'img/logo_js.svg',
  },
  {
    id: 1,
    type: 'video',
    content: 'video/video.mp4',
  },
];

function makePostEl(post) {
    const addEl = document.createElement('div');
    addEl.setAttribute('data-type', post.type);
    addEl.setAttribute('data-id', post.id);
    if (post.type === 'image') {
        addEl.innerHTML = `<img src='${post.content}'>`;
    } else if (post.type === 'video') {
        addEl.innerHTML = `<video src='${post.content}' controls>`;
    } else {
        addEl.innerHTML = `<div>${post.content}</div>`;
    }
    return addEl;
}

function makeWall(el, items) {
  items.map(makePostEl).forEach((elem) => {
    el.appendChild(elem);
  });
}

makeWall(rootEl, posts);
