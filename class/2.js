// 2)  Создать класс Person, который содержит: 
// a) поля fullName, age. 
// б) методы move() и talk(), в которых просто вывести на консоль сообщение -"Такой-то  Person говорит". 
// в) Добавьте два конструктора  - Person() и Person(fullName, age).
// Создайте два объекта этого класса. Один объект инициализируется конструктором Person(), другой - Person(fullName, age).
// ===========================================

class Person{
    #__fullName;
    #__age;
    constructor(fullName, age){
        this.#__fullName = fullName
        this.#__age = age
    }

    // constructor(){
    //     this.#__fullName = 'Ali'
    //     this.#__age = '27'
    // }
    get fullName() {
        return this.#__fullName;
    }
    set fullName(value){
        this.#__fullName = value;
    }
    get age(){
        return this.#__age;
    }
    set age(value) {
        this.#__age = value;
    }
    move(){
        console.log(`${ this.#__fullName} двигаеться`);
    }
    talk(){
        console.log(`${this.#__fullName} говорит`); 
    }
}

const ali = new Person('Ali', 27);
ali.fullName = 'asdasd';
ali.age = 23;
console.log(ali.fullName)
console.log(ali.age)

ali.move();
