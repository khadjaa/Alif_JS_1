'use strict';

let nextId = 1;
const rootEl = document.getElementById('root');
rootEl.innerHTML = `
<div data-id="message"></div>
<form data-id="comment-form">
<textarea data-input="comment"></textarea>
<button data-action="add">Добавить</button>
</form>
<ul data-id="comment-list">
</ul>
`;
const comments = [];
document.querySelector('form[data-id="comment-form"]').onsubmit = (event) => {
  event.preventDefault();
  const message = document.querySelector('div[data-id="message"]');
  const inp = document.getElementsByTagName('textarea')[0];
  const text = inp.value.trim();
  if (text.length > 0) {
    message.innerHTML = '';
    const list = document.getElementsByTagName('ul')[0];
    const elem = document.createElement('li');
    elem.setAttribute('data-comment-id', nextId);
    elem.innerHTML = text;
    comments.push({
      id: nextId++,
      text: text,
    });
    list.appendChild(elem);
  } else {
    message.innerHTML = 'Значение поля не может быть пустым';
  }
  document.getElementsByTagName('form')[0].reset();
  inp.value = '';
  inp.focus();
  console.log(comments);
};
