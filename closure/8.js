// 8) создайте счетчик. В счетчике должно быть: 1) Метод обнуление счетчика. 2) Возможность изменять начало отчета счетчика.  


// function NumberGenerator() {
//   this.i = 0;

//   this.getZero = function () {
//     this.i = 0;
//   };

//   this.change = function (num) {
//     this.i = num;
//   };

//   this.sum = function () {
//     return this.i += 1;
//   };
// }

// let aa = new NumberGenerator();

// console.log(aa.sum());
// aa.change(3);
// console.log(aa.sum());
// aa.getZero();
// console.log(aa.sum());
// aa.i =5;
// console.log(aa.sum());

// let bb = new NumberGenerator();
// console.log(bb.sum());

function numberGenerator() {
  let i = 0;
  return {
    getZero: function () {
      i = 0;
    },
    change: function (num) {
      i = num;
    },
    sum: function () {
      return i += 1;
    }
  };
}

let x = numberGenerator();

console.log(x.sum());
console.log(x.sum());
x.getZero();
console.log(x.sum());
console.log(x.sum());
x.change(5);
console.log(x.sum());
console.log(x.sum());


