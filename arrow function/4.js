
// 2) Напиши функцию partial(fn, a1, a2, ....), которая позволяет зафиксировать один или несколько аргументов функции. Пример:
// function add(a, b) { return a + b; }
// function mult(a, b, c, d) { return a * b * c *8; }

// var add5 = partial(add, 5); // Мы получили функцию с 1 аргументом, которая прибавляет к любому числу 5

// console.log(add5(2)); // 7
// console.log(add5(10)); // 15
// console.log(add5(8)); // 13

// var mult23 = partial(mult, 2, 3); // мы зафиксировали первые 2 аргумента mult() как 2 и 3

// console.log(mult23(4, 5)); // 2*3*4*5 = 120
// console.log(mult23(1, 1)); // 2*3*1*1 = 6


let mult = (...args) => {
    let res = 1;
    for (let i = 0; i < args.length; i++) {
        res *= args[i]
    }
    return res;
}
let add = (...args) => {
    let res = 0;
    for (let i = 0; i < args.length; i++) {
        res += args[i]
    }
    return res;
}

let partial = (fn, ...args) => {
    return function (...args2) {
        return fn(...args, ...args2);
    }
}
var mult23 = partial(mult, 2, 3)
var add5 = partial(add, 5);

console.log(add5(1,2))
console.log(mult23(4,5))
console.log(mult23(1,2))
