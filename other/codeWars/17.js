// function solequa(n) {
//     let x,y, arr = [];
//     for(let i = 0; i<= n; i++){
//         let temp = Math.sqrt(4*i*i + n);
//         if(Number.isInteger(temp)){
//           y = i;
//           x = temp;
//           if((x-2*y) *(x+2*y) == n )  arr.push([x,y]);  
//         }

//     }
//     console.log(n)
//     return arr.reverse();
// }
// function solequa(n) {
//     let x, y, arr = [];
//     for (let i = 0; i <= n; i++) {
//         let arg = Math.sqrt(i * i - n)/2;
//         if (Number.isInteger(arg)) {
//             x = i;
//             y = arg;
//             arr.push([x, y]);
//         }
//     }
//     return arr.reverse().filter((arr) => (arr[0]-2*arr[1])*(arr[0]+2*arr[1])  == n);
// }

// function solequa(n) {
//     let arr = [];
//     for(let i = 0; i<=n/2 +1; i++ ){
//         for(let k = 0; k< i/2; k++){
//             if((i-2*k) * (i+2*k) == n){
//                 arr.push([i,k]);
//             }
//         }
//     }
//     return arr;
// }

function solequa(n) {
    let x, y, arr = [];
    for (let i = Math.round(n**0.5); i <= n/2 + 1; i++ ) {
        let temp = (Math.round((i - n ** 0.5) * (i + n ** 0.5)) ** 0.5) / 2;
        if (Number.isInteger(temp)) {
            y = temp;
            x = i;
            arr.push([x, y]);
        }

    }
    console.log(n)
    return arr.reverse();
}
console.log(solequa(9000005))
