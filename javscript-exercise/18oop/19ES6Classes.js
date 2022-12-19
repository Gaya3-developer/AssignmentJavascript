//class declaration

class PersonCl {
    constructor(fname, birthYear){
        this.fname = fname;
        this.birthYear = birthYear;
    }

    //everything outside constructor will be added to .prototype property
    calcAge(){
        console.log(2022 - this.birthYear);
    }

    //Static Method - not inherited to the objects

    static sayHi = function(){
        console.log('how are you');
        console.log(this);
    };
}

const jessica = new PersonCl('Jessica', 1996);

jessica.calcAge();

PersonCl.sayHi(); //static method call

//we can also add methods and properties to the prototype from outside

PersonCl.prototype.greet = function (){
    console.log(`hi ${this.fname}`);
};

PersonCl.prototype.job = 'developer';

console.log(jessica.job);

jessica.greet();