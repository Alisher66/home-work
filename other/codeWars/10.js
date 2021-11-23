// Маркетинговая команда тратит слишком много времени на ввод хэштегов.
// Давайте поможем им с нашим собственным генератором хэштегов!

// Вот сделка:

// Он должен начинаться с хэштега (#).
// Все слова должны начинаться с заглавной буквы.
// Если окончательный результат длиннее 140 символов, он должен вернуть false.
// Если ввод или результат - пустая строка, он должен вернуть false.

// " Hello there thanks for trying my Kata"  =>  "#HelloThereThanksForTryingMyKata"
// "    Hello     World   "                  =>  "#HelloWorld"
// ""                                        =>  false

function generateHashtag(str) {
    str = str.trim();
    if(str == '') return false;
    let arr = str.split(' ').filter((x)=> x != '');
    arr.forEach((el,index) => arr[index] = getStrTo(el));
    let res = '#'+arr.join('')
    if(res.length > 140) return false
    return res;
}
function getStrTo(str) {
    let arr = str.split('');
    arr[0] = arr[0].toUpperCase();
    return arr.join('');    
}

console.log(generateHashtag(' '))
