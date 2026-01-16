function LAndS(arr){
     if (arr.length === 0) return null;
    let smallest = arr[0];
    let largest = arr[0];

    for(let i=1;i<arr.length ; i++){
        if(arr[i]<smallest){
            smallest = arr[i];
        }
         if(arr[i]>largest){
            largest = arr[i];
        }
    }

    return {largest,smallest};

}

console.log(LAndS([22,33,4,556,7,888,9,0]))