//strings are immutable

let str3 = 'mike';
str3[0] = 'n'; //immutable
console.log(str3);


//uppercase lowercase
let str1 = 'this is in lowercase';
console.log(str1.toUpperCase());
console.log(str1); //does not mutate the original string

let str2 = 'THIS IS IN UPPERCASE';
console.log(str2.toLowerCase());


//indexOf (case sensitive)

let str4 = 'widget with id';
console.log(str4.indexOf('id')); //returns 1 because first occurence of 'id' is at index 1
console.log(str4.indexOf('id', 2)); //starts searching from index 2 and returns 12

//for every occurence of substring

let str5 = 'As sly as a fox, as strong as an ox';

let startPos = 0;
let foundPos =0;
do{
    foundPos = str5.indexOf('as', startPos);
    startPos = foundPos+1;
    if(foundPos !== -1)
        console.log(`Found at ${foundPos}.`);
}while(foundPos !== -1)



//substrings

let str6 = 'fun to learn javascript';

console.log(str6.slice(8, 12)); //also allows negative values
console.log(str6.substring(8, 12)); //negative values mean zero
console.log(str6.substr(4, 5));


//comparison of two strings

let str7 = 'a';
let str8 = 'Z';
console.log(str7.localeCompare(str8));



