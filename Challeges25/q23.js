/*Introduction
The first century spans from the year 1 up to and including the year 100, the second century - from the year 101 up to and including the year 200, etc.

Task
Given a year, return the century it is in.
1705 --> 18
1900 --> 19
1601 --> 17
2000 --> 20*/

/*function century(year) {
    let res;
    const firstDigits = year.toString().substr(0,2);
    if(year % 100 === 0){
res = Number(firstDigits);
    }
    else{
        
        res = Number(firstDigits)+1;
    }
    // Finish this :)
 console.log(res);
  }*/

  function century(year) {
    console.log (Math.ceil(year/100));
  }
  century(1705);
  century(1900);
  century(1601);
  century(2000);
  century(100);

