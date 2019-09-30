/*
Написать функцию, которая проверяет: является ли введеное пользователем число простым?*/

let num = Number(prompt('Введите число:'));

function simpleNum(num) {
    if (num === 1) {
        alert('Ваше число не является ни составным, ни простым числом. Введите другое число');
        return false;
    }
    for (let i = 2; i <= num; i++) {
        if (num % 2 === 0) {
            alert('Ваше число является составным');
            return false;
        }
    }
    alert('Ваше число является простым');
    return true;
}

(simpleNum(num));

