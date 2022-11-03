/*Create a function that checks if a number n is divisible by two numbers x AND y. All inputs are positive, non-zero numbers.*/

function isDivisible(n, x, y) {
    let flag=n % x === 0 && n % y === 0;
    console.log("n is divisible by 2 number "+x+" & "+y+":"+ flag) ;
  }

  isDivisible(10,5,12)
  isDivisible(10,5,2)