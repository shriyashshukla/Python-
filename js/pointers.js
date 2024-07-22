var y = 234;
var z = y; // z is now 234, a new memory space is allocated

// Illustration with memory addresses (hypothetical)

var z = y;     // z is pointing to a new address with value 234, not the same address as y

// Changing the value of y
y = 23;
console.log(z); // Returns 234 because z points to a different memory location




var obj = { name: "Vivek", surname: "Bisht" };
var obj2 = obj; // obj2 references the same object as obj

// Illustration with memory addresses (hypothetical)

var obj2 = obj;  // obj2 pointing to the same address as obj

// Changing the value of obj
obj.name = "Akki";
console.log(obj2); // Returns { name: "Akki", surname: "Bisht" } because obj2 references the same object
