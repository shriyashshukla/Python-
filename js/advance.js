function serializeToJson(value) {
    try {
        return JSON.stringify(value);
    } catch (error) {
        console.error("Error serializing value to JSON:", error);
        return null;
    }
}


const obj = { name: "John", age: 30, city: "New York" };
const jsonString = serializeToJson(obj);
console.log(jsonString);
