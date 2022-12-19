const arr= [3, 6, 7, 2, 9];

const users = [
    {fname: 'qaisher', lname: 'alam', age:27},
    {fname: 'michael', lname: 'gray', age:27},
    {fname: 'jaun', lname: 'elia', age:77},
    {fname: 'thomas', lname: 'shelby', age:37},
    {fname: 'arthur', lname: 'shelby', age:37},
    {fname: 'polly', lname: 'gray', age:47},

];

//map

const doubleArr = arr.map( (element) => {
    return element*2;
});

console.log(doubleArr);


const fullName = users.map((element) => element.fname + ' ' + element.lname);

console.log(fullName);


//filter

const evenArr = arr.filter((element) => element%2 === 0);
console.log(evenArr);


const ageLessThan30 = users.filter((element) => element.age<30)
.map((element) => element.fname);

console.log(ageLessThan30);


//reduce

const sum = arr.reduce((acc, element)=> {
        acc = acc+element;
        return acc;

}, 0);

console.log(sum);


const max = arr.reduce( (max, element) => {
    if(element>max) max = element;
    return max;
    
}, arr[0]);

console.log(max);


const categoryAge = users.reduce( (acc, element) => {
    if(!acc.hasOwnProperty(element.age)){
        acc[element.age] = 1;
    }
    else{
        acc[element.age] += acc[element.age];
    }
    return acc;
}, {});

console.log(categoryAge);