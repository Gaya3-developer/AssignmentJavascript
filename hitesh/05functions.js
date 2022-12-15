let globalNum = 4; //global variable

function add(){
    let num1 = 10;

    console.log(increment());

    console.log(functionWithLocalVariable());
    console.log(functionWithoutLocalVariable());

    //inner function accessing outer variable
    function increment() {
        checkAccess();
        return num1++ + globalNum++; // can access and modify the global variable and the outer variable

        
        function checkAccess(){
            console.log(`This is num1 logged from grandchild function - ${num1}`);
        }
    }
    return globalNum + num1; // can access the global variable

    //inner function having local variable of the same name
    function functionWithLocalVariable(){
        let num1 = 99;
        let globalNum = 100;
        return num1 + globalNum;
    }

    //inner function without local variable of the same name
    function functionWithoutLocalVariable(){

        return num1 + globalNum;
    }

}

console.log(add());


//function with default value

function displayMessage(name, country = 'unknown'){
    console.log(`Person's name is ${name} and country is ${country}.`);

}

displayMessage('gayathri'); //calling the function without one argument sets it to default value.


//function with another function as default value

function displayName(fullName=disName())
{
    /*function disName(){
        return 'unknown';  // this will not work. it should be defined outside the function.
    }*/
    console.log(fullName);
   
}

function disName(){
    return 'unknown';
}

displayName();


/*Parameters are essentially passed to functions by value
so if the code within the body of a function assigns a
completely new value to a parameter that was passed to the function, 
the change is not reflected globally or in the code which called that function.*/

function checkParameterChange(num2){
    num2++;
    console.log(`Incremented num2 inside checkParameterChange() ${num2}`);
}

let num2 = 555;
console.log(`num2 = ${num2} before calling checkParameterChange().`);
checkParameterChange(num2);
console.log(`num2 = ${num2} after calling checkParameterChange().`);


//but changes made to the arrays and objects passed as parameters are visible outside the function

//array
let arr1 = [3, 5, 6];
console.log(`Before calling changeArray() - ${arr1}`);
changeArray(arr1);
console.log(`After calling changeArray() - ${arr1}`); //change reflected

function changeArray(arr){
    arr[1] = 9;
    console.log(arr);
}

//object
var obj1 = {
    model: 'honda',
    regNum: 'DL0299'
};

console.log(`Before function call model - ${obj1.model}`);
changeObject(obj1);
console.log(`After function call model - ${obj1.model}`); //change is reflected


function changeObject(obj){
    obj.model = 'maruti';
}


//function expression

//let squaredNum = squareOfNumber(7); Error: cannot access before initialization


const squareOfNumber = function square(x){
    return x*x;
}
let squaredNum = squareOfNumber(7);
console.log(squaredNum);



//conditional function declarations are hoisted irrespective of the condition

let num3 = Math.random()*10;
if(num3 > 5){
    function double(num3){
    
        console.log(`Double of ${num3} is ${num3*2}`);
    }
    double(num3);
}
else{
    console.log("num3 smaller than or equal to 5");
}



//arrow function

const calcAge = (currentYear, birthYear) => currentYear - birthYear; //single-line arrow function does not require return

let age = calcAge(2022, 1994);
console.log(`Age = ${age}`);


const sumOfSquares = (a, b) => {
    let squareSum = a*a + b*b;
    return squareSum;
}

console.log(sumOfSquares(4,6));