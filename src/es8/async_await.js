const hello_world = () => {
    return new Promise( (resolve, reject) => {
        (true) ?
            setTimeout( () => {
                resolve("Hello World");
            }, 3000)
        :
            reject(new Error("test error"));
        
    });
}

const hello_async = async () => {
    const hello = await hello_world();
    console.log(hello);
}

hello_async();

const another_async = async () => {
    try {
        const hello = await hello_world();
        console.log(hello);
    } catch (error) {
        console.log(error)
    }
}
another_async();