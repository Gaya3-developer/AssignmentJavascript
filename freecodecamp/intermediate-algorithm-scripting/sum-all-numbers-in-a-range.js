/*Sum All Numbers in a Range
We'll pass you an array of two numbers. Return the sum of those two numbers plus the sum of all the numbers between them. The lowest number will not always come first.

For example, sumAll([4,1]) should return 10 because sum of all the numbers between 1 and 4 (both inclusive) is 10.*/
function sumAll(arr) {
  var sum = 0;
  arr.sort(function(a,b) {return a-b;});
  for (var i = arr[0]; i <= arr[1]; i++) {
    sum += i;
  }
  return sum;
}



function sumAllArr(arr){
  var sum = 0;
  const min = Math.min(...arr)
  const max = Math.max(...arr)

  for(var i=min; i<=max; i++){
    sum+=i;
  }
  console.log(sum)
}
sumAllArr([1, 4]);