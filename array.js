// creating an empty array

let data  = [] ;  //or

let values = new Array() ;

// now add data to array and print array

data[0] = 10 ;
data[1] = 20 ;
data[2] = 30 ;

console.log(data)


// now fetching data from an array

console.log(`third data is ${data[2]}`);
console.log(`+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++\n`);

// now we are creating mixed type arrays

let details = [
    'Arjun',
    20000,
    {tech : 'js'},
    function(){console.log("hello world")}
]

console.log(`name :   ${details[0]}`);
console.log(`salary :   ${details[1]}`);
console.log(`technology :   ${details[2].tech}`);
console.log(`message :   ${details[3]()}`);
