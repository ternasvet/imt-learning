/*
Развернуть одномерный массив чисел без метода reverse. При этом можно создать
новый вспомогательный массив. На экран вывести исходный и новый развёрнутый массив.
Рекомендую воспользоваться функциями push(), pop(), shift(), unshift() для решения.*/
let newArr = [];

let arr = [3, 5, 7, 24, 1, 6];

for (let i = arr.length - 1; i >= 0; i--) {
    newArr.push(arr[i]);
}

console.log(arr)
console.log(newArr);
