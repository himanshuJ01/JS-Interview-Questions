function RotateLeft(arr, d) {
    const n = arr.length;
    d = d % n;  
    reverse(arr, 0, d - 1);
    reverse(arr,d,n-1);
    reverse(arr,0,n-1);

    return arr;
}

function reverse(arr,start,end){
    while(start<end){
        [arr[start],arr[end]] = [arr[end],arr[start]]
        start++;
        end--;
    }
}

console.log(RotateLeft([1,2,3,4,5],2))

function RotateL(arr,d){
    let n = arr.length;
    k = k % n;
    return arr.slice(k).concat(arr.slice(0, k));
}