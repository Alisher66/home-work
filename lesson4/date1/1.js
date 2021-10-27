

// 1)  Выведите на экран текущие день, месяц и год в формате 'год-месяц-день'.


var now = new Date();

console.log(`${now.getFullYear()}-${now.getMonth()+1}-${now.getDate()}`);