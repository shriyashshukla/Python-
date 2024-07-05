function Person(name){
    this.name = name;

}
 Person.prototype.greet = function () {
    console.log(`hello ,my name is ${this.name}`);
    
 }
 const alice = new Person("Hari Shukla");
 alice.greet();