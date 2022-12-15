var fullName = "Gayathri";
var courseName = "javascript"
var isLoggedIn =true
var loggedCount = 34;
var paymentMode;
console.log(paymentMode)
paymentMode = "credit card"
// console.log(loggedCount)
// console.log("loggedCount")

const uid = 123;
//uid = "welcome" //not allowed
var email ="abc@gmail.com"
var password = "123456"
var confrimPassword = "123456"
var courseCount = 0
var isLoggedInFromGoogle =false

console.log(uid)
console.log("full name is " + fullName)
console.log(email)
console.log(`
with unique id ${uid}
user is : ${fullName}
and the email is : ${email}
uses the password : ${password}
`)


'use strict';

//var

var nameUser = 'different abc';

console.log(`nameUser global - ${nameUser}`);

var count = 8;
for(var i = 0;i<10;i++){
    var count = 0; //redeclaration and reassignment
}
console.log(i);
console.log(count);

//var contact = 999;

//console.log(name);
//console.log(email);
//console.log(address);
testVar();
console.log(`nameUser called from outside after calling testVar() - ${nameUser}`);
testLet();

var contact = 999; //assignment not hoisted



//let

let num = 'redeclared num'; //variable of the same name in different scope
console.log(`num before calling letScopeTest() - ${num}`);
letScopeTest();

console.log(`num after calling letScopeTest() - ${num}`);

//console.log(j);




//const
if(true){
    const a = 0;
    console.log(a);
    //sub-block
    if(true)
    console.log(a);

}

let a = 2; //variable of the same name in different scope
console.log(a);

if(true){
    a=7;
}

console.log(`reassigning a - ${a}`);


//functions

function testVar(){
    if(true){
        var nameUser = 'abc'; //variable of the same name in different scope
        console.log(`This is contact variable from testVar() is undefined because assignments are not hoisted - ${contact}`); //returns undefined as it is called before assignment
    }
    console.log(`This log is nameUser from inside of testVar() - ${nameUser}`);
    var email = 'abc123';
    console.log(`Email from testVar() - ${email}`);
    nameUser = 'jkl';
    console.log(nameUser);
}


function testLet(){
    if(true){
        let address = 'xyz';
        console.log(`Address testLet() - ${address}`);
    }
    //console.log(address);

}


function letScopeTest(){
    //console.log(num);
    let num = 99;

    for(let j=0; j<5; j++){
        let k = 10;
        console.log(j);
        //sub-block
        if(true){
            console.log(k);
        }
      
    }
    //console.log(k);
    console.log(num);
}