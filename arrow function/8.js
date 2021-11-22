//1) Напишите функцию printNumbers(from, to), которая выводит число каждую секунду, начиная от from и заканчивая to.
        // Сделайте два варианта решения.
        // Используя setInterval.
        // Используя рекурсивный setTimeout.

        let printNumbers = (from, to) => {
            let timer = from;
            
            let timerId = setInterval(() => {
                console.log(timer);
                if(timer == to){
                    clearInterval(timerId);
                }
                timer++;
            }, 1000);
        }

        printNumbers(3,8);

        let printNumbers2 = (from, to) => {
            let timer = from;

            let timerId = setTimeout(function someFun() {
                console.log(timer);
                
                if(timer == to){
                    clearTimeout(timerId);
                } else{
                    setTimeout(someFun, 1000);
                }
                timer++
            }, 1000)
        }
        printNumbers2(3,5);