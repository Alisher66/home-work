// Переверните каждое второе слово в заданной строке, затем верните строку. Отбросьте все начальные или конечные пробелы, убедившись, что между каждым словом есть ровно один пробел. Знаки препинания следует рассматривать так, как будто они являются частью слова в этом ката.
// ("Reverse this string, please!"), "Reverse siht string, !esaelp"


function reverse(str) {

    let arr = str.trim().split(' ').filter((x) => x != '');

    arr.forEach((el, index) => {
        if (index % 2 != 0) arr[index] = reverseStr(el);
    });
    return arr.join(' ');
}
function reverseStr(str) {
    return str.split('').reverse().join('');
}

console.log(reverseStr('asd'));
console.log(reverse('"Reverse this string, please!"'));