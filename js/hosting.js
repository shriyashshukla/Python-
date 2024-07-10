
"use strict";
x = 23; 
var x;


hoistedVariable = 3;
console.log(hoistedVariable); 
var hoistedVariable;



hoistedFunction();

function hoistedFunction(){
    console.log("by by world");
}



function doSomething(){
    x = 33;
    console.log(x);
    var x;
  } 

