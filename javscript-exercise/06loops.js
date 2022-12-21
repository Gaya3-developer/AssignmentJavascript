//for loop

let arr1 = [23, 28, 38, 170];
let sumArr1 = 0;

for(let i=0; i<arr1.length; i++){  //looping through the array
    sumArr1 = sumArr1 + arr1[i];
}

console.log(`Sum of elements of arr1 is ${sumArr1}`);


const pow = (x, a) => {
    /*if(a===0){
        return 1;
    }*/
    let result = 1;
    for(let i=0; i<a; i++){
        result *= x;
    }
    return result;
}

console.log(pow(4, 10));



//do...while

let loginCount = 0;
do{
    loginCount++;
    console.log(`Welcome! Your remaining login is ${10-loginCount}.`);
} while (loginCount < 10);


//while

let arr2 = [2, 3, 5, 6, 7];
let indexArr2 = 0
while(indexArr2 < arr2.length){
    console.log(arr2[indexArr2]);
    indexArr2++;
}



//searching first occurence of a number in an array using break

let arr3 = [3, 6, 1, 4, 6, 4];
function searchFirstOccurenceOf(x){
    for(let i = 0; i<arr3.length; i++){
        if(arr3[i] === x){
            console.log(i);
            //break;
        }
        if(i == arr3.length - 1)
        console.log('not found.');
    }
}
console.log("First occurance of 6 is found in")
searchFirstOccurenceOf(6);


//printing even numbers in an array using continue

let arr4 = [23, 45, 22, 56, 76, 41, 36, 138];
function displayEven(arr){
    for(i=0; i<arr.length; i++){
        if(arr[i]%2 !== 0)
        continue;
        console.log(arr[i]); 
    }
}

console.log("even array")
displayEven(arr4)


//for...in iterates over index or property names

console.log('arr4 indexes using for...in:')
for(let i in arr4){
    console.log(i);
}


//for...of iterates over values

console.log('arr4 elements using for...of');
for(let i of arr4){
    console.log(i);
}
