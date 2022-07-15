// the for of loop is used to fetch values of an array one by one

let arr = [] ;

for(i=1;i<=300;i++){
    arr.push(i)
}
console.log(arr);


for(let n of arr){
    console.log(n)
}