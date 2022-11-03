/*
Description:
Summation
Write a program that finds the summation of every number between 1 and num. The number will always be a positive integer greater than 0.

For example:

summation(2) -> 3
1 + 2

summation(8) -> 36
1 + 2 + 3 + 4 + 5 + 6 + 7 + 8
*/

var summationFormula = n => {
 var num = (n * (n + 1)) / 2;
 console.log(num);
}
summationFormula(2);
summationFormula(8);
var summationFor = function (num) {
    let result = 0;
    for (var i = 1; i <= num; i++) {
      result += i;
    }
    
    console.log(result);
  }


summationFor(2);
summationFor(8);

