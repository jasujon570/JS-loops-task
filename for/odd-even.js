/***

Subtask-1:

Find all the odd numbers from 61 to 100.

 */

/***

Subtask-2:

Find all the even numbers from 78 to 98.

 */

/*programming hero*/

let sum = 0;
for (i = 61; i <= 100; i++) {
  if (i % 2 !== 0) {
    console.log("Odd numbers from 61 to 100 are:", i);
    sum = sum + i;
  }
}
console.log("Sumation of all odd numbers: ", sum);

// using array

let result = 0;
const myArray = [];

for (i = 61; i <= 100; i++) {
  if (i % 2 !== 0) {
    result += i;
    myArray.push(i);
  }
}
console.log("Odd numbers from 61 to 100 are: " + myArray.join(" + "));
console.log("Sum of all odd umbers: " + result);

// Another option

let sumOfOddNumbers = 0;
let oddNumbers = "";

for (i = 61; i <= 100; i++) {
  if (i % 2 !== 0) {
    sumOfOddNumbers += i;
    oddNumbers += i;
    if (i < 99) {
      oddNumbers += " + ";
    }
  }
}

console.log("Odd numbers from 61 to 100 are:" + oddNumbers);
console.log("Sum of all odd numbers:" + sumOfOddNumbers);

// Even Number
const evenArray = [];

for (i = 78; i <= 98; i++) {
  if (i % 2 === 0) {
    evenArray.push(i);
    console.log('All even numbers: ', i);
  }

}

console.log('All even numbers from 78 to 98:',evenArray);


// addition


let evenNumbersSum = 0;
let evenNumber = '';

for(i = 78; i <= 98; i++) {
  if(i % 2 === 0) {
    evenNumbersSum += i;
    evenNumber += i;
    if(i < 97) {
      evenNumber += ' + '; 
    }
  }
}
console.log('Sum of all even numbers:', evenNumber);
console.log('Sum of all even numbers:', evenNumbersSum);