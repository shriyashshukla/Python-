var x = 220;
var y = "Hello";
var z = undefined;
        
x || y    // Returns 220 since the first value is truthy
        
x || z   // Returns 220 since the first value is truthy
        
x && y    // Returns "Hello" since both the values are truthy
        
y && z   // Returns undefined since the second value is falsy
        
if( x && y ){ 
  console.log("Code runs" ); // This block runs because x && y returns "Hello" (Truthy)
}   
        
if( x || z ){
  console.log("Code runs because it a true");  // This block runs because x || y returns 220(Truthy)
}

if( x && z ){
    console.log("Code do not runs");  
  }

  if( y && z ){
    console.log("Code do not runs");  
  }