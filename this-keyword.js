let employee = {
    emp_name : 'Arjun',
    emp_salary : 20000,
    emp_place : 'kollam',

    greet : function (){
        console.log(`${this.emp_name} is a good boy`);     
    }
} 

sal = employee.emp_salary
place = employee["emp_place"]

console.log(`salry of ${employee.emp_name} is ${sal}`);
console.log(`place of ${employee.emp_name} is ${place}`);
console.log(employee.greet());