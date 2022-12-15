//creating and accessing objects

var student = {
    fname : 'rahul',
    lname : 'kumar',
    rollNo : 35,
    grade : 8
};

console.log(`Student's name is ${student.fname} ${student.lname} and his roll no. is ${student.rollNo}.`)


//methods in object
var user = {
    fname : 'gayathri',
    lname : 'bhat',
    age : 28,
    nationality : 'Indian',
    courseList : [],
    getCourse : function (){
        return `${this.fname} is enrolled in ${this.courseList.length} course(s).`;
    },
    addCourse : function (courseName){
        this.courseList.push(courseName);
    }
};

console.log(user.getCourse());
user.addCourse('javascript'); //added to the courseList
console.log(user.getCourse());



//array of objects

var employees = [
    {fullName : 'Mike Tyson', empcode : 345},
    {fullName : 'Muhammad Ali', empcode : 153},
    {fullName : 'Henry Cooper', empcode : 267}
];

console.log(employees[1]);
console.log(`Greatest of all time ${employees[1].fullName}.`);



//const arrays and objects

const constantArray = [3, 7, 9, 2];
console.log(constantArray);
//constantArray = [2, 9, 0, 1]; throws an error
constantArray[0] = 2;
constantArray[1] = 9;
constantArray[2] = 0;
constantArray[3] = 1;
console.log(constantArray); //const array is mutated


const person = {
    fullName : 'abc def',
    contact : 1233,
    "likes birds" : true,
};
console.log(person);

/*
person = {
    fullName : 'abc xyz',
    contact : 1233
};
throws an error */

person.fullName = 'abc xyz';

console.log(person); //object is mutated
let key = "likes birds";
console.log(person[key]);

delete person.fullName; //deleting a property
console.log(person);

//copy by reference

const obj1= {
    fname : 'John',
    age : 37,
    diplayName : function (){
        console.log(obj1.fname);
    }
};

let copyOfObj1 = obj1;
obj1.diplayName();


copyOfObj1.fname = 'Peter'; //changes obj1 also

console.log(obj1);
console.log(copyOfObj1);



if(obj1 === copyOfObj1){
    console.log('Both reference the same object.')
}


//cloning

const obj2 = {};
for(let key in obj1){
    obj2[key] = obj1[key];
}

console.log(obj2);

if(obj1 == obj2){
    console.log(`obj1 and obj2 reference the same object.`);
}
else{
    console.log(`Even though both have same properties and values, obj1 and obj2 do NOT reference the same object.`);
}

obj2.fname = 'Michael';
console.log(obj2); //cloned object can be changed independently
console.log(obj1);



//object.assign

let obj3 = {};
console.log(Object.assign(obj3, obj2));

obj3.fname = 'David';
obj3.age = 22;
console.log(obj3);
console.log(obj2);
console.log(typeof(obj1));


//nested cloning

const obj4 = {
    model : 'gs220',
    make : 'bmw',
    'tyre number' : [210, 310, 410],
    'engine details' : {
        'engine number' : 228882,
        'engine code' : 21,
    },
};

console.log(obj4);

let copyOfObj4 ={};
function copyObject(source, destination){
    for(let key in source){
/*
        if(typeof(source[key]) === 'object'){
            copyObject(source[key], destination[key]);
        }
*/
        destination[key] = source[key];
    }
}

copyObject(obj4, copyOfObj4);
console.log(copyOfObj4);