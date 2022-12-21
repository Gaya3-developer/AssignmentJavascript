const one = () => {
    return `I'm One.`;
};


/*
const dos = () => {
    setTimeout(() => {
        return `I'm Two.`;
    }, 5000);
   
    
};*/

const two = () => {

    return new Promise((resolve, reject) => {
        setTimeout( () => {
            resolve(`I'm Two`);
        }, 2000);
        
    });

};

const three = () => {
    return `I'm Three.`;
};


const callMe = async () => {
    let valOne = one();
    console.log(valOne);

    let valTwo = await two();
    console.log(valTwo);

    let valThree = three();
    console.log(valThree);
};


callMe();