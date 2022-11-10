/*Check output in console of the browser*/

function change(id) {
    id.innerHTML = "Clicked";
}

var button = document.getElementById('btn');
btn.addEventListener('click',function()
{
    console.log("button was clicked");
});


var lis = document.querySelectorAll('li');
for(var i=0;i<lis.length;i++)
{
    lis[i].addEventListener('click',function(){this.style.color="red";});
}
for(var i=0;i<lis.length;i++)
{
    lis[i].addEventListener('mouseover',function(){this.style.color="pink";});
}