// // setTimeout(() => {
// //     console.log('Requesting data from server....')
// //     setTimeout(() => {
// //         console.log('data recieved...');

// //         setTimeout(() => {
// //             const data = { name: 'Vasya' }
// //             data.job='developer'
// //             console.log('change data...')
// //             setTimeout(() => {
// //                 console.log('data', data)
// //             }, 5000)
// //         }, 4000)
// //     }, 3000)

// // }, 2000)


// // const p=new Promise((resolve, reject)=>{
// //     setTimeout(()=>{
// //         console.log('Requesting data from server....')
// //     }, 3000);
// //     resolve();
// // });
// // p.then(()=>{
// //     return new Promise((resolve, reject)=>{
// //         setTimeout(()=>{
// //             console.log('Data recieved....');
// //             const person={
// //                 name:'Vasya',
// //                 age:25,
// //                 skills:'html css js'
// //             }
// //             resolve(person)
// //         }, 4000);
// //     })
// // }).then(data=>{
// //     return new Promise((resolve, reject)=>{
// //         setTimeout(()=>{
// //             console.log('Data changed');
// //             data.job='developer';
// //         }, 5000)
// //         resolve(data)
// //     })
// // }).then(changedata=>{
// //     setTimeout(()=>{
// //         console.log('data! = ', changedata)
// //     }, 6000)
// // })

// const b = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         console.log('start api');
//     }, 1000)
//     reject()
// });

// b.then(() => {
//     return new Promise((resolve, reject) => {

//         setTimeout(() => {
//             console.log('working api ...');
//             let person = {
//                 name: 'Vasya',
//                 age: 25,
//                 skills: 'html css js',
//             };

//             reject();  
//         }, 2000);

//     })
// }).then((data) => {
//     return new Promise((resolve, reject) => {
//         setTimeout(()=> {
//             console.log('changing data');
//             data.job='developer';
//         }, 3000);
//         resolve(data);
//     })
// }).then((changedData) =>{
//     setTimeout(()=>{
//         console.log(changedData)
//     }, 4000);
// }).catch(() =>{
//     setTimeout(()=> {
//         console.log('error');
//     }, 500)
// })
// function delay(ms) {
//     return new Promise((resolve, reject) =>{
//         setTimeout(resolve, ms);  
//     })
// }

// delay(3000).then(() => console.log('выполнилось через 3 секунды'));
// let a = 1;
// console.log('first a ',a);

// // setTimeout(() =>{
// //     a = 2;
// //     console.log('second a ', a);
// // }, 2000);

// console.log('thirt a ', a);

let a = +prompt('number');

let promise = new Promise((resolve, reject) => {
  a++;
  setTimeout(() => {
    resolve(a);
  }, 1000);
});

promise.then((arg) => {
  console.log('resolve', arg);
  return arg;
}).then((data) => {
  setTimeout(() =>{
    console.log('then 2 ', data * 2);
    return data;
  }, 1000);
  
}).catch((err) => {
  console.log(err);
});


