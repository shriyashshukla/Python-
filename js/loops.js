// //for loops

// for (let i = 0; i <= 9; i++) {
//     const element = i;
//     if (element ==  5) {
//     console.log("this is loops");
        
//     }       
    
//     console.log(element);
// }



for (let i = 1; i <=2; i++) {
    console.log(`outer loop ${i}`);
    for (let j = 0; j <=2; j++) {
        console.log(`inner loop ${j} and outer loop ${i}`);
        
        
        
    }
    
    
}



let myArray =[
    {
        name: 'John',
        age: 23
    },
    {
        name: 'Doe',
        age: 30
    },
    {
        name: 'Doe',
        age: 30
    }
]

console.log(myArray.length)
for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    console.log(element);
}

