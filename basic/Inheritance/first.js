/*Check output in console of the browser*/
class Fruits
{
    constructor(color)
    {
        console.log("parent cons");
        this.color = color;
    }
    print()
    {
        console.log(this);
    }
}
class Apple extends Fruits
{
    constructor(color,type)
    {
        super(color);
        this.type = type;
        console.log("child cons");
    }
    print()
    {
        super.print()
        console.log(this);
    }
}
let obj = new Apple("red","apple");
obj.print();
let ob1 =  new Fruits("red");
ob1.print();