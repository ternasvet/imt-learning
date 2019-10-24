//Напишите функцию diffBetween(date1, date2), которая вернет объект, в котором будет сказано,
// сколько лет, дней, часов, минут и секунд между двумя датами.
// Формат:
// {
//   years: Y,
//   months: M,
//   days: D,
//   hours: H,
//   minutes: I,
//   seconds: S
// }

function diffBetween(date1, date2) {
    if (date1 > date2) {
        let tmp = date2;
        date2 = date1;
        date1 = tmp;
    }

    let diffSec = date2.getSeconds() - date1.getSeconds();
    let diffMin = date2.getMinutes() - date1.getMinutes();
    if (diffSec < 0) {
        diffMin -= 1;
        diffSec += 60;
    }

    let diffHours = date2.getHours() - date1.getHours();
    if (diffMin < 0) {
        diffHours -= 1;
        diffMin += 60;
    }

    let diffDays = date2.getDate() - date1.getDate();
    if (diffHours < 0) {
        diffDays -= 1;
        diffHours += 24;
    }
    let diffMonth = date2.getMonth() - date1.getMonth();
    let diffYear = date2.getFullYear() - date1.getFullYear();

    //найдем количество дней в месяце
    let dayFromMonth = (new Date(date1.getFullYear(), date1.getMonth(), 0).getDate());

    if (diffDays < 0) {
        diffMonth = -1;
        diffDays += dayFromMonth;
    }
    if (diffMonth < 0) {
        diffYear -= 1;
        diffMonth += 12;
    }

    let result = {};
    result['years'] = diffYear;
    result['months'] = diffMonth;
    result['days'] = diffDays;
    result['hours'] = diffHours;
    result['minutes'] = diffMin;
    result['seconds'] = diffSec;

    return result;
}

console.log(diffBetween(new Date(2024, 2, 20, 6, 54, 4), new Date(2019,
    10, 19, 14, 40, 45)));

console.log(diffBetween(new Date(2020, 10, 20, 3, 5, 56), new Date(2019,
    11, 16, 17, 44, 6)));

console.log(diffBetween(new Date(2019, 10, 20, 3, 54, 4), new Date(2019,
    10, 24, 14, 40, 45)));

console.log(diffBetween(new Date(2019, 10, 24, 17, 42, 46), new Date(2019,
    10, 24, 14, 40, 45)));

console.log(diffBetween(new Date(), new Date(2019,10, 24, 14, 40, 45)));