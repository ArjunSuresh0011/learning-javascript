// we can fetch values of an array using a array function called forEach


// add some values to array

let arr = []

for(i=1;i<=10;i+=1){
    arr.push(i);
}

// now we want to fetch each values one by one the help of forEach function

arr.forEach((variable)=>{
    console.log(variable)
})

console.log('================================================================================\n');

arr.forEach((variable,index,array_name) => {
  console.log(`value ${variable}, in the index of ${index}   and the array is ${array_name}`);
});

