function greet(name,callback){
    console.log("hello," +name+"!");
    callback();
}

function logGreeting(){
    console.log("this is callback function");
}

greet("hari",logGreeting);