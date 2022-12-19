function myFunc(work, time){
    return new Promise( (resolve, reject) => {
        setTimeout( () => {
            resolve(work());
        }, time);
    });
};

myFunc( () => console.log(`Process started.`), 3000)

.then(() => {
    return myFunc( () => console.log(`then 1 executed. Took 2 seconds.`)), 2000})

.then(() => { 
    return myFunc( () => console.log(`then 2 executed. Took 4 seconds.`)), 4000});

    //incomplete