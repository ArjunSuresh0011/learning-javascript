//  functions in js

function add(a,b){
    return sum
}

let num1 = 10;
let num2 = 20;
let sum = num1+num2;

console.log(`sum of ${num1} and ${num2} is ${add(sum)}`);


// function Expression

let mul = function(a,b){
    return product
}

product = num1*num2

console.log(`product of ${num1} and ${num2} is ${mul(product)}`);

// defult value in function

console.log('===========================================================================\n');

function add(numb1,numb2,numb3=20){
    return numb1+numb2+numb3;
}

res = add(10, 10);

console.log(res)

console.log('======================================================================\n');

let fruit = {
    name1 : 'Apple',
    color : 'red',
    tast : 'sweet',

    orange :()=>console.log('helloworld')
}

console.log(fruit.orange());