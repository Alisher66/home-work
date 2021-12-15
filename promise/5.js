// 5) В каком порядке выведется консольлог и почему? 
// console.log('1');
// setTimeout(function() {
//   console.log('2')
// }, 0);
// Promise.resolve().then( () => console.log('3') );
// console.log('4');

Promise.resolve().then(() => {
  console.log('micro')
})
Promise.resolve().then(() => {
  console.log('micro')
})
setTimeout(() => {
  console.log('macro')
  Promise.resolve().then(() => {
    console.log('insert-micro')
  })
}, 0)
setTimeout(() => {
  console.log('macro')
}, 0)
console.log('start')