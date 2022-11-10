/*Check output in console of the browser*/
print();

function print()
{
    console.log("Happy");
    return 5;
}

console.log(print(5,7));

var a = 0;
console.log(a);
print();

function print()
{
    var b = 0;
    a = 10;
}
console.log(a);
// console.log(b);

var prnt = function()
{
    console.log("awesome");
}

prnt();

/*IIFE --> Immediately Invoked Function Expression */

(function(a,b)
    {
        console.log(a+b);
    }
)(4,4);