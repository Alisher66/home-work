

// 8) Выведите на экран количество часов, прошедшее между 1 марта 1988 года и текущим моментом с помощью Date.parse

var old = new Date(1988, 2, 1);
var now = new Date();


var difference = (Date.parse(now) - Date.parse(old)) / 1000 / 3600;

console.log(difference);


