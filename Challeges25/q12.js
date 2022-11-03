/*It's the academic year's end, fateful moment of your school report. The averages must be calculated. All the students come to you and entreat you to calculate their average for them. Easy ! You just need to write a script.

Return the average of the given array rounded down to its nearest integer.

The array will never be empty.*/
function getAverage(scoreArray){
    /* average =sum / count*/
    const count = scoreArray.length;
let sum = 0;
  for (let i=0; i<count; i++ ){
sum +=scoreArray[i];
  }
  const avg = Math.floor(sum / count);
  console.log(avg);
      }
const arr=[2,5,7,8]
      getAverage(arr);     
