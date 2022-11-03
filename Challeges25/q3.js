/*Complete the solution so that it reverses the string passed into it.

'world'  =>  'dlrow'
'word'   =>  'drow'*/
function solution(str){
const finalSrt =  str.split("").reverse().join("");
console.log(finalSrt);
}
solution("hello")