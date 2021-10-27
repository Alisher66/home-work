

// 6) Выведите на экран текущий день недели (словом, по-русски). Создайте для этого вспомогательную функцию showDay, которая параметром принимает число, а возвращает день недели по-русски


function showDay(num) {

    if (num == 0) {
        num = 6;
    } else {
        num -= 1;
    }

    var days = [
        "Понидельник",
        "Вторник",
        "Среда",
        "Четверг",
        "Пятница",
        "Субота",
        "Воскресенье",
    ];

    console.log(`сегодня ${days[num]}`);
}

var now = new Date();

var day = now.getDay();

showDay(day);
