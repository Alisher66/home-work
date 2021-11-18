
function logPerson() {
    console.log(`Person: ${this.name}, ${this.age}`);
}

const person1 = {name: 'Alex', age: 23}
const person2 = {name: 'Dima', age: 25}


function bind(obj, fn) {
    person1.__proto__.fn = fn
    return function () {
        obj.fn();
    }
}

const a = bind(person1, logPerson);
const b = bind(person2, logPerson)
console.log(person1)
a();