

//  11)  Напишите функцию formatDate(date), которая выводит дату date в формате дд.мм.гг

var now = new Date();

function formatDate(date) {
    console.log(`${date.getDate()}.${date.getMonth()+1}.${date.getFullYear()}`);
}

formatDate(now);