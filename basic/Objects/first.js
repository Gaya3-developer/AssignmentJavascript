/*Check output in console of the browser*/

// let animal = {
//     name: "cat",
//     color: "black",
//     eat(){
//         console.log(`${this.name} is eating...`);
//     }
// }
// animal.eat()
// animal["color"];


var obj = {
    name: "faizan",
    roll_no: 10,
    sing: function() {
        console.log(`${this.name} sings`);
    }
};
console.log(obj.name);
obj.sing();
console.log(obj["roll_no"]);

/*new keyword*/
let animal = new Object();
animal.name = "cat";
animal["color"] = "black";
animal.eat = function(){
    console.log(`${this.name} is eating...`);
};
animal.eat();