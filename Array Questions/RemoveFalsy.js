function RemoveFalsy(arr){
   let trutly = [];
   for(let i of arr){ 
    if(i){
        trutly.push(i)
    }
}
    return trutly;
}

console.log(RemoveFalsy([1, 2, 3, 0, 4, false, 5]));