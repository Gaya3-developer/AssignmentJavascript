/*Write a function that accepts an integer n and a string s as parameters, and returns a string of s repeated exactly n times.
6, "I"     -> "IIIIII"
5, "Hello" -> "HelloHelloHelloHelloHello"*/

function repeatStr (n, s) {
    let str = '';
 for(let i=0; i<n; i++){
    str += s;
 }
 console.log(str);
  }
  repeatStr(6,'I');
  repeatStr(5,'Hello');

  //repeat function

  function repeatStrMethod (n, s) {
  console.log(s.repeat(n));
  }
  repeatStrMethod(6,'I');
  repeatStrMethod(5,'Hello');