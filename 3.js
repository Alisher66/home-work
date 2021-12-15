function rand(start, end){
    return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
  }

  

  let arr = [];
  for (let i = 0; i < 10; i++) {
    let r = rand(new Date(2012,0,1), new Date);
    let y = r.getFullYear();
    let m = r.getMonth();
    let d = r.getUTCDay();
    arr.push({date : `${d}.${m}.${y}`})
  }
  console.log(arr);
  
function getData(data) {
    let arr2 = data.split(".");
    let dataTime = new Date(arr2[2], arr2[1], arr2[0]).getTime();
    return dataTime;
}
// console.log(arr);
let arr3 = arr.sort((a,b) =>{
    return getData(a.date) - getData(b.date);
})


console.log(arr3);