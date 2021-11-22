// 3)  Дано число. Сложите его цифры. Если сумма получилась более 9-ти, опять сложите его цифры. И так, пока сумма не станет однозначным числом (9 и менее).


let sumNumbers = (a) => {

    var sum = 0, current = 0;

    do {
        current = a % 10;
        sum += current;
        a = parseInt(a / 10);
    } while (a > 0)

    if (sum <= 9) {
        console.log(sum)
    } else {
        sumNumbers(sum);
    }
}

sumNumbers(17993);