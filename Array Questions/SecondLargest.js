function SecondLargest(arr) {
    if(arr.length<2) return null;
    let largest = -Infinity;
    let second = -Infinity;
    for(let i=0;i<arr.length;i++){
        let num = arr[i];
        if(num>largest){
            second = largest
            largest = num
        }
        else if(num>second && num<largest){
            second =num;
        }
    }
    return second===-Infinity? null:second;
}

console.log(SecondLargest([2,3,4,5,6,6,10,11]))