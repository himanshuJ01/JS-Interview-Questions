function Intersection(arr1,arr2){
    let count={};
    let result=[];
    for(let i of arr1){
        count[i]=(count[i]||0)+1;
    }
    for(let j of arr2){
        if(count[j]>0){
            result.push(j);
            count[j]--;
        }}
    return result;
    }
console.log(Intersection([1,2,2,1],[2,2])); // Output: [2,2
