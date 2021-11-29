let sum = (x = 0, y = 0) => Number(x) + Number(y);

let shiftZero = (arr) => {
    let temp = [...arr];
    for (let i = 0; i < arr.length; i++) {
        if (+arr[i] == 0) temp.shift();
        else break;
    }
    return temp;
}


function sumStrings(a, b) {
    let arr1 = [...a],
        arr2 = [...b];

    arr1 = shiftZero(arr1).reverse();
    arr2 = shiftZero(arr2).reverse();

    let arr3 = [];

    let maxLength = Math.max(arr1.length, arr2.length);

    let div = 0;
    for (let i = 0; i <= maxLength; i++) {
        arr3[i] = sum(arr1[i], arr2[i]) + (div);
        div = 0;
        if (arr3[i] >= 10) {
            div = parseInt(arr3[i] / 10);
            arr3[i] = arr3[i] % 10;
        }
    }
    console.log(arr3);
    if (arr3[arr3.length - 1] == 0) {
        arr3.pop();
    }
    return arr3.reverse().join('');

}

// console.log(sumStrings('00103', '08567'));

console.log(sumStrings('712569312664357328695151392', '8100824045303269669937'))