function stray(numbers) {
    let arr;
    for(let i = 0; i<numbers.length-1; i++){
        for(let k = i+1; k<numbers.length; k++){
            if(numbers[i] == numbers[k]){
                arr = numbers[i]
                break
            }
        }
    }
    return numbers.filter((x) => x!= arr)[0];
    
}

console.log(stray([3,1,1,1,1]))