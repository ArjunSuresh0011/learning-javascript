// set in js

//creating a empty set 

let values=new Set()

// Adding values

values.add(3);
values.add('Arjun');
values.add(5);
values.add(3);
values.add(4);
values.add(24);

//fetching values using for of loop

for (n of values){
    console.log(n);
}

console.log('\n+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++\n')
// now fetching values using forEach loop

values.forEach(n=>console.log(n))