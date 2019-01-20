const fs = require('fs');

fs.readFile('./santa.txt', (err, data) => {
    console.time('timer');

    const stringDat = data.toString();
    let openP = stringDat.match(/\(/gi).length; // find the num of floors up
    let closeP = stringDat.match(/\)/gi).length; // find num of floors down


    console.log(openP-closeP); //answer is the difference


    console.timeEnd('timer');
})
