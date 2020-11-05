// junio del 2017

// se introdujo asinc y awai

// object.entries

const data = {
    frontend: 'Oscar',
    backend: 'Isabel',
    desing: 'Ana',
}

//Tranformar este objeto en una matriz. 
const entries =Object.entries(data);
console.log(entries);
//Si queremos saber cuantos elementos posee nuestro arreglo ahora es posible con length
console.log(entries.length);

// optener los valores del objecto
const values = Object.values(data);
console.log(values);

// padding
const string = 'Hello';
console.log(
    string.padStart(7, 'hi')
);
console.log(
    string.padEnd(12, 'hi')
);

//Trailing comas, nos permite asignar elementos al objeto mediante comas.
const data= {
    front:'Luis', // Puede existir
    back: 'Carlos'
}