function fibonacci(n){
    if(n===0||n===1){
        return n;
    }
    return fibonacci(n-1) + fibonacci(n-2)
}

const index=6
const fibResult = fibonacci(index);
console.log(`Fibonacci of index ${index} is ${fibResult}`);



function fact(n){
    if (n===0||n===1)
    {
        return 1;
    }
    else
    {
        return n*fact(n-1)
    }    

}

console.log(fact(2))