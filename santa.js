const fs = require('fs');


const question1 = () => {
    fs.readFile('./santa.txt', (err, data) => {
        console.time('timer');

        const stringDat = data.toString();
        let openP = stringDat.match(/\(/gi).length; // find the num of floors up
        let closeP = stringDat.match(/\)/gi).length; // find num of floors down


        console.log(openP-closeP); //answer is the difference


        console.timeEnd('timer');
    })
}

const question2 = () => { //when does he first enter the basement (-1)
    console.time('q2');
    const data = fs.readFileSync('./santa.txt').toString();
    const dataArray = data.split('');

    let floor=0;    
    for(let i = 0; i < dataArray.length; i++) {
        dataArray[i] === '(' ? ++floor : --floor;
        if (floor === -1) {
            console.log(`Entered basement at position ${i+1}`);
            break;
        }
    }

    console.timeEnd('q2');
}

question1();
question2();