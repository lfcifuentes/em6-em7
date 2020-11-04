let name = 'Luis';
let age = 23;

let obj = { name:name, age:age };

// ES6
let obj_two = { name, age };

console.log(obj);
console.log(obj_two);

// () => { } this no vinculado 
let persons = [
    { name: 'Luis', age: 23 },
    { name: 'Yuli', age: 22 }
]
let listOfNames = persons.map( function(person) {
    console.log(person.name);
})
// ES6
let listOfNamesTwo = persons.map( person => {
    console.log(person.name);
})

const square = number => number * number ;

