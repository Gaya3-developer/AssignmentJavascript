/*Check output in console of the browser*/

class Box
{
    constructor(length)
    {
        this.length = length;
    }
    display()
    {
        console.log(this);
    }
}
// let obj = new Box(20);
let obj = new Box();
obj.display();

let father = {
    name:'john'
};
let son1 = {};
let son = Object.create(father);
console.log(father.isPrototypeOf(son));
console.log(father.isPrototypeOf(son1));