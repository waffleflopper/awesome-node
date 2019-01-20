const fs = require('fs');

fs.readFile(`${__dirname}/hello.txt`, (err, data) => {
    if (err) {
        console.log('error', err);
    }

    console.log('Async', data.toString());  
    //toString() utf8 by default. pretty standard type of encoding across the web
    //ascii mainly for latin based languages, utf expanded for more languages across world
})


const file = fs.readFileSync(`${__dirname}/hello.txt`);

console.log('Sync', file.toString()); //comes first?

//readFile is asynchronous.  lets script keep going while file opens and gets read (the callback fn gives it away)
//readFileSync is synchronous and doesn't allow script to continue on until it's done.


/* fs.appendFile('./hello.txt', '\n WOOOOOOO!', err => {
    if (err) {
        console.log(err);
    }
}) */

//write
fs.writeFile('bye.txt', 'Sad face mcgee', err => {
    if (err) {
        console.log(err);
    }
});



// delete

fs.unlink('./bye.txt', err => {
    if (err) {
        console.log(err);
    }
})