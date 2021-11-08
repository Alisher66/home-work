// 7) Какой результат будет выведен при очередном вызове generation и generation2? Почему?
 

function numberGenerator() {
  var currentNum = 2;
  return function multNumber() {      
    return currentNum *= currentNum;
  };
}

var generation = numberGenerator();   
var generation2 = numberGenerator();  

console.log( generation() );             
console.log( generation() );             

console.log( generation2() );            
console.log( generation2() ); 

console.log( generation() );   
console.log( generation2() ); 