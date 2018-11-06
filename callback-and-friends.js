function returnHelloWorldStringLater(millisecond, callback) {
    setTimeout(() => callback(null, 'Hello world'), millisecond);
}

function returnHelloWorldStringLaterPromise(millisecond) {
    return new Promise(resolve => {
        setTimeout(() => resolve('Hello world'), millisecond);
    });
}

async function returnHelloWorldStringLaterAsync(millisecond) {
    return new Promise(resolve => {
        setTimeout(() => resolve('Hello world'), millisecond);
    });
}

// returnHelloWorldStringLater(2000, (err, data) => {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log(data);
//     }
// });

// returnHelloWorldStringLaterPromise(2000)
//     .then(data => {
//         return processSmthAsync().then(someOtherData => {
//             return data + someOtherData;
//         });
//     })
//     .catch(err => console.log(err));

async function main() {
    try {
        const data = await returnHelloWorldStringLaterAsync(2000);
        console.log(data);
        const someOtherData = await processSmthAsync();
        
        return data + someOtherData;
    } catch (err) {
        console.log(err);
    }
}

// main();

async function returnFive() {
    return 5;
}

console.log(returnFive());

console.log('Goodbye world');
