// 1)  Выведите на экран текущие день, месяц и год в формате 'год-месяц-день'.


showDate = (date) => `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;


console.log(showDate(new Date()));