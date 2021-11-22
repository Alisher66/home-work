// function invert(array) {
//     for(let i = 0; i<array.length; i++) {
//         array[i] = array[i] *(-1);
//     }
//     return array;
// }

// //  invert([1,2,3,4,5]) == [-1,-2,-3,-4,-5]

// console.log(invert([1,-2,3,4,5]))


function century(year) {
    return Math.ceil(year / 100)

}

// console.log(century(1700));
// 'asd'.toUpperCase

function highAndLow(numbers) {
    let arr = numbers.split(' ');
    let min = max = arr[0];
    for(el of arr){
        min = Math.min(min, el);
        max = Math.max(max, el);
    }
    return `${max} ${min}`
}

console.log(highAndLow("1 2 -3 4 5"));  // return "5 1"
highAndLow("1 2 -3 4 5"); // return "5 -3"
highAndLow("1 9 3 4 -5"); // return "9 -5"