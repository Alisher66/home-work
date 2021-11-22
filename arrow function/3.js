var sequence = (start, step) => {
    var i =-1
    return () => {
        i++
        console.log(start + step * i);
    }
}

var generator = sequence(10, 3)
var generator2 = sequence(7, 1)

generator();
generator2();