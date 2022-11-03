/*Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.*/
function even_or_odd(number) {
    var res= number % 2 ? "Odd" : "Even";
    console.log(number + " is " + res);
  }
  even_or_odd(5)
  even_or_odd(2)