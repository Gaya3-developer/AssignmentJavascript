/*I'm new to coding and now I want to get the sum of two arrays... Actually the sum of all their elements. I'll appreciate for your help.

P.S. Each array includes only integer numbers. Output is a number too.
*/
function arrayPlusArray(arr1, arr2) {
    let sum = 0;
 for(let i=0; i<arr1.length; i++)
 {
const arr1value = arr1[i];
const arr2value = arr2[i];
const addedValue = arr1value + arr2value;
sum = sum+ addedValue;
 }
 console.log(sum);
}
const array1 = [1,2,3];
const arr2 = [3,4,5];
arrayPlusArray(array1,arr2)