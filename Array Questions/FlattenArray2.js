function FlattenArray(arr) {
    return arr.flat(Infinity);
}

console.log(FlattenArray([1, [2, [3, 4], 5], 6])); // Output: [1, 2, 3, 4, 5, 6]        