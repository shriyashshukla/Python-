const person = {
    fullName: function() {
        return this.firstName + " " + this.lastName;
    }
};

const person1 = {
    firstName: 'John',
    lastName: 'Doe'
};

// Using bind() to create a new function with 'this' bound to 'person1'
const getFullName = person.fullName.bind(person1);

console.log(getFullName()); // This will log 'John Doe'
