/* 

Write a loop 1 to 200. Use break to exit the loop once you find 100.

*/

for(x = 1; x <= 200; x++){
    if(x == 101) {
        break;
    }
    console.log(x);
}


let i = 1;
let myArray = [];
while(i <= 200) {
    if(i == 10){
        break;
    }
    myArray.push(i);
    console.log(i);
    i++;
}

console.log(myArray);