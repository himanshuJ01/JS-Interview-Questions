function DuplicateFinder(arr) {
    let count ={};
    let dupicates = [];

    for(let i of arr ){
        count[i] = (count[i] || 0)+1;
    }

    for(let i in count){
        if(count[i]>1){
            dupicates.push(Number(i))
        }
    }
    return dupicates;
}

console.log(DuplicateFinder([1,2,3,2,1,5,6,7]))