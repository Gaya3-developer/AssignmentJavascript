const birthday = function(isSick, n) {
    return new Promise ((resolve, reject) => {
        setTimeout( () =>{
            if(!isSick){
                resolve(n);
            }
            else {
                reject(new Error(`I'm not getting any cakes.`));
            }
        }, 2000);
    });
};

birthday(false, 5)
.then((result) => console.log(`I have ${result} cakes.`))
.catch((err) => console.log(err))
.finally(() => console.log('Whatever. Party is on.'));