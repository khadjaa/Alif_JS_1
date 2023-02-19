'use strict';

const qtyEl = document.querySelector('[data-id="qty"]');
const totalEl = document.querySelector('[data-id="total"]');
const incEl = document.querySelector('[data-action="inc"]');
const decEl = document.querySelector('[data-action="dec"]');
const messageEl = document.querySelector('[data-id="message"]');

const nokia = {
    id: 1,
    price: 239,
    name: 'Nokia 105',
    url: 'img/nokia.jpg',
};

const order = {
    id: 1,
    idProduct: nokia.id,
    qty: +qtyEl.textContent,
    price: nokia.price,
};

incEl.onclick = () => {
    if (order.qty < 10) {
        order.qty++;
        qtyEl.textContent = order.qty;
        totalEl.textContent = order.qty * order.price + ' с.';
        messageEl.textContent = '';
    } else {
        messageEl.textContent = '10 шт - максимум в одни руки';
    }
};

decEl.onclick = () => {
    if (order.qty > 1) {
        order.qty--;
        qtyEl.textContent = order.qty;
        totalEl.textContent = order.qty * order.price + ' с.';
        messageEl.textContent = '';
    } else {
        messageEl.textContent = '1 шт - минимальный размер заказа';
    }
};