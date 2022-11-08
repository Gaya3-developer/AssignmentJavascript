let text = "";
let i = 0;
while (i < 10) {
  text +=  i;
  i++;
}
console.log(text)

const recurTen = (num = 1) => {
    if(num >10) return;
    console.log(num);
    num++;
    recurTen(num);
}
recurTen();


//fibonaci series

const fibonacci =  (num, array = [0,1]) => {
    while(num>2){
        const [nextToLast, last] = array.slice(-2);
        array.push(nextToLast + last);
        num -=1;
    }
    return array;
}
console.log(fibonacci(12));


//using recursion

const fib =  (num, array = [0,1]) => {
    if(num<=2) return array;
    const [nextToLast, last] = array.slice(-2);
    return fib(num-1,[...array,nextToLast+last]);
}
console.log(fib(12));

//fibposition

const fibPos = (pos) => {
    if(pos <=1) return pos;
    const seq =[0,1];
    for(let i=2; i<=pos; i++){
        const [nextToLast1, last1] = seq.slice(-2);
        seq.push(nextToLast1+last1);

    }
    return seq[pos];
}
console.log(fibPos(8))
const fibPosRec = (pos) => {
    if(pos <2 ) return pos;
    const seq =[0,1];
    
    return fibPosRec(pos-1) +fibPosRec(pos-2);
}
console.log(fibPosRec(8))
