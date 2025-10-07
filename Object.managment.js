const person = {
    firstName: "John",
    lastName: "Doe",
    language: "EN"
};

// Add a Property
const res = Object.defineProperty(person, "year", { value: "2008", enumerable: true }) // enumerable: false [default]

console.log(person.year); // 2008
console.log(person); // { firstName: 'John', lastName: 'Doe', language: 'EN' }