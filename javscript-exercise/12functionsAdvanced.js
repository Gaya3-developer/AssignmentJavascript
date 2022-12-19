//rest and spread

let arr1 = [3, 5, 2, 6, 1, 0, 7];

console.log(arr1);
console.log(...arr1);

let arr2 = [5, 0, arr1];

console.log(...arr2);

let arr3 = [5, 0, ...arr1];

console.log(...arr3);

// rest arguments

function sumArr(...args){
    let sum = 0;
    for(let i of args){
        sum += i;
    }
    return sum;
}

console.log(sumArr(2, 4, 1, 4));


//spread as parameter

console.log(sumArr(...arr1));