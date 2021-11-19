// 8) Напишите функцию sumEvenArguments, которая принимает все аргументы, переданные ей при вызове, и возвращает сумму четных чисел (из числа аргументов).

// sumEvenArguments(1,2,3,6) // 8
//     sumEvenArguments(1,12,6) // 18
//     sumEvenArguments(1,2) // 2

// // ваш код

function sumEvenArguments() {
    let sum = 0;

    for(let i = 0; i<arguments.length; i++){
        if(arguments[i] % 2 == 0) {
            sum += arguments[i];
        }
    }
    return sum;
}

console.log(sumEvenArguments(1,2));
