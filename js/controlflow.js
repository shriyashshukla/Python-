const isUserLoggedIn = true

if (isUserLoggedIn) {


}


const balacnce =100000

if (balacnce  >5000){
    console.log('You are rich')
}else if(balacnce <1200) {
    console.log('u are poor ')
}
else {
    console.log("middle class");
}


const UserLoggedIn = true
const debitCard = true
const creditCard = false
const googleLoggedIn = true

if (UserLoggedIn && debitCard && 2==1){
    console.log('You can purchase not')
}

if (debitCard || creditCard ){
    console.log('You can purchase')
}





const emptyObj = {}

if (Object.keys(emptyObj).length===0){
    console.log('Empty Object')
}

const emptyArr = []
if (emptyArr.length === 0){
    console.log('Empty Array')
}

false==0
0==''
false==''



// nullish coalecing object

let val1;
let val2 = null;
let val3 = undefined;
val1=5??10

console.log(val1)



