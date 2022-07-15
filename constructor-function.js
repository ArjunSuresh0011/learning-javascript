// constructor function and use of the this keyword


function Employee(name,salary,place){
    this.name = name
    this.salary = salary
    this.palce = place
    this.position = 'sales assistent'

    this.pos = function(){
        console.log(`${this.name} is from ${this.palce} have position of ${this.position}`)
    } 
}



obj1 = new Employee('Arjun',20000,'kollam')

console.log(obj1);
console.log(obj1.pos());