// 7) Создать класс Car в пакете com.company.vehicles, Engine в пакете com.company.details и Driver в пакете com.company.professions. Класс Driver содержит поля - ФИО, стаж вождения.
// Класс Engine содержит поля - мощность, производитель.
// Класс Car содержит поля - марка автомобиля, класс автомобиля, вес, водитель типа Driver, мотор типа Engine. Методы start(), stop(), turnRight(), turnLeft(), которые выводят на печать: "Поехали", "Останавливаемся", "Поворот направо" или "Поворот налево". А также метод printInfo(), который выводит полную информацию об автомобиле, ее водителе и моторе. 
// Создать производный от Car класс  - Lorry (грузовик), характеризуемый также грузоподъемностью кузова. Создать производный от Car класс - SportCar, характеризуемый также предельной скоростью. Пусть класс Driver расширяет класс Person.

class Person{
    constructor(fullName){
        this.fullName = fullName;
    }
    
    static getUser(){
        return new this('Driver Alex M.L');
    }
}
const alex = Person.getUser();

class Driver extends Person{
    constructor(fullName, experience){
        super(fullName);
        this.experience = experience;
    }

    static getDriver(){
        return new this('Driver Alex M.L', 1);
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


class Car extends Engine{

    static defaultCar = ['Nisan', 'D2', 2300]

    constructor(mark, type, weight, driver, power, producer){
        super(power, producer);
        this.mark = mark;
        this.type = type;
        this.weight = weight;
        this.driver = driver;
    }

    static getDefault(){
        return new this(Car.defaultCar[0], Car.defaultCar[1],Car.defaultCar[2], 'Driver Alex M.L', 230, 1180)
    }

    start(){
        console.log("Поехали")
    }
    stop(){
        console.log("Останавливаемся");
    }
    turnRight(){
        console.log("Поворот направо");
    }
    turnLeft(){
        console.log("Поворот налево");
    }
    printInfo(){
        console.log(`Марка авто ${this.mark}\n type ${this.type}\n weight ${this.weight}\n driver ${this.driver}\n power ${this.power}\n producer ${this.producer}`);
    }
}

const matiz = new Car('Matiz', 'D2', 2300, 'Alisher K.A', 230, 1180);
const nisan = Car.getDefault();
// matiz.printInfo()
// console.log(nisan)


class Lorry extends Car{
    static type = 'грузовик';

    constructor(mark, weight, driver, power, producer, powerAll){
        super(mark, Lorry.type, weight, driver, power, producer)
        this.powerAll = powerAll;
    }

    printInfo(){
        super.printInfo();
        console.log(` грузоподъемность кузов ${this.powerAll}` );
        
    }
}
const kamaz = new Lorry('Kamaz', 2300, 'Alisher K.A', 230, 1180, '2000T');
// kamaz.printInfo();

class SportCar extends Car{
    static type = 'SportCar';

    constructor(mark, weight, driver, power, producer, speed){
        super(mark, SportCar.type, weight, driver, power, producer);
        this.speed = speed;
    }

    printInfo(){
        super.printInfo();
        console.log(` скорость ${this.speed} км/час`);
    }

}

const myCar = new SportCar('Mazda', 1200, 'Alisher K.A', 230, 1180, 300);
myCar.turnLeft()
myCar.printInfo();