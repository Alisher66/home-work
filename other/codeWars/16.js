// Что такое анаграмма? Что ж, два слова являются анаграммами друг друга, если они оба содержат одинаковые буквы. Например:

// 'abba' и 'baab' == истина

// 'abba' и 'bbaa' == верно

// 'abba' и 'abbba' == ложь

// 'abba' и 'abca' == ложь
// Напишите функцию, которая найдет все анаграммы слова из списка. Вам будет предоставлено два входа - слово и массив со словами. Вы должны вернуть массив всех анаграмм или пустой массив, если их нет. Например:
// anagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada']) => ['aabb', 'bbaa']

// anagrams('racer', ['crazer', 'carer', 'racar', 'caers', 'racer']) => ['carer', 'racer']

// anagrams('laser', ['lazing', 'lazy',  'lacer']) => []


function anagrams(word, words) {
    let wordSimbolCount = sumStrValue(word),
        wordLength = word.length;

    let arr = words.filter((str) =>{
        if(wordLength == str.length && wordSimbolCount == sumStrValue(str)){
            return str;
        }
    });

    return arr;
}

function sumStrValue(str) {
    let sum = 0;
    for (el of str) {
        sum += el.charCodeAt();
    }
    return sum;
}

console.log(anagrams('racer', ['crazer', 'carer', 'racar', 'caers', 'racer']));


// String.prototype.sort = function() {
//     return this.split("").sort().join("");
//   };
  
//   function anagrams(word, words) {
//     return words.filter(function(x) {
//         return x.sort() === word.sort();
//     });
//   }