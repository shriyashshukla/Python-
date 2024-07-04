
function processNumber(num, callback) {
    let result = num * 2;
    callback(result);
}
function displayResult(result) {
    console.log("The result is: " + result);
}
processNumber(5, displayResult); 



//second question for callback function using array 
let numbers = [1, 2, 3, 4, 5];
numbers.forEach(function(num) {
    console.log(num);
});
let doubledNumbers = numbers.map(function(num) {
    return num * 2;
});
console.log(doubledNumbers); 
let evenNumbers = numbers.filter(function(num) {
    return num % 2 === 0;
});
console.log(evenNumbers); 
