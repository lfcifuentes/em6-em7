// lanzada en junio del 2018

// operador de reposo
const obj = {
    name: 'Luis',
    age: 23,
    country: 'COL'
};
let { name, ...all } = obj;
// en name guarda el attributo name
// en all guarda todo lo demas que no es name
console.log( name, all);

// propagación
const objTwo = {
    name: 'Luis',
    age: 23,
}
const objThree = {
    ...objTwo,
    country: 'COL',
}
console.log(objThree)

// promise Finally
const hello_pf = () => {
    return new Promise( (resolve, reject) => {
        (true) ? 
            resolve('Hello World')
            :
            reject(new Error('Test Error'))
    });
}
hello_pf()
    .then(response => console.log(response))
    .catch(err => console.log(err))
    .finally(()=> console.log("Finally"))