// salio en junio del 2019

//array flat
let arr = [1,2,3, [1,2,3, [1,2,3]]];
// a flat se eliminan los array internos y aplana el arreglo
// recibe como parametro el nivel al que se va a aplanar
console.log( console.log(arr.flat(2)) );

// flatMap
let arrTwo = [1,2,3,4,5];

console.log(
    arrTwo.flatMap(
        value => [value, value * 2]
    )
);

// trimStart y trimEnd
let hello = '           Hello world                  ';
console.log(hello);
console.log(hello.trimStart());
console.log(hello.trimEnd());

// try catch
try {
    
} catch  {
    // para esta versión no es necesario pasar el parametro error al catch sino que este lo toma por defecto
    console.log(error)
}

// fromEntries

let entries = [
    ["name","Luis"],
    ["age",23]
];
console.log(
    Object.fromEntries(entries)
);
// Symbol.prototype.description
let mySymbol = "Prueba";
let symbol = Symbol(mySymbol);
console.log(
    symbol.description
)