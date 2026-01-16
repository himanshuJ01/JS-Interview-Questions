function Duplicates(arr) {
    let uniqueElements = [];
    let seen ={}
    for(let i of arr){
        if(!seen[i]){
            uniqueElements.push(i);
            seen[i]=true;
        }
    }
    return uniqueElements;

}

console.log(Duplicates([1,1,1,3,4,5,6,7,8,3,4,56,79,5,2]))