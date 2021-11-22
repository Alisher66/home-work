// 5) Найти в строке указанную подстроку и заменить ее на новую. Строку, ее подстроку для замены и новую подстроку вводит пользователь.



let searchStr = (str, search, replaceStr) => {
    var start = '',
        end = '',
        newStr = '';

    start = str.slice(0, str.indexOf(search))
    end = str.slice(str.indexOf(search) + search.length)
    newStr = start + replaceStr + end

    if (newStr.includes(search)) {
        searchStr(newStr, search, replaceStr);
    } else {
        console.log(newStr);
    }
}


searchStr('absdabsddsa absd', 'abs', 'new1');