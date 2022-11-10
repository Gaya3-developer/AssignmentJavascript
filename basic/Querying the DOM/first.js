/*Check output in console of the browser*/

var head = document.getElementById("head1");

console.dir(head);


var list_of_hobbies = document.getElementsByClassName("hobby");
console.log(list_of_hobbies);


var list_of_para = document.getElementsByTagName("p");
console.log(list_of_para);


var list_of_query = document.querySelector("#head1");
console.log(list_of_query);

var queries = document.querySelectorAll("#head1");
console.log(queries);