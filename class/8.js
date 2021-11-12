// 8) Создать класс Animal и расширяющие его классы Dog, Cat, Horse. Класс Animal содержит переменные food, location и методы makeNoise, eat, sleep. Метод makeNoise, например, может выводить на консоль "Такое-то животное спит". Dog, Cat, Horse переопределяют методы makeNoise, eat. Добавьте переменные в классы Dog, Cat, Horse, характеризующие только этих животных. Создайте класс Ветеринар, в котором определите метод void treatAnimal(Animal animal). Пусть этот метод распечатывает food и location пришедшего на прием животного. В методе main создайте массив типа Animal, в который запишите животных всех имеющихся у вас типов. В цикле отправляйте их на прием к ветеринару.

const animals = [];

class Animal{
    _name = "Animal"

    constructor(food, location){
        this.food = food;
        this.location = location;
        this.main();
    }

    get name() {
        return this._name;
    }
    set name(value) {
        this._name = value;
    }
    makeNoise(){
        console.log("животное шумит")
    }
    eat(){
        console.log("животное кушает")
    }
    sleep(){
        console.log("животное спит")
    }
    main(){
        animals.push(this);
    }
}
class Cat extends Animal{
    _name = "Кошка"
    
    constructor(food, location){
        super(food, location)
    }
    makeNoise(){
        console.log(`${this.name} шумит ${this.location}`)
    }
    eat(){
        console.log(`${this.name} кушает ${this.food}`)
    }
}

const cat1 = new Cat('хлеб', 'дома');
cat1.eat();

class Dog extends Animal{
    _name = "Собака"

    constructor(food, location){
        super(food, location)
    }

    makeNoise(){
        console.log(`${this.name} шумит`)
    }
    eat(){
        console.log(`${this.name} кушает ${this.food}`)
    }
}
const dog1 = new Dog('мясо', 'на улице')

class Horse extends Animal{
    _name = "Лошадь"

    constructor(food, location){
        super(food, location)
    }

    makeNoise(){
        console.log(`${this.name} шумит`)
    }
    eat(){
        console.log(`${this.name} кушает ${this.food}`)
    }
}
const horse1 = new Horse('трава', 'На поле')



class Veterinarian{

    treatAnimal(animals){
        for(let el of animals){
            console.log(`Ветеренарь принимает => ${el.name}`)
        }
    }
}
const lena = new Veterinarian();

// console.log(animals);
lena.treatAnimal(animals);