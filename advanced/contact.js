


const str = "Gayathri"
let newArr =[];
for(let i=0; i<str.length-1; i++){
    for(let j=i+1; j<str.length; j++ ){
        if(str[i] == str[j]){
            newArr = str[i];
            console.log(newArr)
        }
    }
}
