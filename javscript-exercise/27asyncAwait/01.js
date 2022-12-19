const uno = () => {
    return `I'm One.`;
};


/*
const dos = () => {
    setTimeout(() => {
        return `I'm Two.`;
    }, 5000);
   
    
};*/

const dos = () => {

    return new Promise((resolve, reject) => {
        setTimeout( () => {
            resolve(`I'm Two`);
        }, 2000);
        
    });

};

const tres = () => {
    return `I'm Three.`;
};


const callMe = async () => {
    let valOne = uno();
    console.log(valOne);

    let valTwo = await dos();
    console.log(valTwo);

    let valThree = tres();
    console.log(valThree);
};


callMe();