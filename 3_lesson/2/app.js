//Напишите функцию diffForHumans(date), форматирующую date по следующему принципу:
// Если спустя date прошло менее 1 секунды, вывести "прямо сейчас".
// В противном случае, если с date прошло меньше 1 минуты, вывести "n сек. назад".
// В противном случае, если меньше часа, вывести "m мин. назад".
// В противном случае, полная дата в формате "DD.MM.YY HH:mm".
// А именно: "день.месяц.год часы:минуты", всё в виде двух цифр, т.е. 31.12.16 10:00.

function diffForHumans(date) {
    let now = new Date();
    const diffInSec = ((now.getTime() - date.getTime()) / 1000).toFixed();
    if (diffInSec < 1) {
        return "Прямо сейчас";
    }
    if (diffInSec < 60) {
        return `${(diffInSec)} cек  назад`;
    }
    if (diffInSec < 60 * 60) {
        return `${diffInSec / 60} мин.  назад`;
    }
    return dateFormat(date);

}
//Функция форматирования
function dateFormat(date) {
    let dd = ('0' + date.getDate()).slice(-2);

    let mm = ('0' + (date.getMonth() + 1)).slice(-2);

    let yy = ('0' + (date.getFullYear() % 100)).slice(-2);

    let hh = ('0' + date.getHours()).slice(-2);

    let min = ('0' + date.getMinutes()).slice(-2);

    return `${dd}.${mm}.${yy} ${hh}:${min}`;
}


//Тестируем ситуацию: "Прямо сейчас".
console.log(diffForHumans(new Date()));

//Тестируем ситуацию: "30 сек. назад".
console.log(diffForHumans(new Date(new Date().getTime() - 30 * 1000)));

//Тестируем ситуацию: "30 мин. назад".
console.log(diffForHumans(new Date(new Date().getTime() - 30 * 60 * 1000)));

//Тестируем ситуацию: полная дата в формате "DD.MM.YY HH:mm".
console.log(diffForHumans(new Date(new Date().getTime() - 5 * 24 * 60 * 60 * 1000)));



