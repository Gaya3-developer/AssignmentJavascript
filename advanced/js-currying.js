function curry(f) { // curry(f) does the currying transform
    return function(a) {
      return function(b) {
        return f(a, b);
      };
    };
  }
  
  // usage
  function sum(a, b) {
    return a + b;
  }
  
  let curriedSum = curry(sum);
  
  console.log( curriedSum(1)(2) ); // 3


  
  let multiply = (a, b, c) => {
    return a * b * c;
}

let multiply_curried = (a) => (b) => (c) => {

    return a * b * c;
}


let res = multiply(1, 2, 3);
console.log(res);

let res2 = multiply_curried(1)(2)(3);
console.log(res2);


//uncurry.js
let multiply_curried1 = (a) => (b) => (c) => {

    return a * b * c;
}


let multiply1 = (a, b, c) => multiply_curried1(a)(b)(c);


let res1 = multiply1(2,3,4);
console.log(res1);

let res21 = multiply_curried1(2)(3)(4);
console.log(res21);



const curry1 = fn => a => b => fn(a,b) 

//or using classical function notation

function curry2(fn) {
  return function(a) {
    return function(b) {
      return fn(a, b)
    }
  }
}


let double = x => x * 2
let triple = x => x * 3
let quadruple = x => x * 4

let pipe = (...funs) => input => funs.reduce(
    (total, fn) => fn(total),
    input
)

let fun1 = pipe(double)
let fun2 = pipe(double, triple)
let fun3 = pipe(triple, triple)
let fun4 = pipe(double, triple, quadruple)

console.log(fun1(2)) 
console.log(fun2(5)) 
console.log(fun3(7)) 
console.log(fun4(9)) 