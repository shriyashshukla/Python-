function rightRotateArray(a, r) {
    const n = a.length;
    // If the array is empty or r is 0, return the original array
    if (n === 0 || r === 0) {
        return a;
    }
    // Calculate the effective number of rotations
    r = r % n;
    // Split the array into two parts and concatenate them in reversed order
    const rotatedArray = a.slice(n - r).concat(a.slice(0, n - r));
    return rotatedArray;
}

// Example usage:
const arr = [2, 3, 4, 5, 7];
const rotations = 3;

const result = rightRotateArray(arr, rotations);
console.log(result); // Output: [4, 5, 7, 2, 3]




function rotateRight(arr,rotations){
    if(rotations == 0) return arr;
    for(let i = 0; i < rotations;i++){
      let element = arr.pop();
      arr.unshift(element);
    }
    return arr;
  }
  rotateRight([2, 3, 4, 5, 7], 3); // Return [4,5,7,2,3]
  rotateRight([44, 1, 22, 111], 5); // Returns [111,44,1,22]