//Multidimensional arrays

let multiArr1 = [
    ['Name', 'Age', 'Gender'],
    ['Thomas', 35, 'M'],
    ['Ada', 28, 'F'],
    ['Polly', 50, 'F'],
    ['Arthur', 38, 'M',]
];

console.log(multiArr1[3][0]); //accessing single element


//accessing inner arrays

for(let i = 0; i<multiArr1.length; i++){
    console.log(multiArr1[i]);
}
//OR
for(let i of multiArr1){
    console.log(i);
}



//accessig all elements

for(let i = 0; i<multiArr1.length; i++){
    for(let j = 0; j<multiArr1[i].length; j++){
        console.log(multiArr1[i][j]);
    }
    console.log('\n');
}
//OR
for(let i in multiArr1){
    for(j of multiArr1[i]){
        console.log(j);
    }
    console.log('\n');
}



//array methods


//fill

let arr1 = [3, 6, 2, 7, 1, 9];
console.log(arr1.fill('x', 2, 5));
console.log(arr1); //changes the original array


//filter

let arr2 = [2, 7, 9, 13, 10, 8, 26, 56, 44];
console.log(arr2.filter((num) => num%2==0)); //returns a filtered array of even numbers
console.log(arr2); // does not change the original array


//sort

console.log(arr2.sort((a,b) => a-b)); //sorting an integer array

let strArr = ['india', 'bravo', 'sierra', 'alpha', 'foxtrot'];
console.log(strArr.sort()); //sorting a string array
console.log(arr2); //mutates the original array


//reverse

let arr3 = [3, 9, 1, 4, 7, 12];
console.log(arr3.reverse());


//concat

let arr4 = ['tango', 'zulu'];
let arr5 = ['echo', 'quebec', 'delta'];
let arr6 = ['charlie'];
console.log(arr4.concat(arr5, arr6)); //concatenates the three arrays


//slice

let studentNames = ['rahul', 'ajay', 'vijay', 'deenanath', 'chauhan', 'bablu', 'sagar', 'vijay', 'bablu'];
let slicedNames = studentNames.slice(2, 5);
let slicedWithNegativeIndex = studentNames.slice(-4, -2);
console.log(slicedWithNegativeIndex);
console.log(slicedNames);
console.log(studentNames); //does not mutate the original array

//splice

console.log(studentNames.splice(2, 3, "dead")); //changes the original array


//isArray

let str = 'hi';
if(Array.isArray(str)){
    console.log(`str is an array.`);
}
else{
    console.log(`str is not an array.`);
}

//indexOf
console.log(studentNames);
console.log(studentNames.indexOf('bablu'));

//includes - case sensitive and returns true or false

if(studentNames.includes('vijay')){
    console.log('vijay is in studentNames');
}