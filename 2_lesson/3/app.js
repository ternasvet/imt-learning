//На getElementsByClassName. Задача. Дан HTML код (см. под задачей).
// Поменяйте содержимое элементов с классом zzz на их порядковый номер в коде.
// <h2 class="zzz">Заголовок с классом zzz.</h2>
// <p class="zzz">Абзац с классом zzz.</p>
// <p class="zzz">Абзац с классом zzz.</p>
// <p>Просто абзац, не поменяется.</p>

document.getElementById('button').addEventListener('click', foo);

function foo() {
    let elements = document.getElementsByClassName('some');
    for (i = 0; i < elements.length; i++) {
        elements[i].innerHTML = i + 1;
        console.log(elements);
    }
}


/*
if (elems.length) {
    Array.from(elems).forEach((item, i) => item.innerHTML = i + 1);
}*/
