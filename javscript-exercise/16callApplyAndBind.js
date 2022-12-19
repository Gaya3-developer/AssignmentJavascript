//call method

function eligibleOrNot(){
    if(this.age>=18){
        console.log(`Hi ${this.fullName}, you are ready to vote.`);
    }
    else{
        console.log(`Hi ${this.fullName}, you can start voting after ${18 - this.age} years.`)
    }
}

function User (fullName, age) {
    this.fullName = fullName;
    this.age = age;
}

const user1 = new User('Dev Babu', 23);
const user2 = new User('Ram Kumar', 16);

eligibleOrNot.call(user1);
eligibleOrNot.call(user2);



//using method of an object in different context using call()

const airIndia = {
    airline : 'Air India',
    code : 'AI',
    bookings : [],
    book(flightNum, name){
        console.log(`Booking has been made for ${name} in flight no. ${this.code+flightNum}.`);
        this.bookings.push({name : name, flightNum : this.code+flightNum});
    }

};

airIndia.book(343, 'Jose');
console.log(airIndia.bookings);


const vistara = { //property names should be same.
    airline : 'Vistara',
    code : 'UK',
    bookings : [],
};

airIndia.book.call(vistara, 241, 'Gayathri'); //using method of the airIndia object in context of vistara object.
console.log(vistara.bookings);



//apply method

airIndia.book.apply(vistara, [142, 'Karan']); //apply takes array as second parameter




//bind method

const bookVistara = airIndia.book.bind(vistara); //binds the context to vistara object

bookVistara(147, 'Alam');


//bind can also set other parameters

const bookVistara121 = airIndia.book.bind(vistara, 121); //sets context/this to vistara object and flightNum to 121
bookVistara121('Ritesh'); //books a ticket in flightNum 121