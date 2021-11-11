// 4) Определить класс Reader, хранящий такую информацию о пользователе библиотеки: ФИО, номер читательского билета, факультет, дата рождения, телефон. Методы takeBook(), returnBook().
// Разработать программу, в которой создается массив объектов данного класса. Перегрузить методы takeBook(), returnBook():
// - takeBook, который будет принимать количество взятых книг. Выводит на консоль сообщение "Петров В. В. взял 3 книги".
// - takeBook, который будет принимать переменное количество названий книг. Выводит на консоль сообщение "Петров В. В. взял книги: Приключения, Словарь, Энциклопедия".
// - takeBook, который будет принимать переменное количество объектов класса Book (создать новый класс, содержащий имя и автора книги). Выводит на консоль сообщение "Петров В. В. взял книги: Приключения, Словарь, Энциклопедия".
//  Аналогичным образом перегрузить метод returnBook(). Выводит на консоль сообщение "Петров В. В. вернул книги: Приключения, Словарь, Энциклопедия". Или  "Петров В. В. вернул 3 книги".

// =====================

const users = [];

class Render{
   
    static #id = 0

    constructor(fullName, faculty, birthDay, number){
        this.id = ++Render.#id;

        this.fullName = fullName;
        this.faculty = faculty;
        this.birthDay = birthDay;
        this.number = number;

        this.addUser();
    }
  
    // takeBook(n){
    //     console.log(`${this.fullName} взял ${n} книги`);
    // }

    takeBook(arg){
        console.log(`${this.fullName} взял книги: ${arg}`);
    }

    returnBook(n){
        console.log(`${this.fullName} вернул ${n} книги`);
    }
    
    addUser(){
        users.push({
            fullName: this.fullName,
            id: this.id,
            faculty: this.faculty,
            birthDay: this.birthDay,
            number: this.number
        });
    }
}

class Book{

    // books = > are an array
    constructor(books){
        this.books = books;
    }
    
    getBooks(){
        let str='';
        
        for(let book of this.books){
            str += `${book}, `;
        }
        return str;   
    }
}

let petrov = new Render('Петров В. В', 'Math', new Date(1994,10,11), 12333123);
let ivanov = new Render('Иванов В. В', 'Fizika', new Date(1994,6,22), 2331233);
let grisha = new Render('Сергеев г. В', 'Fizika', new Date(1994,6,22), 2331233);

let book1 = new Book(['Приключения', 'Словарь', 'Энциклопедия']).getBooks();

grisha.takeBook(book1);
