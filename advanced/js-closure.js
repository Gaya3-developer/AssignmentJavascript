const add = (function () {
    let counter = 0;
    console.log(`initial counter:${counter}`)
    return () => {counter += 1; console.log(counter);}
  })();
  
  add();
  add();


  //ex2
  const credits = ((num) => {
    let credits = num;
     console.log(`initial credits:${credits}`);
     return () => {
        credits -=1;
        if(credits > 0)
        console.log(`playing game, ${credits} credits remaining`);
        if(credits<=0) console.log("not enough credits")
     }
  })(3);
  credits();
  credits(2);


  //ex 3
  let x=1;
  const parent = () => {
    let myValue = 2;
    console.log(x);
    console.log(myValue);
    const child = () => {
     
        console.log(x +=5);
        console.log(myValue +=1);
    
        
      }
    return child;
    
  }

const res = parent();
res();
res();