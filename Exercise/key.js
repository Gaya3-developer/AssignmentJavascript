const objArr = [{
    name: "Gayathri",
    place:"Mangalore",
    age:'90'
},{
    name: "Gayathri",
    place:"Mangalore",
    age:'90'
},{
    name: "Gayathri",
    place:"Mangalore",
}]

let data = [[3,4], [2,6]];
let data1 = [[],[],[],[]];  
let newData = data.concat(data1)
let slicedDtata = newData.slice(0,newData.length-2);

console.log(slicedDtata)