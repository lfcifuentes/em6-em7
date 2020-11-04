function newFunction(name, age, country){
    var name = name || 'Luis';
    var age = age || 23;
    var country = country || 'Colombia';

    console.log(name, age, country);
}

// es6
function newFunctionTwo (name = 'Luis', age=23, country='Colombia') {
    console.log(name, age, country);
}
newFunctionTwo();
newFunctionTwo('Oscar');

// template literals
let hello = "Hola";
let world = "Mundo";
let epicPhrase = hello + ' ' + world;
console.log(epicPhrase);

let epicPhraseTwo = `${hello} ${world}`;
console.log(epicPhraseTwo);

// multilineas

let lorem = "lorem ipsum\n"
            +" otra linea";
// es6
let loremTwo = `
    linea 1
    linea 2
    linea 3 
    .....
`;
console.log(lorem)
console.log(loremTwo)

// importar el modulo
const hello = require('./module')

console.log(hello())

// generator
function* helloWord() {
    if(true){
        yield 'Hello ';
    }
    if(true){
        yield 'word'
    }
}


const hw = helloWord();

console.log(hw.next().value);
console.log(hw.next().value);
console.log(hw.next().value);