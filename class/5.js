// 5) Даны два целых числа A и В. Выведите все числа от A до B включительно, в порядке возрастания, если A < B, или в порядке убывания в противном случае. Использовать рекурсию.
// ===============================

class GetNumbers {
    constructor(a, b) {
        this.a = a;
        this.b = b;
    }
    show() {
        if(this.a <= this.b) {
            for(let i = this.a; i<= this.b; i++){
                console.log(i);
            }
        } else{
            for(let i = this.a; i>= this.b; i--){
                console.log(i);
            }
        }
    }

  
}

const num1 = new GetNumbers(1, 5);
num1.show();