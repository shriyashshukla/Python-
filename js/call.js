const person={
    fullName:function(){
        return this.firstName +" "+this.lastName;
    }
    
}

const person1={
    firstName : 'shriyash' ,
    lastName: 'shukla'
}

console.log(person.fullName.call(person1))





