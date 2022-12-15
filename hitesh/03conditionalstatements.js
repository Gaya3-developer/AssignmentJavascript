var temperature;

temperature = 33;

if(temperature>30) {
    console.log(`It's very hot outside.`);
}


var email = false;
var facebook = true;
var google = false;

if(email || facebook || google){
    console.log('Login Success');
}

//if else if
let num = Math.random()*10;
if(num > 3){
    console.log(`Number greater than 3.`);
}
else if(num==3){
    console.log(`Number is equal to 3.`);
}
else{
    console.log(`Number less than 3.`);
}

//ternary operator
console.log((num>3)? 'Number greater than 3 using ?.' : (num ==0)? 'Number equal to zero using ?' : 'Number less than 3 using ?.');