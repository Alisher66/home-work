// Массивы JavaScript поддерживают функцию фильтрации (начиная с JavaScript 1.6). Используйте функцию фильтра, чтобы выполнить данную функцию.

// Решение будет работать следующим образом:
// getEvenNumbers([2,4,5,6]) // should == [2,4,6]

function getEvenNumbers(arr) {
    const tempArr = arr.filter((el) => el % 2 == 0);
    return tempArr.sort((a, b) => a - b);
}

// console.log(getEvenNumbers([ 36,98,75,20,36,21,62,95,3,6,21 ]))
