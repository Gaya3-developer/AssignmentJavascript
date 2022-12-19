const arr = [3, 5, 3, 5, 6, 9];

function getUpdateOnInsertion() { 
    console.log(`Displaying in 5 seconds.`);
    setTimeout(() => {
    arr.forEach(element => console.log(element))
}, 5000);
};

function pushEvenNumber(x) {

    return new Promise((resolve, reject) => {
        console.log(`Number ${x} will be checked for even in 4 seconds.`);

        setTimeout(() => {
            if(x%2 === 0){
                arr.push(x);
                console.log(`Even number ${x} pushed.`);
                resolve();
            }
            else{
                reject(`Error! Number ${x} is not even.`);
            }

        }, 4000);
    });
};


//console.log(pushEvenNumber(42)); //promise is returned immediately for future value.

pushEvenNumber(22).then(getUpdateOnInsertion).catch(err => console.error(err)); //passing even number.
pushEvenNumber(27).then(getUpdateOnInsertion).catch(err => console.error(err)); //passing odd number.






const checkOdd = function(num){
    console.log(num);
    return new Promise( (resolve, reject) => {
        setTimeout( () => {
            if(num%2 !== 0) resolve();
            else reject();
        }, 3000);

    });
};

checkOdd(Math.round(Math.random()*10))
.then( () => console.log('Number is odd.'), () => console.log('Number is not odd.'));


