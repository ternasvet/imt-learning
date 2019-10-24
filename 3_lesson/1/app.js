//Создайте функцию getDateAgo(date, days), возвращающую число, которое было days дней назад от даты date.
// К примеру, если сегодня двадцатое число, то getDateAgo(new Date(), 1) вернёт девятнадцатое
// и getDateAgo(new Date(), 2) – восемнадцатое.
// Функция должна надёжно работать при значении days>=365 и больших значениях.
// Конечную дату форматируем, чтоб получилось: 1 января  2019 г.

//функция, возвращающая число

function getDateAgo(date, days) {
    return new Date(date.setDate(date.getDate() - days)).getDate();
}

console.log(getDateAgo(new Date(2019, 10, 22), 2));

//чтобы форматирование работало надо в функцию передать объект даты

function getDateAgo2(date, days) {
    return new Date(date.setDate(date.getDate() - days));
}

console.log(getDateAgo2(new Date(), 2));

function dateFormat(date) {
    let monthList = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня',
        'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'];
    let month = date.getMonth();
    let year = date.getFullYear();
    return `${date.getDate()} ${monthList[month]} ${year} г.`;

}

console.log(dateFormat(getDateAgo2(new Date(), 2)));

