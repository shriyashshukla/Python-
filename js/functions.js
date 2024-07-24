function sum (a,b){
    let results= a*b
    return results
}

console.log(sum(2,3))


function fullName(username){
    if (!username){
        console.log("please enter username")
    }
    return `${username} just logged in `
}
console.log(fullName("shriyash"));






function calculateCartPrice(...num1){
    return num1 

}
console.log(calculateCartPrice(1000,2000,2000,3000));

const user ={
    username:"shriyash",
    price:199
}

function handleObject(anyobject){
    console.log(`User is ${anyobject.username}and the price is ${anyobject.price}`)

}

    handleObject({
        
    })

