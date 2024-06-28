let zoo = {
    name: "indian zoo",
    location: "lucknow",
    animal: [
        {
            species: "lion",
            treat: "goat meat"
        },
        {
            species: "tiger",
            treat: "chicken"
        },
        {
            species: "elephant",
            treat: "sugarcane"
        }
    ]
}

let shallowCopyZoo = { ...zoo }
shallowCopyZoo.animal[0].favoriteTreat = "Meat"
console.log(zoo.animal[0].favoriteTreat) 


shallowCopyZoo.animal[0].treat = "Meat"
console.log(zoo.animal[0].treat) 
