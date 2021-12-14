const functionArr = [
    () => new Promise((res) => setTimeout(() => res("JavaScript"), 200)),
    () => new Promise((res) => setTimeout(() => res("is the best"), 350)),
    () => new Promise((res) => setTimeout(() => res("programming language"), 450)),
];

const handler = (arr) => {
    return Promise.all( arr.map(el => el()) )
                    .then(val=> val.join(" "));
   
};

handler(functionArr).then((res) => {
    console.log(res); 
});
