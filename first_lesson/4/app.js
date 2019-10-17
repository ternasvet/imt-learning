/*
Написать код, который будет принимать от пользователя три числа
и выводить среднее по значению число. Например, если ввели 2,5,7 - среднее 5,
    если 3,50,12 - среднее из них 12. Задача, так сказать, со звёздочкой.
    Вспомните, что мы учили операторы сравнения и логические И, ИЛИ. Подсказка:
var num1 = Number(prompt());
var num2 = Number(prompt());
var num3 = Number(prompt());
//ваш код
alert(среднее число);*/

var num1 = Number(prompt('Введите число:')),
    num2 = Number(prompt('Введите число:')),
    num3 = Number(prompt('Введите число:'));

var averageNumber;

if ((num1 > num2) && (num1 < num3) || (num1 < num2) && (num1 > num3)) {
    averageNumber = num1;

} else if ((num2 > num1) && (num2 < num3) || (num2 < num1) && (num2 > num3)) {
    averageNumber = num2;

} else if ((num3 > num1) && (num3 < num2) || (num3 < num1) && (num3 > num2)) {
    averageNumber = num3;

}

alert('Ваше среднее число ' + averageNumber);
