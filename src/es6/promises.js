const helloPromise = () => {
    return new Promise( (resolve, reject) => {
        if (true) {
            resolve("Ok..");
        }else{
            reject("Ups!!");
        }
    })
}

helloPromise()
    .then((response) => {
        console.log(response);
    })
    .catch((error) => {
        console.log(error)
    })