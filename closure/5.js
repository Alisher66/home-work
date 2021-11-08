// 5) Создайте замыкание: функция addition получает число n и возвращает внутреннюю функцию. Эта функция также получает число, прибавляет его к n и возвращает результат.


function addition(n) {
    
    return function (m) {
        return m+n;
    };
}

let num = addition(2);
console.log(num(3));