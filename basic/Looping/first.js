/*Check output in console of the browser*/
for(var num = 0; num < 11; num=num+2)
    console.log(num);


var a = [1,2,3,4];
a.forEach(item => console.log(item));


for(var item in a)
    console.log(item);


for(var item of a)
    console.log(item);


var num = 0;
while(num < 5)
{
    console.log(num);
    num++;
}

do{
    console.log(num);
    num++;
}while(num < 5)