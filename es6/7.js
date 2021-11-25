// 7)  Дан массив, выведите его элементы последовательно на экран.  .

const numbers = [1, 2, 34, 5, 6, 7, 8, 9];

// for(let num of numbers) {
//     console.log(num);
// }

// 8)  Дан массив, выведите его элементы последовательно на экран в обратном порядке (подсказка: сначала перевернем массив через reverse).  .
// 
// for(let num of numbers.reverse()) {
//     console.log(num);
// }

// 9)  Дан массив с числами, найдите сумму элементов этого массива.  .
// let sum = 0
// for(let num of numbers) {
//     sum += num; 
// }
// console.log(sum)

// 10) Дана строка. С помощью for-of подсчитайте количество букв 'о' в ней.  .
let str = 'hello world!';
let count = 0
for(let el of str) {
    if(el == 'o') count++;
}
console.log(count);
