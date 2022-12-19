//using closure to log how many times a function is called

let sum = (...args) => {
    //console.log('sum start.');
    //console.log('sum end.');

    return [...args].reduce((acc, num) => acc+num);

}

const callCounter = (fn) => {

    //console.log('callCounter start.');
    let count = 0;
    //console.log('callCounter end.');
    
    return (...args) => {
        //console.log('callCounter return start.');
        console.log(`${fn.name} has been called ${count += 1} times`);
        //console.log('callCounter return end.');
        return fn(...args);
    }
    
}


const sumArr = callCounter(sum); //passing sum as a parameter.

console.log(sumArr(1, 4, 7));
//console.log(sum(4, 1));
//console.log(sum(29, 43));



//Check for valid data and number of parameters

let rectangleArea = (length, width) =>{
    return length*width;
}

const countParams = (func) => {
    return (...params) => {
        console.log(...params);
        if(params.length !== func.length){
            throw new Error(`Incorrect number of parameters for ${func.name}.`);
        }

        return func(...params);
    }
}


const checkParams = (func) => {
    return (...params) => {
        params.forEach(param => {
            if(!Number.isInteger(param)){
                throw new TypeError(`Params for ${func.name} must be integer.`);
            }
        });

        return func(...params);
        
    }

}


rectangleArea = countParams(rectangleArea);
rectangleArea = checkParams(rectangleArea);

console.log(rectangleArea(20, 30));

//console.log(rectangleArea(23, 12, 56)); throws error
//console.log(rectangleArea('hey', 4)); throws error