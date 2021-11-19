// 13) Определите в массиве A номер первого элемента, равного X.
// Определите номер первого элемента, равного X, в первой половине массива A (массив имеет чётное число элементов).
// Определите номер первого элемента, равного X, во второй половине массива A (массив имеет чётное число элементов).


randomNumber = (min = 0, max = 10) => {
    var num = Math.floor(min + Math.random() * (max - min + 1));
    return num;
};

getRandomArr = (n) => {
    var rand, res = [];

    for (var i = 0; i < n; i++) {
        rand = randomNumber();
        res.push(rand);
    }
    return res;
};

searchOne = (arr, x) => {
    for(let i = 0; i<arr.length/2; i++){
        if(arr[i] == x) {
            return i;
        }
    }
};

searchTwo = (arr, x) => {
    for(let i = arr.length/2; i<arr.length; i++){
        if(arr[i] == x) {
            return i;
        }
    }
}
// const arr1 = getRandomArr(10);
const arr1 = [1,2,3,2,1,2,1,1,2,2];
console.log(arr1);
console.log(searchTwo(arr1, 2));