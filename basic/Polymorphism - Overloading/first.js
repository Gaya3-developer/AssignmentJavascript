/*Check output in console of the browser*/
/*Check output in console of the browser*/
class Fruits
{
    constructor(color)
    {
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
    }
    print()
    {
        console.log("hello");
    }
    print(s1,s2)
    {
        console.log(s1+s2);
    }
}

let ob1 =  new Fruits("red");
ob1.print();
ob1.print(10);
ob1.print(12,12);