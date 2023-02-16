'use strict';

function thanosEffect(el) {
    const list = [...el.querySelectorAll('[data-type="post"]')];

    const postsEl = list.filter((e, index) => index % 2 === 0 );

    postsEl.forEach(e => e.style.visibility = 'hidden');
}

const postsEl = document.querySelector('[data-id="posts"]');
thanosEffect(postsEl);