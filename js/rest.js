function sum(...numbers) {
    return numbers.reduce((acc, curr) => acc + curr, 0);
}

console.log(sum(1, 2, 3)); 
console.log(sum(4, 5, 6, 7)); 
