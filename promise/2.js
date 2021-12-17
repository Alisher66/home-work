const functionArr = [
    () => new Promise((res) => setTimeout(() => res("JavaScript"), 200)),
    () => new Promise((res) => setTimeout(() => res("is the best"), 350)),
    () => new Promise((res) => setTimeout(() => res("programming language"), 450)),
];



// 1.  ===========================

function handler(arr) {
    let str = "";
    return new Promise((res) => {
        arr.forEach((fn, index) => {
            fn().then(arg => {
                str += arg+ " ";
                if (index == arr.length - 1) {
                    res(str.trim());
                }
            })
        })
    })
}

handler(functionArr).then((aaa) => {
    console.log(aaa);
});


// 2.  ===========================

// function heandle(arr) {
//     let temp = [];
//     arr.forEach(el => {
//         el().then((str) => {
//             temp.push(str);
//         });
//     });
//     return new Promise((res) => {
//         let interval = setInterval(() =>{
//             if(temp.length == arr.length){
//                 clearInterval(interval);
//                 res(temp.join(" "));
//             }
//         },0);
//     });
// }
// heandle(functionArr).then((res) =>{
//     console.log(res);
// })





// 3.  ===========================

// const handler = (arr) => {
//     return Promise.all( arr.map(el => el()) )
//                     .then(val=> val.join(" "));

// };

// handler(functionArr).then((res) => {
//     console.log(res);
// });



// 4.  ===========================

// const heandle = (arr, finalStr = "") => {
//     return !arr.length ? finalStr.trim() : ([curr, ...rest] = arr)
//     && curr().then((r)=>heandle(rest, `${finalStr} ${r}`));
// }


// heandle(functionArr).then((res) => {
//     console.log(res);
// })








