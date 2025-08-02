

/***

Subtask-1:

Display sum of all the odd numbers from 81 to 131.

 */
/***

Subtask-2:

Display sum of all the even numbers from 206 to 311.

 */

/*programming hero*/


let num = 81;
let sum = 0;
while (num <= 131) {
    if (num % 2 !== 0){
        sum = sum + num;
    }
    num++;
}

console.log('Sum of all odd numbers:', sum);



let start = 81;
let end = 131;
let total = 0;


while(start <= end) {
    if(start % 2 !== 0) {
        total = total + start;
    }
    start++;
}

console.log('Sum of all odd numbers:', total);


// 206 to 311


let first = 206;
let second = 311;
let calculate = 0;


while(first <= second) {
    if (first % 2 === 0) {
        calculate += first;
    }
    first++;
}

console.log('Sum of all even numbers:', calculate);

