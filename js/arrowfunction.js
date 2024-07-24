const user ={
    username:"shriyash",
    price:199,

    welcomeMessage:function (){
        console.log(`${this.username} welcome to my profile`) 
    }
}


user.welcomeMessage()
user.username="sam"
user.welcomeMessage()




const addTwo =(num1,num2)=>{
    return num1+num2
}

console.log(addTwo(3,4));


const addThree =(num1,num2,num3)=> (num1+num2+num3)

console.log(addThree(3,4,5));