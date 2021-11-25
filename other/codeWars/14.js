// Напишите функцию, которая при задании URL-адреса в виде строки анализирует только имя домена и возвращает его в виде строки. Например:

// domainName("http://github.com/carbonfive/raygun") == "github" 
// domainName("http://www.zombie-bites.com") == "zombie-bites"
// domainName("https://www.cnet.com") == "cnet"


function domainName(url) {
    let arr, res;
    if(url.includes('//')){
        arr = url.split('//');
        let temp1 = arr[1].split('.')
        if(temp1[0] == 'www'){
            res = temp1[1];
        } else res = temp1[0];
        
    }else if(url.includes('.')) {
        arr = url.split('.');
        if(arr.length == 2){
            if(arr[0].length ==3 && arr[0].includes('www')){
                res = arr[1];
            } else res = arr[0];
        } else res = arr[1];
        
    }else {
        res = 'www';
    }
    return res

}

console.log(domainName('http://google.com'));