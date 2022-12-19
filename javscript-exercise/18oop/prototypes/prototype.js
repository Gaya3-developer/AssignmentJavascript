'use strict'

const Person = function (fname, birthYear) {
    this.fname = fname;
    this.birthYear = birthYear;

    /*this.hii = function(){
        console.log('hii');
    };*/

};

const jonas = new Person('Jonas', 1994);
console.log(jonas.__proto__);



const matilda = new Person('Matilda', 1998);
const jack = new Person('Jack', 1989);

console.log(jack instanceof Person);


//prototypes

//const calcAge - error jonas.calcAge is not a function

Person.prototype.calcAge = function () { //solves creating copies of methods for each individual object
    console.log(2022 - this.birthYear);
};

Person.prototype.species = 'Homo Sapiens';
console.log(jonas.species);

jonas.calcAge();
matilda.calcAge();

console.log(jonas.__proto__);
console.log(jonas.__proto__ === Person.prototype); //prototype of jonas object is the prototype property of the constructor function(Person).
console.log(Person.prototype.isPrototypeOf(jonas));

console.log(Person.prototype.isPrototypeOf(Person)); //Person.prototype is not the prototype of Person but the prototype of the linked objects.

console.log(jonas.hasOwnProperty('species')); //checks for own property of the object
console.log(jonas.hasOwnProperty('fname'));


//Prototype Chain

console.log(jonas.__proto__ === Person.prototype);
console.log(Person.prototype.__proto__ === Object.prototype); //prototype of Person.prototype is Object.prototype (prototype property of the object)
console.log(Object.prototype.__proto__); //prototype of Object.prototype is null


//Prototype of Arrays

const arr = [3, 4, 2, 5, 6, 2, 3, 4, 3, 6];
console.log(arr.__proto__);
console.log(arr.__proto__ === Array.prototype);


//creating a method in the prototype property

Array.prototype.unique = function() {
    return [...new Set(this)];
}; //can be used for all the array objects

console.log(arr.unique());



//Static Methods - these are not in the .prototype property

Person.sayHi = function(){
    console.log('how are you');
    console.log(this);
};

//jonas.sayHi(); error because method is not inherited

Person.sayHi();