
// map filter reduce functions

let arr = [2,3,5,6,7]

let res = arr.filter(j=>j%2==0)
    .map(i => i*10)
   // .forEach(n=>console.log(n))
    .reduce((i,j) => i+j)

console.log(`the sum of array of even numbers is = ${res}`);