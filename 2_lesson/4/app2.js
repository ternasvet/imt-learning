//Создайте простую страницу с навигацией, которая скрыта по умолчанию.
// Создайте кнопку "Открыть", клик по которой будет открывать/закрывать навигацию.
// Клик в любом месте документа, кроме самой навигации должен закрыть ее.
// В зависимости от состояния навигации менять текст в кнопке.
//
// 4.* Элементы навигации и саму навигацию можно создать с помощью createElement, чтобы они были динамическими.

createHTML();

function createHTML() {
    let nav = document.createElement('nav');
    nav.className = 'nav';
    let ul = document.createElement('ul');
    let items = [
        'item 1', 'item 2', 'item 3', 'item 4', 'item 5'
    ];
    nav.appendChild(ul);

    items.forEach(function (item) {
        let li = document.createElement('li');
        ul.appendChild(li);
        let link = document.createElement('a');
        link.href = '#';
        li.appendChild(link);
        link.innerHTML += item;
    });
    document.body.appendChild(nav);

    let button = document.createElement('button');
    button.innerHTML = 'Показать меню';
    button.id = 'button';
    document.body.appendChild(button);

    button.addEventListener('click', function (e) {
        e.stopPropagation();

        nav.classList.toggle('visible');
        let button = document.querySelector('#button');
        if (nav.classList.contains('visible')) {
            button.innerHTML = 'Скрыть меню';
        } else {
            button.innerHTML = 'Показать меню';
        }
    });

    document.querySelector('body').addEventListener('click', function () {
        if (nav.classList.contains('visible')) {
            let button = document.querySelector('#button');
            button.innerHTML = 'Показать меню';
            nav.classList.remove('visible');
        }
    });

    nav.addEventListener('click', function (e) {
        e.stopPropagation();
    });
}