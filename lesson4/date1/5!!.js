

// 5) В анкете заполняется информация о 5 сотрудниках:фамилия, дата заключения контракта и срок(в годах), на какой заключён контракт.Напишите сценарий,определяюший сотрудников, контракт с которыми заканчивается в выходной день.



function showTime() {
    var now = new Date();

    // now.setMonth(2, 3);
    var date = now.getDate(),
        month = now.getMonth() + 1;

    if (parseInt(date / 10) == 0) {
        date = '0' + date;
    }
    if (parseInt(month / 10) == 0) {
        month = '0' + month;
    }

    console.log(`${now.getHours()}:${now.getMinutes()}:${now.getSeconds()} ${date}.${month}.${now.getFullYear()}`);
}

showTime();