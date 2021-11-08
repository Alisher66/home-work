// 4) Создайте замыкание: функция makePassword получает пароль в аргументе и возвращает внутреннюю функцию, которая принимает введенную строку и возвращает булево значение true, если введенная строка совпадает с паролем и faulse – если не слвпадает.


function makePassword(input) {
    const pass = '123';

    function compare() {
        return pass == input;
    }
    return compare();
}

console.log(makePassword('222'));