

// 4)  Выведите на экран текущую дату-время в формате '12:59:59 31.12.2014'. Для решения этой задачи напишите функцию, которая будет добавлять 0 перед днями и месяцами, которые состоят из одной цифры (из 1.9.2014 сделает 01.09.2014)



function showTime() {
    var now = new Date();

    // now.setMonth(2, 3);
    var date = now.getDate(),
        month = now.getMonth() + 1;

    if (parseInt(date / 10) == 0) {
        date = '0' + date;
    }
    if (parseInt(month / 10) == 0) {
        month = '0' + month;
    }

    console.log(`${now.getHours()}:${now.getMinutes()}:${now.getSeconds()} ${date}.${month}.${now.getFullYear()}`);
}

showTime();