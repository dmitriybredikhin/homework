'use strict';
const products = [
    {id: 1, title: 'Notebook', price: 1000},
    {id: 2, title: 'Mouse', price: 100},
    {id: 3, title: 'Keyboard', price: 250},
    {id: 4, title: 'Gamepad', price: 150},
];

const renderProduct = (item, img = "https://rydo.ru/media/mini/l6/ml/7qql1i7u96m9uv8r.jpg") => {
    return `<div class="product-item" data-id="${this.id}">
            <img src="${img}" alt="the problem">
            <div class="desc">
                <h3>${item.title}</h3>
                <p>${item.price}</p>
                <button class="by-btn">Добавить</button>
            </div>
            </div>`;
};

const renderProducts = (list) => {
    document.querySelector('.products')
    .insertAdjacentHTML("beforeend", list.map(item => renderProduct(item))
    .join(""));
};

renderProducts(products);