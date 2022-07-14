// first declare object

let student = {
    name : 'Arjun',
    'roll no' : 21,
    mark : 80,
    'mark in each subjects' :{
        physics : 60,
        chemistry :65,
        maths : 80,
        'computer science' : 100
    }
}

// calling objects

let name =student.name
let mark = student.mark
let mark_subjects = student['mark in each subjects']
 
 console.log(name);
 console.log(mark);
 console.log(mark_subjects);

 console.log('------------------------------------------------------------------\n');

 console.log(`the student name is ${student.name} and his mark is ${student.mark}
and mark obtained in chemistry subjects is ${mark_subjects.chemistry}`
 )

 // for in objects print all objects key and values

 for(let a in student){
    key = [a, student[a]]
    console.log(key);
 }
 
 // print all values of objects

 console.log('===================================================================');

 let txt = ''
 for(let b in student){
    txt+=student[b] + " "
    
 }
 console.log(txt);

 // adding properties

 student.nationality='Indian'

 for(b in student){
    console.log(b,student[b]);
 }