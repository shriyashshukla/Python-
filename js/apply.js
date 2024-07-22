person = {

    fullName : function(city,country){
        return this.firstName + " " + this.lastName + "," + city + "," + country;
    }
}

const person1 = {
    firstName : 'shriyash',
    lastName : 'shukla'
}

console.log (person.fullName.apply(person1,['lucknow','india']))