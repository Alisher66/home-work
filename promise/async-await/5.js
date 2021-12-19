// 4) Есть недописаная функция "parallel(funcArray, doneAll)":


// function parallel(funcArray, doneAll) {
//     this.arr = [];
//     this.getArg = function (arg) {
//         arr.push(arg);
//     }

//     funcArray.forEach(el => {
//         el(this.getArg);
//     });

//     let interval = setInterval(() => {
//         if (funcArray.length == this.arr.length) {
//             clearInterval(interval);
//             doneAll(this.arr);
//         }
//     }, 0);
// }

// var a = function (done) {
//     setTimeout(function () {
//         done('result a');
//     }, 300);
// };

// var b = function (done) {
//     setTimeout(function () {
//         done('result b');
//     }, 200);
// };


// parallel([a, b], function (results) {
//     console.log(results); // ['result a', 'result b']
// });


var a = function (done) {
    setTimeout(function () {
        done('result a');
    }, 300);
};

var b = function (done) {
    setTimeout(function () {
        done('result b');
    }, 200);
};



async function parallel(funcArray, doneAll) {

}

parallel([a, b])


