// const numbers = [5, 2, 3, 6, 1, 8, 11];

// let arr2 = numbers
//             .filter(x => x % 2 == 1)
//             .sort((x, y) => x - y);

// let i = -1;

// let arr3 = numbers.map((x) =>{
//     if(x % 2 == 1){
//         i++;
//         return arr2[i];
//     } else return x;
// });

// console.log(arr3);

// let tempArr = [...numbers];

const numbers = [5, 2, 3, 6, 1, 8, 11];

numbers.forEach((x, index, arr) => {
    if (x % 2 == 1) {
        arr[index] = arr[index+1];
    }
});
console.log(numbers);
