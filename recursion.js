// function called itsef is called recursion

n =1 
function msg(){
    console.log("hello world  ",n)
    n++
    if(n < 5){
        msg()
    } 
}

// factorial using recursion

function fact(num){
    if (num === 0)
        return 1 ;
    else
        return fact = num*fact(num-1);
}

let num = 5 ;
let result = fact(num)
console.log(result);