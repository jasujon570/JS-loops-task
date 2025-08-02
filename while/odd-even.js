/***

Subtask-1:

Find all the odd numbers from 61 to 100.

 */


/***

Subtask-2:

Find all the even numbers from 78 to 98.

 */

/*programming hero*/


let oddNumberStart = 61;
const myArray = [];

while(oddNumberStart <= 100) {
    if (oddNumberStart % 2 !== 0){
        myArray.push(oddNumberStart);
    }
    oddNumberStart++;
}

console.log('All odd numbers from 61 to 100', myArray);


// 

let evenNumber = 78;
const evenArray = [];


while(evenNumber <= 98) {
    if (evenNumber % 2 === 0){
        evenArray.push(evenNumber);
    }
    evenNumber++;
}

console.log('All even numbers from 78 to 98', evenArray);