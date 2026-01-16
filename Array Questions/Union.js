function Union(arr1, arr2) {
    let seen = {};
    let unionArray = [];

    for (let i of arr1) {
        if (!seen[i]) {
            unionArray.push(i);
            seen[i] = true;
        }
    }   
    for (let j of arr2) {   
        if (!seen[j]) {
            unionArray.push(j);
            seen[j] = true;
        }
    }
    return unionArray;
}
console.log(Union([1, 2, 3, 4, 5], [4, 5, 6, 7, 8]));   