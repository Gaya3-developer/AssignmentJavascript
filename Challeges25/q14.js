/*It's pretty straightforward. Your goal is to create a function that removes the first and last characters of a string. You're given one parameter, the original string. You don't have to worry with strings with less than two characters.
*/
function removeChar(str){
    //You got this!
   const length=str.length;
   console.log(str.substr(1,length-2))
   };
const str="hello";   
removeChar(str);