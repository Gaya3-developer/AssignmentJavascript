let x = 1;

const parentFunction = () => {

    let myVal = 3;
    console.log(x);
    console.log(myVal);

    const childFunction = () => {
        return (`This is sum of x and myVal from childFunction even after the outer function has closed-${myVal+x}`);
    }

    return childFunction;
};

console.log(parentFunction);
const test = parentFunction(); //childFunction is returned to test.
console.log(test); //function
console.log(test()); //childFunction is invoked with access to the outer lexical scope (x and myVal).




//closure with IIFE

const privateCounter = (() => {
    let count = 0;
    console.log(`Initial value of count ${count}`);
    return function child() { count++; console.log(count); }
}) ();


privateCounter();
console.log(privateCounter);
privateCounter();
privateCounter();


const parentFunc = function() {
    let a = 20;
    return y = function() {
        console.log(`Accessing a from parent scope - ${a}`);
    }
};

const x1 = parentFunc();
y();
x1();


const myFuncGrand = function() {
    let a = 100;
    console.log(`We are inside grand func. ${a}.`);

    const myFuncParent = function() {
        let b = 200;
        console.log(`We are inside parent func. ${b}.`);

        const child = function (){
            console.log(`${a} from grand and ${b} from parent.`);
        }
        return child;
    }

    let z = myFuncParent();
    return z;
};

const k = myFuncGrand();

k();

console.dir(k);
/*
(function(){
    const header = document.querySelector('h1');
    header.style.color = 'red';
    document.body.addEventListener('click', function(){
        header.style.color = 'blue';
    });
})();8
*/