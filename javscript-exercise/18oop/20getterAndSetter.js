class Car {
    constructor(make, speed){
        this.make = make;
        this.speedInKmph = speed;
    }

    accelerate(){
        this.speedInKmph += 10;
        console.log(this.speedInKmph + 'kmph');
    };

    brake(){
        this.speedInKmph -= 5;
        console.log(this.speedInKmph + 'kmph');
    };

    set speedInMiles(x){
        this.speed = x*1.6;
    };

    get speedInMiles(){
        return this.speedInKmph / 1.6;
    }

};

const car3 = new Car('Ford', 120);



console.log(`Speed in miles ${car3.speedInMiles}`);

car3.speedInMiles = 50; //speed set to 50 mph

car3.accelerate();
car3.brake();