function binarySearch(arr, target) {
    let low = 0;
    let high = arr.length - 1; // Corrected len(arr) to arr.length

    while (low <= high) {
        let mid = Math.floor((low + high) / 2); // Corrected (low + mid) to (low + high)
        let midValue = arr[mid];

        if (midValue === target) {
            return mid;
        } else if (midValue < target) {
            low = mid + 1;
        } else {
            high = mid - 1;
        }
    }

    return -1;
}

let numbers = [1, 2, 3, 4, 5, 6,7, 8, 9, 10];

let target = 9;
let result = binarySearch(numbers, target);

if (result !== -1) {
    console.log(`Target ${target} found at index ${result}.`);
} else {
    console.log(`Target ${target} not found in the array.`);
}
