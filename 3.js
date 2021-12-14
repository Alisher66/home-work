const inputStr = "idontknowhowitworks";
const needAfterSpace = [0,4,8,11,13];
const needRemove = [1,2,3,4];

const result = inputStr
                .split("")
                .map((el,index) =>{
                    if(needRemove.includes(index)) return;
                    if(needAfterSpace.includes(index)) return `${el} `;
                    return el;
                })
                .join("");
console.log(result);