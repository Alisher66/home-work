

// 9)  Выведите на экран количество секунд с начала дня до настоящего момента времени

var now = new Date();

var today = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 0, 0, 0, 0);

console.log((now.getTime() - today.getTime())/1000);
