var myFunc = function() { return "GeeksforGeeks"; };
  
// Creating Function Expression Using Logical Not.
!function() { return "GeeksforGeeks"; };
  
// Creating Function Expression Using Parentheses.
(function() { return "GeeksforGeeks"; });


   // Regular Function.
   function Greet() {
    console.log("Welcome to GFG!");
};
// Execution of Regular Function.
Greet();

// IIFE creation and execution.
(function() {
    console.log("Welcome to GFG!");
})();


function myFunc()
{
    console.log("Welcome to");
    // This will be executed after executing the previous log.
    (function() { console.log("GeeksForGeeks!"); })();
    console.log("Hi There!");
}
  
// Calling the Function.
myFunc();


  // Declaring the parameter required.
  (function(dt) {
    console.log(dt.toLocaleTimeString());
    // Passing the Parameter.
})(new Date());