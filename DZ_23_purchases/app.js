'use strict';

const rootEl = document.querySelector('#root');

const formEl = document.createElement('form');
formEl.dataset.id = 'purchase-form';
rootEl.appendChild(formEl);

const nameInputEl = document.createElement('input');
nameInputEl.dataset.input = 'name';
formEl.appendChild(nameInputEl);

const priceInputEl = document.createElement('input');
priceInputEl.dataset.input = 'price';
priceInputEl.type = 'number';
formEl.appendChild(priceInputEl);

const btnEl = document.createElement('button');
btnEl.dataset.action = 'add';
btnEl.textContent = 'Добавить';
formEl.appendChild(btnEl);

const ulEl = document.createElement('ul');
ulEl.dataset.id = 'purchases-list';
rootEl.appendChild(ulEl);

const totalDivEl = document.createElement('div');
totalDivEl.textContent = 'Самая дорогая покупка: ';
rootEl.appendChild(totalDivEl);

const expensiveSpanEl = document.createElement('span');
expensiveSpanEl.dataset.id = 'most-expensive';
expensiveSpanEl.textContent = 'нет покупок';
totalDivEl.appendChild(expensiveSpanEl);

const errorEl = document.createElement('div');
errorEl.dataset.id = 'message';
rootEl.appendChild(errorEl);

let nextId = 1;

let purchases = [];
let mostExpensive;

formEl.onsubmit = e => {
    e.preventDefault();

    errorEl.textContent = '';
    let error = null;
    const name = nameInputEl.value.trim();
    const price = Number(priceInputEl.value);
    if (name === '') {
        error = 'Заполните поле название';
        errorEl.textContent = error;
        nameInputEl.focus();
        return;
    }

    if (Number.isNaN(price)) {
        error = 'Неверно введена цена';
        errorEl.textContent = error;
        priceInputEl.focus();
        return;
    }

    if (price < 0) {
        error = 'Цена не может быть отрицательной';
        errorEl.textContent = error;
        priceInputEl.focus();
        return;
    }
    const obj = {
        id: nextId++,
        name,
        price,
    };

    purchases.unshift(obj);

    const liEl = document.createElement('li');
    liEl.setAttribute('data-purchase-id', obj.id);
    liEl.textContent = `${ obj.name } на сумму ${ obj.price } с. `;
    ulEl.insertBefore(liEl, ulEl.firstElementChild);
    const deleteBtnEl = document.createElement('button');
    deleteBtnEl.dataset.action = 'remove';
    deleteBtnEl.textContent = 'Удалить';
    liEl.insertBefore(deleteBtnEl, liEl.firstElementChild);

    mostExpensive = purchases.reduce((prev, curr) => prev.price < curr.price ? curr : prev);
    expensiveSpanEl.textContent = `${ mostExpensive.name } на сумму ${ mostExpensive.price } с.`;

    deleteBtnEl.onclick = () => {
        ulEl.removeChild(liEl);
        purchases = purchases.filter(el => el !== obj);
        if (purchases.length === 0) {
            expensiveSpanEl.textContent = 'нет покупок';
        } else {
            mostExpensive = purchases.reduce((prev, curr) => prev.price < curr.price ? curr : prev);
            expensiveSpanEl.textContent = `${ mostExpensive.name } на сумму ${ mostExpensive.price } с.`;
        }
    };

    nameInputEl.focus();
    formEl.reset();
};