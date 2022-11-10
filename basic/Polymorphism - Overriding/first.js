/*Check output in console of the browser*/
class Parent
{
    live()
    {
        console.log("Iran");
    }
}
class Child extends Parent{
    live()
    {
        console.log("India");
    }
}
var ob = new Child();
ob.live();