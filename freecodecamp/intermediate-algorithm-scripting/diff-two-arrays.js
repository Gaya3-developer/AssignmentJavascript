/*
Diff Two Arrays
Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both. In other words, return the symmetric difference of the two arrays.

Note: You can return the array with its elements in any order.
*/


function diffArray(arr1, arr2) {
  var newArr = [];
  var h1 = Object.create(null);
  arr1.forEach(function(e) {
    h1[e] = e;
  });

  var h2 = Object.create(null);
  arr2.forEach(function(e) {
    h2[e] = e;
  });

  Object.keys(h1).forEach(function(e) {
     if (!(e in h2)) newArr.push(h1[e]);
  });
  Object.keys(h2).forEach(function(e) {
     if (!(e in h1)) newArr.push(h2[e]);
  });
  return newArr;
}
diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);