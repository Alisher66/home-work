const functionArr = [
    () => new Promise((res) => setTimeout(() => res("JavaScript"), 200)),
    () => new Promise((res) => setTimeout(() => res("is the best"), 350)),
    () => new Promise((res) => setTimeout(() => res("programming language"), 450)),
];


async function handler(arr) { 
    let temp = [];
    for(let fn of arr){
        temp.push(await fn());
    }
    console.log(temp.join(" "));
}

handler(functionArr)