/*Check output in console of the browser*/
function print()
{
    console.log("Hello");
}

print.call();
print.apply();

let animal = {
    name: 'dog',
    eat(a,b){
        console.log(this.name + " is eating"+" "+a +" "+b);
    }
};

let human = {
    name: 'Ravi'
};
animal.eat(5,'bones');
animal.eat.call(human,10,'chips');
animal.eat.apply(human,[10,'chips']);

let human_eat = animal.eat.bind(human);
human_eat(5,'apples');

function prnt(){
    console.log(this);
}
prnt();

let ob =
{
    prnt: function(){
        console.log(this);
    }
};
ob.prnt();

let ob1 = 
{
    name: 'fur',
    prnt: function(){
        console.log('a',this);
        var an_prnt = () =>
        {
            console.log('b',this);
        }
        an_prnt();
    }
};
ob1.prnt();