// Creating a promise
const myPromise = new Promise((resolve, reject) => {
    const success = false; // Simulate an asynchronous operation result

    if (success) {
        resolve('Operation successful');
    } else {
        reject('Operation failed');
    }
});


myPromise
    .then(result => {
        console.log(result); 
    })
    .catch(error => {
        console.error(error);
    });
