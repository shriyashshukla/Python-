const tinderUser = {}


tinderUser.id='69'
tinderUser.name= "sam "
tinderUser.age= 25
tinderUser.isMarried= false
tinderUser.isLoggedIn=false

console.log(tinderUser.id) 

const regularUser = {
    email:"sam@gmail.com",
    fullname :{
        userfullname:{
            firstname:"sam",
            lastname:"shukla"

        }

    }
}

console.log(regularUser.fullname.userfullname.lastname);

const obj1 = {1:"a" ,2:"b"}
const obj2 ={ 3:"c",4:"d"}

const obj3 = {...obj1,...obj2}
console.log(obj3);


const user =[
    {
        id:1,
        name:"sam",
        email:"sam@gmail.com"
    },
    {
        id:2,
        name:"shriyash",
        email:"shriyash@gmail.com"
    }
]