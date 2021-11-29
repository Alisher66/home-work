// function whoIsWinner(arr) {
//     let str = "";
//     for(let i = 0; i< arr.length-1; i++){
//         let count = 1; 
//         for(let k = i+1; k<arr.length; k++){
//             if(arr[i] == arr[k]) 
//             count++;
//         }
//         if(count == 4) {
//             str = arr[i];
//             break;
//         }
//     }
//     if(str == "") return "Draw";
//     else if (str.includes('Yellow')) return "Yellow";
//     else if (str.includes('Red')) return "Red";
//     return str;
// }



function getRandomArr(n, m) {
    var res = [];

    for (var i = 0; i < n; i++) {
        var tempArr = [];
        for (var k = 0; k < m; k++) {
            tempArr.push(0);
        }
        res.push(tempArr);
    }
    return res;
}

function whoIsWinner(arr) {
    let box = getRandomArr(6, 7);
    let countA = 0, countB = 0, countC = 0, countD = 0, countE = 0, countF = 0, countG = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i][0] == "A") {
            box[countA][0] = arr[i].slice(2);
            countA++;
        }
        else if (arr[i][0] == "B") {
            box[countB][1] = arr[i].slice(2);
            countB++;
        }
        else if (arr[i][0] == "C") {
            box[countC][2] = arr[i].slice(2);
            countC++;
        }
        else if (arr[i][0] == "D") {
            box[countD][3] = arr[i].slice(2);
            countD++;
        }
        else if (arr[i][0] == "E") {
            box[countE][4] = arr[i].slice(2);
            countE++;
        }
        else if (arr[i][0] == "F") {
            box[countF][5] = arr[i].slice(2);
            countF++;
        }
        else if (arr[i][0] == "G") {
            box[countG][6] = arr[i].slice(2);
            countG++;
        }
    }
    let str = '';
    for (let i = 0; i < box.length; i++) {
        let red = 0, yallow = 0;
        for (let k = 0; k < box[i].length; k++) {
            if (box[i][k] == 'Red') red++;
            else if (box[i][k] == 'Yellow') yallow++;
        }
        if (red >= 4) {
            str = "Red";
            break;
        } else if (yallow >= 4) {
            str = "Yellow";
            break;
        } else {
            str = "Draw";
            break;
        }
    }
    console.log(box);
    return str;

}
console.log(whoIsWinner(
    ["C_Yellow",
        "E_Red",
        "G_Yellow",
        "B_Red",
        "D_Yellow",
        "B_Red",
        "B_Yellow",
        "G_Red",
        "C_Yellow",
        "C_Red",
        "D_Yellow",
        "F_Red",
        "E_Yellow",
        "A_Red",
        "A_Yellow",
        "G_Red",
        "A_Yellow",
        "F_Red",
        "F_Yellow",
        "D_Red",
        "B_Yellow",
        "E_Red",
        "D_Yellow",
        "A_Red",
        "G_Yellow",
        "D_Red",
        "D_Yellow",
        "C_Red"]
));
let ss = [
    ['Yellow', 'Red',       'Red',      'Yellow',   'Red',      'Yellow',   'Red'],
    ['Red',     'Yellow',   'Yellow',   'Yellow',   'Yellow',   'Yellow',   'Yellow'],
    ['Red',     'Red',      'Yellow',   'Red',      0,          0,          'Red'],
    [0,         'Yellow',   'Red',      'Red',      0,          0,          'Yellow'],
    [0,         0,          'Red',      0,          0,          0,          'Red'],
    [0,         0,          'Yellow',   0,          0,          0,          0],
]