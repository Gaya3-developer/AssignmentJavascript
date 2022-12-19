const calculate = function(radius, job){
    let result = [];

    radius.forEach(element => {
        result.push(job(element));
    });
    return result;
};

const area = (r) => Math.PI*r*r;

const circumference = (r) => 2*Math.PI*r;

const diameter = (r) => 2*r;

const data = [2, 5, 1, 9];

console.log(calculate(data, area));
console.log(calculate(data, circumference));
console.log(calculate(data, diameter));