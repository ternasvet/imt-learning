//Сделайте функцию toggleClass(element, 'class'),
//которая будет работать так: если класс есть – удалит его, если класса нет – добавит.
document.getElementById('button').addEventListener('click', toggleClass)
function toggleClass(element, className) {
    let title = document.querySelector(element);
    console.log(title);
    title.classList.toggle(className);
}

toggleClass('p', 'blue');