// Учитывая строку слов, вам нужно найти слово с наибольшей оценкой.

// Каждая буква слова оценивается в баллах в соответствии с ее положением в алфавите: a = 1, b = 2, c = 3 и т. Д.

// Вам нужно вернуть слово с наибольшей оценкой в виде строки.

// Если два слова имеют одинаковый балл, верните слово, которое встречается раньше всего в исходной строке.

// Все буквы будут строчными, и все введенные данные будут действительными.


function high(x) {
    let arr = x.split(' ');
    let max = arr[0].length;
    for (let i = 0; i < arr.length; i++) {
        max = Math.max(max, arr[i].length)
    }
    let arr2 = arr.filter((x) => x.length == max);

    if (arr2.length == 1) {
        return arr2[0];
    } else {
        let temp = sumStrValue(arr2[0]), res = 0;
        for (let i = 0; i < arr2.length; i++) {
            temp = Math.max(sumStrValue(arr2[i]), temp);
            if(temp == sumStrValue(arr2[i])){res = arr2[i]}
        }
        return res;
    }
}


function sumStrValue(str) {
    let sum = 0;
    for (el of str) {
        sum += el.charCodeAt();
    }
    return sum;
}

// let a = 'abcdefghijklmnopqrstuvwxyz'.split('');
// for (el of a) {
//     console.log(el, el.charCodeAt() - 96);
// }
// console.log('a'.charCodeAt())
// console.log(sumStrValue('a'))
// console.log('asd as'.split(' '))
// console.log(high('what time are we climbing up the volcano'))

// console.log(high('b aa'))
// console.log(sumStrValue('volcano'))

console.log(sumStrValue('climbing'))
console.log(sumStrValue('volcano'))