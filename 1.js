// Преобразуйте user в JSON, затем прочитайте этот JSON в другую переменную.

let user = {
  name: "Василий Иванович",
  age: 35,
  data: new Date(),

};

let data = JSON.stringify(user);
console.log(data);

let user1 = JSON.parse(data, (key, value) => {
    if(key == "data") return new Date(value)
    return value;
});
console.log(user1.data.getFullYear())