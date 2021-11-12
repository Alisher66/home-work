// 12) а) Создать класс Товар, имеющий переменные имя, цена, рейтинг. 
// б) Создать класс Категория, имеющий переменные имя и массив товаров. Создать несколько объектов класса Категория. 
// в) Создать класс Basket, содержащий массив купленных товаров. 
// г) Создать класс User, содержащий логин, пароль и объект класса Basket. Создать объект класса User. (Интернет магазин)

const goods = []

class Goods {
    constructor(name, price, rating) {
        this.name = name
        this.price = price
        this.rating = rating
    }
}
const boots = [
    new Goods('boots', 150, 3.4),
    new Goods('boots2', 170, 2.3),
    new Goods('boots3', 180, 4.1)
];
const suits = [
    new Goods('suits1', 200, 3.3),
    new Goods('suits2', 300, 4.3),
    new Goods('suits3', 350, 4.1)
]

class Category {
    constructor(name, goods) {
        this.name = name;
        this.goods = goods;
    }
}

const bootsCat = new Category('кроссовки', boots);
const suitsCat = new Category('Костюмы', suits);

class Basket {
    constructor(sale) {
        this.sale = sale;
    }
}
const basket1 = new Basket([
    bootsCat.goods[1],
    suitsCat.goods[0],
    suitsCat.goods[2],
])

// console.log(basket1);

class User {
    constructor(login, password, basket) {
        this._login = login;
        this._password = password,
        this._basket = basket
    }
    
    get login(){
        return this._login;
    }
    set login(value){
        this._login = value; 
    }

    get password(){
        return this._password;
    }
    set password(value){
        console.log('Функция временно не работает обратитесь к администратору');
    }

    get basket(){
        return this._basket;
    }

}

const ali = new User('ggwp0012', '123', basket1);
console.log(ali.login);
ali.password = 'asdasd23123asd@123';
console.log(ali.password);

console.log(ali.basket)


