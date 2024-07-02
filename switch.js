

switch (new Date().getDay()) {
  case 0:
    day = "sunday";
    break;
  case 1:
    day = "monday";
    break;
  case 2:
    day = "tuesday";
    break;
  case 3:
    day = "wednesday";
    break;
  case 4:
    day = "thursday";
    break;
  case 5:
    day = "friday";
    break;

  case 6:
    day = "saturday";
    break;
  default:
    day = "unknown";
    break;
}


let text;
switch (new Date().getDay()) {
  case 4:
  case 5:
    text = "Soon it is Weekend";
    break;
  case 0:
  case 6:
    text = "It is Weekend";
    break;
  default:
    text = "Looking forward to the Weekend";
}


const readline = require('readline');

const r1=readline.createInterface({
    input:process.stdin,
    output:process.stdin,
});

r1.question("Enter the a number",(input) =>{
    const day = parseInt(input);
    switch(day){
        
    }
})