
function salutation() {
    let name = 'Aayush';
  
    function greet() {
        console.log(`Hello ${name}!`);
    }
    return greet;
}
  
let wish = salutation();
wish();


function fibonacci(n) {
    if (n < 2)
        return 1;
    return fibonacci(n - 1) + fibonacci(n - 2);
}



function memoisedFibonacci(n, cache) {
    cache = cache || [1, 1]
    if (cache[n])
        return cache[n]
    return cache[n] = memoisedFibonacci(n - 1, cache) + 
    memoisedFibonacci(n - 2, cache);
}