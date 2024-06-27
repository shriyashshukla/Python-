let promise = new Promise (function(resolve,reject){
    alert("hello")
    resolve(1)
})

setTimeout(function(){

    console.log("hello in 3 sec")
},3000)

console.log(promise)