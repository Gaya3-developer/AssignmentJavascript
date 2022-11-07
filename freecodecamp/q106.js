/*Generate Random Fractions with JavaScript
Random numbers are useful for creating random behavior.

JavaScript has a Math.random() function that generates a random decimal number between 0 (inclusive) and 1 (exclusive). Thus Math.random() can return a 0 but never return a 1.

Note: Like Storing Values with the Assignment Operator, all function calls will be resolved before the return executes, so we can return the value of the Math.random() function.

Change randomFraction to return a random number instead of returning 0.
*/

//ans

function randomFraction() {
    // Only change code below this line.
    var x , a , b;
    x= 0;
    a = 0;
    b = 0;
    x += Math.random();
    a += Math.random();
    b = x/a;
    return b;
    
    // Only change code above this line.
    }