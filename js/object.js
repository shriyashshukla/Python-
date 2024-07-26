const MySym = Symbol("key1")



const JsUser={
    name: 'John',
    age: 25,
    isMarried: false,
    [MySym]: 'Hello',
    sayHello: function(){
        console.log('Hello');
    },
    lastLogin:["monday","Friday"],
    "full name": "shriyash shukla"

}

console.log(JsUser);
console.log(JsUser.isMarried);
console.log(JsUser.sayHello());
console.log(JsUser.lastLogin[1]);
console.log(JsUser["full name"]);
console.log(JsUser[MySym]);



JsUser.name='SHRIYASH SHUKLA JI'

console.log(JsUser.name);
console.log(JsUser);

JsUser.greeting= function(){
    console.log('Good Morning');
}

console.log(JsUser.greeting);
console.log(JsUser.greeting());

JsUser.greeting2= function(){
    console.log(`good evening , ${this.name}`);
}

console.log(JsUser.greeting2());


//if object is empty 

const emptyObj={}

if (Object.keys(emptyObj).length === 0){
    console.log('Object is empty');
}