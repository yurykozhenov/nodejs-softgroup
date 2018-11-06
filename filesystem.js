const fs = require('fs');

// const { promisifyAll } = require('./promisify-all');
// const fs = promisifyAll(require('fs'));

// const util = require('util');
// const readFileAsync = util.promisify(fs.readFile);

// function readFileAsync(filePath, options) {
//     return new Promise((resolve, reject) => {
//         fs.readFile(filePath, options, (err, data) => {
//             if (err) {
//                 reject(err);
//             } else {
//                 resolve(data);
//             }
//         })
//     });
// }

// const readFileAsync = util.promisify(fs.readFile);

// fs.readFile('./text.txt', { encoding: 'utf-8' })
//     .then(data => console.log(data));

// fs.readFile('./text.txt', { encoding: 'utf-8' }, (err, data) => {
//     console.log(data);
// });

// const data = new Buffer([65]);

// fs.writeFile('./generated-text.txt', data, (err) => {
//     console.log('File created!');
// });

// fs.readFile('./callback-and-friends.js', { encoding: 'utf-8' }, (err, data) => {
//     console.log(data);
// });

// const data = new Buffer([65, 66, 67]);

// fs.writeFile('./generated-text.txt', data, { flag: 'a' }, (err, data) => {
//     console.log(data);
// });

// fs.readFile('./tesla-cat.jpg', (err, data) => {
//     console.log(data);

//     fs.writeFile('./cat.txt', data, (err) => {});
// });

// fs.copyFile('./tesla-cat.jpg', './cat.txt', (err) => {});

// fs.appendFile('./generated-text.txt', data, (err, data) => {
//     console.log(data);
// });

// fs.mkdir('./inner-folder', (err) => {});

// fs.exists('./generated-text.txt', (exists) => {
//     console.log(exists);
// });

