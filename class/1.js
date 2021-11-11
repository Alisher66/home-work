// 1) Класс Phone.
// a) Создайте класс Phone, который содержит переменные number, model и weight.
// б) Создайте три экземпляра этого класса. 
// в) Выведите на консоль значения их переменных. 
// г) Добавить в класс Phone методы: receiveCall, имеет один параметр – имя звонящего. Выводит на консоль сообщение “Звонит {name}”. getNumber – возвращает номер телефона. Вызвать эти методы для каждого из объектов.
// д) Добавить конструктор в класс Phone, который принимает на вход три параметра для инициализации переменных класса - number, model и weight. 
// е) Добавить конструктор, который принимает на вход два параметра для инициализации переменных класса - number, model. 
// ж) Добавить конструктор без параметров.
// з) Вызвать из конструктора с тремя параметрами конструктор с двумя. 
// и) Добавьте перегруженный метод receiveCall, который принимает два параметра - имя звонящего и номер телефона звонящего. Вызвать этот метод.
// к) Создать метод sendMessageс аргументами переменной длины. Данный метод принимает на вход номера телефонов, которым будет отправлено сообщение. Метод выводит на консоль номера этих телефонов.
// л) Изменить класс Phone в соответствии с концепцией JavaBean.

const contacts = [12333, 545657, 1212123, 565656, 232313];

class Phone {

    weight = 100

    constructor(number, model, weight) {
        this.number = number;
        this.model = model;
        this.weight = weight;
    }

    // constructor(number, model){
    //     this.number = number;
    //     this.model = model;
    //     this.weight = 100;
    // }
    // constructor(){
    //     this.number = 2222;
    //     this.model = 'Phone';
    //     this.weight = 100;
    // }

    // receiveCall(name){
    //     console.log(`Звонит ${name}`)
    // }
    receiveCall(name, phone) {
        console.log(`Звонит ${name} с номера ${phone}`)
    }
    getNumber() {
        return this.number;
    }

    sendMessageс(numbers, message) {
        for(let phone of numbers){
            console.log(`на номер ${phone} отпрвлено сообшение ${message}`)
        }
    }
}



let nokia = new Phone(2312323, 'Nokia', 100);

console.log(nokia.model);
// nokia.receiveCall('Ali');
nokia.receiveCall('Ali', 2233);
console.log(nokia.getNumber());
console.log(nokia.weight);
nokia.sendMessageс(contacts, 'Привет');