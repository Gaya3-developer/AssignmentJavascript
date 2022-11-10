/*Check output in console of the browser*/

/* MAP FUNCTION */
let arr = [1,2,3,4];
let newarr = arr.map(num => num*2);
console.log(newarr);

/* FILTER FUNCTION */
let ar = [10,2,30,4];
let filar = ar.filter(num => num > 9);
console.log(filar);

/* REDUCE FUNCTION */
let a = [1,2,3,4];
let redarr = a.reduce((acc,num) =>
acc+num, 100);
console.log(redarr);