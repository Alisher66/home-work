// В этом примере вы должны проверить, является ли строка ввода пользователя буквенно-цифровой. Данная строка не является nil / null / NULL / None, поэтому вам не нужно это проверять.

// Строка должна быть буквенно-цифровой при следующих условиях:

// Хотя бы один символ (недопустимый "")
// Допустимые символы: прописные / строчные латинские буквы и цифры от 0 до 9.
// Без пробелов / подчеркивания


// describe("Tests", () => {
//     it("test", () => {
//   Test.assertEquals(alphanumeric("Mazinkaiser"), true)
//   Test.assertEquals(alphanumeric("hello world_"), false)
//   Test.assertEquals(alphanumeric("PassWord"), true)
//   Test.assertEquals(alphanumeric("     "), false)
//     });
//   });


//     Basic tests
// Log
// Mazinkaiser
// Test Passed: Value == true
// Log
// hello world_
// Expected: false, instead got: true
// Log
// PassW0rd
// Test Passed: Value == true
// Log
     
// Expected: false, instead got: true
// Expected: false, instead got: true
// Log
	
// Expected: false, instead got: true
// Log
// ciao
// $$_
// Expected: false, instead got: true
// Log
// __ * __
// Expected: false, instead got: true
// Log
// &)))(((
// Expected: false, instead got: true

function alphanumeric(str) {

    let flag = false;
    
    for (let i = 0; i < str.length; i++) {
        if (str[i] === " " || str[i] === "" || str[i] === "_" || str[i] === "!" || str[i].charCodeAt() === 10) {
            flag = false;
            return flag;
        }
        if ( (str[i] !== " " || str[i].charCodeAt !== 10) && !isNaN(str[i])) {
            flag = true;
            console.log(str[i],1);
        }
        else if ((str[i].charCodeAt() > 64 && str[i].charCodeAt() < 123) || str[i] === "&") {
            flag = true;
            console.log(str[i],2);
        } 
    }
   
    return flag;
}
console.log(alphanumeric('&)))((('));

// console.log(!isNaN('!'));

