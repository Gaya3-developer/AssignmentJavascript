const Person = function (fname, birthYear){
        this.fname = fname;
        this.birthYear = birthYear;
};


Person.prototype.calcAge = function() {
    console.log(2022 - this.birthYear);
};


const Student = function(fname, birthYear, course) {
/*    this.fname = fname;
    this.birthYear = birthYear; */
    Person.call(this, fname, birthYear);
    this.course = course;
};

console.log(Student.prototype.__proto__);

Student.prototype = Object.create(Person.prototype);

Student.prototype.introduce = function() {
    console.log(`Hi I'm ${this.fname} and I study ${this.course}.`);
}

const mike = new Student('Mike', 1998, 'Computer Science');

mike.introduce();

console.log(Student.prototype.__proto__);
console.log(Person.prototype.__proto__);