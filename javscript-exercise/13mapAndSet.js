//Map
//map does not convert keys into strings 

const myMap = new  Map();

console.log(myMap);

myMap.set('fname', 'rahul');
myMap.set('lname', 'kumar');
myMap.set('rollNo', 12);
myMap.set(3, 'no');

//values
for(value of myMap.values()){
    console.log(value);
}


//entries
for(entry of myMap){
    console.log(entry);
}

//keys
for(key of myMap.keys()){
    console.log(key);
}

//has
if(myMap.has('rollNo')){
    console.log('rollNo exists in myMap.');
}
else{
    console.log('rollNo does not exist in myMap.');
}

myMap.delete('rollNo'); //deletes

if(myMap.has('rollNo')){
    console.log('rollNo exists in myMap.');
}
else{
    console.log('rollNo deleted in myMap.');
}


//get

console.log(myMap.get('rollNo')); //will return undefined as rollNo has been deleted
console.log(myMap.get('fname'));


//Set

let mySet  = new Set();

mySet.add(3);
mySet.add('jack');
mySet.add(true);

console.log(mySet);