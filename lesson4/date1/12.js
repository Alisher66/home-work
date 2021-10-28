

//  12) Создайте функцию в котором проверяться находиться ли дата в периоде или нет? 

var now = new Date(),
    date1 = new Date(2020, 0, 0),
    date2 = new Date(2023, 0.0);



function someFum(start, end, date) {

    if (date.getTime() > start.getTime() && date.getTime() < end.getTime()) {
        console.log('находиться в периоде');
    } else {
        console.log('не находиться в периоде');
    }
}
someFum(date1, date2, now);