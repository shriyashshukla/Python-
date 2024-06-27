function removeDuplicate(arr){
    return [...new Set (arr)];
}

console.log(removeDuplicate([1,2,3,4,5,6,7,8,9,1,2,3,4,5,6,7,8,9])); // [1,2,3,4,5,6,7,8,9]