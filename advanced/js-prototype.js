const persn ={
    alive : true
}
const musician ={
    plays : true
}

Object.setPrototypeOf(musician,persn)
console.log(Object.getPrototypeOf(musician));
console.log(musician.__proto__)
console.log(Object.getPrototypeOf(musician) === musician.__proto__)
console.log(musician.plays)
console.log(musician.alive)

const guitarist = {
    strings:6,
    __proto__:musician
}
console.log(guitarist.strings)
console.log(guitarist.plays)
console.log(guitarist.alive)



const car={
    doors:2,
    seats:"vinyl",
    get seatMaterial(){
return this.seats;
    },
    set seatMaterial(material){
        this.seats=material;
    }
}
const laxuryCar = {};
Object.setPrototypeOf(laxuryCar,car);
laxuryCar.seatMaterial='leather';
console.log(laxuryCar);
console.log(laxuryCar.doors);
console.log(car);
console.log(laxuryCar.valueOf());
console.log(Object.keys(laxuryCar));
Object.keys(laxuryCar).forEach(key =>{
    console.log(key);
})
for(let key in laxuryCar){
    console.log(key);
}


//object constructor


function Animal(species){
    this.species = species;
    this.eats=true;
}
Animal.prototype.walks = function() {
    return `A ${this.species} is walking`;
};

const Bear = new Animal("bear");
console.log(Bear.species);
console.log(Bear.walks());

console.log(Bear.__proto__);
console.log(Bear.__proto__ === Animal.prototype);

console.log(Animal.prototype);
console.log(Bear)


class Car {
    constructor(brand) {
      this.carname = brand;
    }
    present() {
      return 'I have a ' + this.carname;
    }
  }
  
  class Model extends Car {
    constructor(brand, mod) {
      super(brand);
      this.model = mod;
    }
    show() {
      return this.present() + ', it is a ' + this.model;
    }
  }
  
  let myCar = new Model("Ford", "Mustang");

  console.log(myCar.show());