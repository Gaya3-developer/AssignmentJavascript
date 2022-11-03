/*Consider an array/list of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present).*/
function countSheepsFor(arrayOfSheep) {
    let counter = 0
    for(let i = 0; i < arrayOfSheep.length; i++) {
        if(arrayOfSheep[i]) counter += 1
    }
   console.log("Count of sheeps : "+counter)
}
function countSheepsForeach(arrayOfSheep) {
    let counter = 0
    arrayOfSheep.forEach(sheep => {
        if(sheep) counter++
    })
    console.log("Count of sheeps : "+counter)
}
function countSheepsFilter(arrayOfSheep) {
    let count = arrayOfSheep.filter(item => item === true).length;
    console.log("Count of sheeps : "+count)
}
const arrayOfSheep = [true,false,true,true,true];
countSheepsFor(arrayOfSheep);
countSheepsForeach(arrayOfSheep);
countSheepsFilter(arrayOfSheep);