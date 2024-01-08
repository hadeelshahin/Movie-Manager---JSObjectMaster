//using bind() to configure what this refer to :

const obj = {
  firstName: "Hadeel",
  lastName: "Shahin",
};

function greet(greeting = "") {
  return `${greeting} : ${this.firstName}, ${this.lastName}`;
}

//console.log(greet.bind(obj,'Welcome'));  // this will not work , bind create new function and does not execute the function immediatly
const boundFunction = greet.bind(
  obj,
  "Welcome using bind with seperated function"
);
console.log(boundFunction());

//or use call() for immediate execution
console.log(greet.call(obj, "using call() for immediate execution "));
// using apply() we can pass array:
const numbers = [1, 2, 3, 4, 5];
function sum() {

  return this.reduce((acc, current)=>  acc+current ,2);  // important when use literals we have to use return
}
const total=sum.apply(numbers);
console.log(total); //15 
// function getNextMaximumNumber(arr, num) {
//     // Create a copy of the array to avoid mutating the original array
//     const sortedArray = arr.slice().sort((a, b) => a - b);
  
//     const index = sortedArray.indexOf(num);
  
//     if (index !== -1 && index !== sortedArray.length - 1) {
//       return sortedArray[index + 1];
//     } else {
//       return null; // Return null if number doesn't exist or it's the maximum
//     }
//   }
  
//   const numbers = [10, 7, 4, 9, 11];
//   const givenNumber = 9;
  
//   const nextMax = getNextMaximumNumber(numbers, givenNumber);
//   console.log(nextMax); // Output: 10
const teamMembers = {
  teamName: "Blue Rockets",
  members: ["Hadeel", "Asma", "muna", "rena"],
  getTeam() {
    this.members.forEach((m)=> {
      console.log(`${m} :${this.teamName}`);
    });
  },
};
teamMembers.getTeam();
