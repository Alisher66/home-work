// Хватит значит хватит!
// Алиса и Боб были в отпуске. Оба они сделали много снимков мест, где они побывали, и теперь они хотят показать Чарли всю свою коллекцию. Однако Чарли эти сеансы не нравятся, поскольку мотив обычно повторяется. Он не любит 40 раз видеть Эйфелеву башню. Он говорит им, что будет сидеть во время сеанса только в том случае, если они покажут один и тот же мотив не более N раз. К счастью, Алиса и Боб могут закодировать мотив как число. Можете ли вы помочь им удалить числа так, чтобы их список содержал каждое число только до N раз без изменения порядка?

// Задача
// Учитывая список lst и число N, создайте новый список, содержащий каждое число lst не более N раз без изменения порядка. Например, если N = 2, и ввод [1,2,3,1,2,1,2,3], вы берете [1,2,3,1,2], отбрасываете следующий [1,2 ], так как это приведет к тому, что 1 и 2 окажутся в результате 3 раза, а затем возьмем 3, что приведет к [1,2,3,1,2,3].


function deleteNth(arr, n) {
    let tempArr = arr.slice();
    let resArr = [];
    
    for (let i = 0; i < tempArr.length; i++) {
        let count = 1;
        for (let k = i + 1; k < tempArr.length; k++) {
            if(tempArr[i] == tempArr[k]){
                count++;
                if(count > n){
                    tempArr[k] = '';
                }
            }
        }
    }
    for(el of tempArr){
        if(el != ''){
            resArr.push(el); 
        }
    }
    return resArr;
}

// console.log(deleteNth([15, 15, 9, 37, 15, 37, 15, 15, 9, 37, 9, 37, 9, 9, 1, 37, 37, 15, 9, 15, 15, 37, 9, 9, 9, 37], 4)) 

console.log('A'.charCodeAt(), 'B'.charCodeAt(), 'a'.charCodeAt(), 'b'.charCodeAt());