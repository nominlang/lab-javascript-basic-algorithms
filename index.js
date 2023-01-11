// Iteration 1: Names and Input

const hacker1="Nomin"
console.log(`The drivers name is ${hacker1}`);
const hacker2="Adam"
console.log(`The navigator's name is ${hacker2}`);


// Iteration 2: Conditionals

if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`);
} else if (hacker2.length > hacker1.length) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`);
} else {
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`);
}


// Iteration 3: Loops

const message = 'N O M I N';
 
const urgentMessage = message.toUpperCase();
console.log(urgentMessage);
 

 
const word = "Adam";
let wordReversed = "";

for (let i = word.length - 1; i >= 0; i--) {
  const char = word[i];
  wordReversed += char;
}
 
console.log(wordReversed);


const hacker1="Nomin"
const hacker2="Adam"

const testArray = ["Nomin", "Adam"];
letsorted = testArray.sort();
console.log(letsorted);

if (testArray[0] === "Adam") {
    console.log("navigator name: " + testArray[0] + " driver name: " + testArray[1]);
} else {
    console.log("driver name: " + testArray[0] + " navigator name: " + testArray[1]);
}
