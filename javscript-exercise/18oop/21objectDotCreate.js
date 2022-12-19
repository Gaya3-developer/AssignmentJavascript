const PersonProto = {
    calcAge() {
        console.log(2022 - this.birthYear);
    },
};

const mathew = Object.create(PersonProto);

mathew.fname = 'Mathew';
mathew.birthYear = 1999;

mathew.calcAge();

//console.log(mathew.__proto__ === PersonProto.__proto__); false
console.log(mathew.__proto__ === PersonProto);