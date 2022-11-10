/*Check output in console of the browser*/
let mul = function(x,y)
{
    console.log(x*y);
}
let mulBy10 = mul.bind(this,10);
mulBy10(7);
mulBy10(8);
mulBy10(9);


let mul1 = (x) => (y) => console.log(x*y);
let mul10 = mul1(10);
mul10(8);
mul10(9);
mul10(10);