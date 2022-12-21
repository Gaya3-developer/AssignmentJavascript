//constructor functions

function CreateUser (userName){
    this.userName = userName;
    this.isAdmin = false;
}

let user1 = new CreateUser('smith');

console.log(user1);


//new function

let user2 = new function(){ //this constructor function cannot be called again as it is not stored anywhere
    this.userName = 'jack';
    this.isAdmin = false;
    this.age = 29;
    this.displayAge = function (){
        console.log(this.age);
    }
}

user2.displayAge();



//optional chaining

console.log(user2.isAdmin.value); //returns undefined since isAdmin is available

//console.log(user2.isAdmin.value.integer); //returns an error because value does not exist

//console.log(user2.isAdmin.value?.integer); //evaluation stops immediately since value does not exist and undefined is returned.




//symbols

let id = Symbol("userId");
console.log(typeof(id));

let user3 = {
    userName : 'sierra',
    [id] : 342,
};

console.log(user3.id); //returns undefined

console.log(user3[id]);

console.log(typeof(user3[id]));