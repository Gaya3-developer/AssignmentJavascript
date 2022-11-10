/*Check output in console of the browser*/
var parent = {
    name: "Father",
    sing(){
        console.log("singing");
    },
    eat: function(){
        console.log("eating");
    },
    drink: ()=>{
        console.log("drinking");
    }
};

var child = {
    name: "Son",
    eat()
    {
        console.log("eating");
    }
};

child.__proto__ = parent;

for(let p in child)
{
    console.log(p + " "+child.hasOwnProperty(p));
}