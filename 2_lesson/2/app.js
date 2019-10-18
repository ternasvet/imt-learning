//Сделайте функцию toggleClass(element, 'class'),
//которая будет работать так: если класс есть – удалит его, если класса нет – добавит.

function toggleClass(element, className) {
    let title = document.querySelector(element);
    title.classList.toggle(className);
}