function FlattenArray(arr) {
    const result = [];
    for (let i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i])) {
            result.push(...FlattenArray(arr[i]));
        } else {
            result.push(arr[i]);
        }
    }
    return result;
}

console.log(FlattenArray([1, [2, [3, 4], 5], 6])); // Output: [1, 2, 3, 4, 5, 6]