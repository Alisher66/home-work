// 11)  Сделайте функцию, которая получает имя пользователя и выводит на экран 'Привет, Имя' (вместо Имя - полученное параметром имя). По умолчанию (то есть если не передать параметр) функция должна выводить 'Привет, Аноним'.

function showInfo(name = 'Аноним') {
    console.log(`Привет, ${name}`);
}

showInfo('ali');