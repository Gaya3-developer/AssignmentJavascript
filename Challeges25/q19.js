/*Simple, remove the spaces from the string, then return the resultant string.*/

function noSpace(str){
 const splitArray=   str.split(" ");
 let newArray =[];
 for(let i=0; i<splitArray.length; i++){
const trimmedString = splitArray[i].trim();
newArray.push(trimmedString);
 }
 const finalString = newArray.join("");
console.log(finalString);
}
noSpace("Hello world");