// 5)  Дан объект {name: 'Петр', 'surname': 'Петров', 'age': '20 лет'}. Запишите соответствующие значения в переменные name, surname и age.  .

const person = {name: 'Петр', 'surname': 'Петров', 'age': '20 лет'};

let {name, surname, age} = person;

console.log(name, surname, age);