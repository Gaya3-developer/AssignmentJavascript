const arr = [3, 5, 3, 5, 6, 9];

function getArr() {
    setTimeout(() => {
        arr.forEach(element => console.log(element));
    }, 5000);

};

function pushEvenNumber(x) {

    return new Promise((resolve, reject) => {

        console.log('Number will be checked for even in 4 seconds.');

        setTimeout(() => {
            if (x % 2 === 0) {
                arr.push(x);
                console.log('Even number pushed. Displaying in 5 seconds.');
                resolve();
            }
            else {
                reject('Error! Number is not even.');
            }

        }, 4000);
    });
};


const callFunc = async () => {
    await pushEvenNumber(22).then(getArr).catch(err => console.error(err)); //passing even number.
    pushEvenNumber(27).then(getArr).catch(err => console.error(err)); //passing odd number.
};

callFunc();



async function myFunc(num){
    let promise = new Promise( (resolve, reject) => {
        for(let i = 0 ; i<50; i++) num++;
    
        setTimeout( () => {
            if(num>100) resolve();
            else reject();
        }, 1000);

    });
    console.log(typeof(promise));

    let result = promise.then( () => console.log('Number greater than 100.'), () => console.log('Number less than 100.'));
    console.log(typeof(result));
    return result;
};

myFunc(33);


