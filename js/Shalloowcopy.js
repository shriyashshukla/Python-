let zoo={
name:"lucknow zoo",
location:"lucknow",
animals:[
    {
    species:"Lion",
    food:"human meat"
    },
    {

        species:"Tiger",
        food:"goat meat"
    },
    {
        species:"Elephant",
        food:"grass"
    }
]
}
let shallowCopyZoo ={...zoo};
shallowCopyZoo.animals[1].food="sheep meat";
console.log(zoo);
