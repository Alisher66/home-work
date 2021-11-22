// 3) У нас есть массив объектов, который нужно отсортировать:
// users.sort(byField('name'));
// users.sort(byField('age'));

// То есть, чтобы вместо функции, мы просто писали byField(fieldName).

// Напишите функцию byField, которая может быть использована для этого.

// function compare(a, b) {
//     if (a меньше b по некоторому критерию сортировки) {
//       return -1;
//     }
//     if (a больше b по некоторому критерию сортировки) {
//       return 1;
//     }
//     // a должно быть равным b
//     return 0;
//   }


users = [
    { name: 'Ali', age: 21 },
    { name: 'Vasya', age: 26 },
    { name: 'Baxit', age: 17 },
];

let byField = (arg) => {
    return (a,b) => {
        if(a[arg] < b[arg]) return -1
        if(a[arg] > b[arg]) return 1
        return 0;  
    }
}

console.log(users.sort(byField('age')));
