// 7) Создать класс Car в пакете com.company.vehicles, Engine в пакете com.company.details и Driver в пакете com.company.professions. Класс Driver содержит поля - ФИО, стаж вождения.
// Класс Engine содержит поля - мощность, производитель.
// Класс Car содержит поля - марка автомобиля, класс автомобиля, вес, водитель типа Driver, мотор типа Engine. Методы start(), stop(), turnRight(), turnLeft(), которые выводят на печать: "Поехали", "Останавливаемся", "Поворот направо" или "Поворот налево". А также метод printInfo(), который выводит полную информацию об автомобиле, ее водителе и моторе. 
// Создать производный от Car класс  - Lorry (грузовик), характеризуемый также грузоподъемностью кузова. Создать производный от Car класс - SportCar, характеризуемый также предельной скоростью. Пусть класс Driver расширяет класс Person.

class Person{
    constructor(fullName){
        this.fullName = fullName;
    }
    
    static getUser(){
        return new this('User Alex M.L');
    }
}
const alex = Person.getUser();

class Driver extends Person{
    constructor(fullName, experience){
        super(fullName);
        this.experience = experience;
    }

    static getDriver(){
        return new this('User Alex M.L', 1);
    }
}
const dr1 = Driver.getDriver();

class Engine{
    constructor(power, producer){
        this.power = power;
        this.producer = producer;
    }
    
    static getDefault(){
        return new this(230, 1180);
    }
}
const eng1 = Engine.getDefault();


class Car extends Driver{

    #defaultType = ['Nisan', 'D2', 2300]

    constructor(){
        this.mark = 'Audi';
        this.type = 'B2';
        this.weight = 2300;
    }
    start()
    stop()
    turnRight()
    turnLeft()
}