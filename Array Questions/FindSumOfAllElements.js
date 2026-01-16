function Sum(arr){
    let sum = 0;
    for(let i of arr){
        sum+=i;
    }

    return sum;
}
console.log(Sum([1,2,3,4,5]))
