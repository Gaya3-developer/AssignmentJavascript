/*Check output in console of the browser*/
function parent()
{
    console.log("hello");
    function child(){
        console.log("Bye");
    }
    return child;
}
parent();


function f1(gf)
{
    return function(f)
    {
        return function(s)
        {
            console.log(`${gf}--${f}--${s}`);
        }
    }
}
f1('aaa')('bbb')('ccc');


let f2 = (gf) => (f) => (s) => console.log(`${gf}--${f}--${s}`);
f2('aaa')('bbb')('ccc');