//question 1
var a = 12;
(function() {
 console.log(a);
})();
//ans 12

//questioon 2
var a = 5;
(function() {
 var a = 12;
 console.log(a);
})();
//ans 12

//question 3
var a = 10;
var x = (function() {
 var a = 12;
 return (function() {
   console.log(a);
 });
})();
x();

//ans 12

//question 4
var a = 10;
var x = (function() {
 var y = function() {
   var a = 12;
 };
 return function() {
   console.log(a);
 }
})();
x();

//ans 10

//question 5
var a = 10;
var x = (function() {
 (function() {
   a = 12; // <<< look carefully at this line.
 })();
 return (function() {
   console.log(a);
 });
})();
x();

//ans 10

//question 6

var a = 10;
(function() {
 var a = 15;
 window.x = function() {
   console.log(a);
 }
})();
x();

//error




