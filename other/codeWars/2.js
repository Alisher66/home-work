// Реализуйте функцию, которая принимает 3 целочисленных значения a, b, c. Функция должна возвращать истину, если треугольник можно построить со сторонами заданной длины, и ложь в любом другом случае.

// (В этом случае для принятия все треугольники должны иметь поверхность больше 0).

function isTriangle(a, b, c) {
    let triangle = false;
    if (a > 0 && b > 0 && c > 0) {
        if (a + b > c && b + c > a && a + c > b) {
            triangle = true;
        }
    }
    return triangle
}

// console.log(isTriangle(7,2,2))

function bmi(weight, height) {
    let a = weight / (height ** 2)
    if (a <= 18.5) return "Underweight"
    else if (a <= 25) return "Normal"
    else if (a <= 30) return "Overweight"
    else if (a > 30) return "Obese"
}

console.log(bmi(80, 1.80));