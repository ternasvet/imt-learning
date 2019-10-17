//На getElementsByTagName. Задача. Дан HTML код (см. под задачей).
// Поменяйте содержимое абзацев на их порядковый номер в коде.
// <h2>Заголовок, не поменяется.</h2>
// <p>Абзац, поменяется.</p>
// <p>Абзац, поменяется.</p>
// <p>Абзац, поменяется.</p>
document.getElementById('button').addEventListener('click', foo);

function foo() {
    let elems = document.getElementsByTagName('p');
    if (elems.length) {
        Array.from(elems).forEach((item, i) => item.innerHTML = i + 1);
    }
}
