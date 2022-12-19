const arr = [3, 5, 3, 5, 6, 9];

function getArr() { 
    setTimeout(() => {
    arr.forEach(element => console.log(element))
}, 500);
};

function pushElement(x, callback) {
    setTimeout(() => {
        arr.push(x);
        callback();
    }, 1000);
    
};

pushElement(40, getArr);
