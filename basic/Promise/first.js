/*Check output in console of the browser*/

const promise = new 
Promise((resolve,reject) => {
    if(true)
        resolve("It worked");
    else
        reject("It did not work");
});

console.log(promise.then(result => result + " haha"));


const p = new 
Promise((resolve,reject) => {
    if(false)
        resolve("It worked");
    else
        reject("It did not work");
});

console.log(p.then(result => result + " haha"));


const p1 = new 
Promise((resolve,reject) => {
    if(false)
        resolve("It worked");
    else
        reject("It did not work");
});

console.log(p1.then(result => result + " haha").catch(result => result + " heheh"));