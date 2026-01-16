function MoveAllZeroes(arr) {
    let nonZeroIndex = 0;
    for(let i=0;i<arr.length;i++){
        if(arr[i]!==0){
            arr[nonZeroIndex] = arr[i];
            nonZeroIndex++;
        }
    }
        while(nonZeroIndex<arr.length){
             arr[nonZeroIndex]=0;
             nonZeroIndex++;
        }
    
    return arr;
}

console.log(MoveAllZeroes([1,2,0,2,0,2]))

//1,2,0,2,0,2 -> n=0,arr[n]=1 | n=1,arr[n]=2 | n=2,arr[n]=2| n=3,arr[n]=2|n=4,arr[n]=0,|n=5,arr[n]=0