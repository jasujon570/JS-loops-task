/***

Subtask-1:

Display sum of all the odd numbers from 91 to 129.

 */
/***

Subtask-2:

Display sum of all the even numbers from 51 to 85.

 */

/*programming hero*/

let sum = 0;
let oddNumbers = "";

for (i = 91; i <= 129; i++) {
  if (i % 2 !== 0) {
    oddNumbers += i;
    sum += i;
    if (i < 128) {
      oddNumbers += " + ";
    }
  }
}
console.log("All odd numbers:", oddNumbers);
console.log("Sum of all odd numbers:", sum);


let oddNumberSum = 0;
let oddNumbersArray = [];

for(i = 91; i <= 129; i++) {
    if(i % 2 !== 0){
        oddNumberSum += i;
        oddNumbersArray.push(i);
    }
}

console.log('All odd number:', oddNumbersArray.join(' + '));
console.log('Sum of all odd numbers:', oddNumberSum);