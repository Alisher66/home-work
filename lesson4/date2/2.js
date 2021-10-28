// 2) - Определить, сколько дней осталось до нового учебного года.

var now = new Date();

var date = new Date(now.getFullYear(), 8, 1);

if (now.getTime() - date.getTime() > 0) {
    date.setFullYear(now.getFullYear() + 1);
}

var dif = Math.floor((date.getTime() - now.getTime()) / 1000 / 3600 / 24);

console.log(`до нового учебного года осталось ${dif}`);