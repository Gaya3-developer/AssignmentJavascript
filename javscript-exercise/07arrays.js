var arr1 = ['Delhi', 'Kashmir', 'UP', 'Haryana'];

//pop and push

console.log(arr1);
console.log(`Length of array befor pop - ${arr1.length}`);
arr1.pop();
console.log(`Length of array after pop - ${arr1.length}`);
console.log(arr1);
arr1.push('Himachal');
console.log(arr1);



//searching index of an element

console.log(arr1.indexOf('Delhi'));


//shift and unshift

var arr2 = new Array(3,5,6,1,6);
console.log(arr2);
arr2.shift();
console.log(arr2);
arr2.unshift(5);
console.log(arr2);
console.log(arr1);

let arr3 = arr2; //copy by reference
arr3[1] = 0;
console.log(`Change in arr3 also changed arr2: ${arr2}`);


//looping through array

for(let i = 0; i<arr1.length; i++){
    console.log(arr1[i]);
}

for(let i of arr2){
    console.log(i);
}



//split()

const str = 'Mumbai,Kolkata,Chennai';
let cities = str.split(','); //array
console.log(cities);


//join

let citiesJoined = cities.join('-'); //string
console.log(citiesJoined);


//toString converts array into string

console.log(cities.toString());


//forEach

arr2.forEach(item => console.log(item));
