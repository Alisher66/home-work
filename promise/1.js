// 1) что выведет код?  Объясните
var a = 5;
setTimeout(function timeout() {
    console.log(a, 'in timeout');
    a = 10;
}, 0);

var p = new Promise(function (resolve, reject) {
    console.log(a, 'in promise');
    a = 25;
    resolve();
});

p.then(function () {
    console.log(a, "in then");
    a = 15;
});

console.log(a, 'in main');