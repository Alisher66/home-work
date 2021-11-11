// 6) Создайте пример наследования, реализуйте класс Student и класс Aspirant, аспирант отличается от студента наличием некой научной работы.
// а) Класс Student содержит переменные: String firstName, lastName, group. А также double averageMark, содержащую среднюю оценку.
// б) Создать переменную типа Student, которая ссылается на объект типа Aspirant.
// в) Создать метод getScholarship() для класса Student, который возвращает сумму стипендии. Если средняя оценка студента равна 5, то сумма 100 грн, иначе 80. Переопределить этот метод в классе Aspirant.  Если средняя оценка аспиранта равна 5, то сумма 200 грн, иначе 180.
// г) Создать массив типа Student, содержащий объекты класса Student и Aspirant. Вызвать метод getScholarship() для каждого элемента массива. 

// ========================



class Student {
    // static scholarship = ['100 грн', '80 грн'];
    _scholarship = ['100 грн', '80 грн'];

    constructor(firstName, lastName, group, averageMark) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.group = group;
        this.averageMark = averageMark;

        this.#addUser();
    }

    getScholarship() {
        if (this.averageMark >= 5) {
            console.log(`${this.firstName} ${this.lastName} степендия = ${this._scholarship[0]}`);
        } else {
            console.log(`${this.firstName} ${this.lastName} степендия = ${this._scholarship[1]}`);
        }
    }

    #addUser() {
        people.push(this);
    }
}
class Aspirant extends Student {
    _scholarship = ['200 грн', '180 грн'];

    constructor(firstName, lastName, group, averageMark, work) {
        super(firstName, lastName, group, averageMark);
        this.work = work;
    }
}

const people = [];

const ali = new Student('Alisher', 'K.A', 3, 5);
const dima = new Aspirant('Dima', 'E.G', 1, 4, 'Nauka ff23');
const alex = new Aspirant('Alex', 'A.B', 2, 5, 'Nauka 233');



function showScholarship(arr) {
    for (let el of arr) {
        el.getScholarship();
    }
}

showScholarship(people);