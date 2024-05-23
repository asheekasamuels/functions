// Function: Is a set of statements to be utilized as a needed.

// Example 1=> function declaration
// function display() {
//     console.log("Hello World");
// }
// display()
// function greeting(firstName , lastName) {
//     console.log(`my name is ${firstName} ${lastName}`);
// }

// Argument
// greeting('Zulkifl', 'Shaik')
// greeting('Asheeka', 'Samuels')

/*
Addition function to display the sum of two numbers
*/
// function addition(num1, num2) {
//     console.log(num1 + num2);
//    console.log(1, 3, 5, 6)
// }
// addition(7, 3)
// addition(7, 3, 2)
// addition(7, 3 , 1, 4)

// function calculateRectangleArea(length, width) {
//     console.log("Area:", length * width);
// }

// calculateRectangleArea(5, 4); // Output: Area: 20
// calculateRectangleArea(7, 3); // Output: Area: 21
// calculateRectangleArea(10, 6); // Output: Area: 60

// function sumOfValues(...args) {
//     console.log(args.filter(arg => typeof arg === 'number').reduce((total, num) => total + num, 0));
// }

// sumOfValues('asheeka', 1, 'zulkifl', 2, 3, 'armani', 4, 2, 3, 1, 'joel');

// Example 2=> return statement

// Example 3=> function with arguments

// Example 4=> function with default arguments

// Example 5=> rest operator as a functions argument

// function fetchData(callback) {

//     setTimeout(function() {
//       const data = [1, 2, 3, 4, 5];
//       callback(data); // Call the callback function with the fetched data
//     }, 1000);
//   }
  

//   function processData(data) {
//     console.log("Fetched data:", data);
//   }

//   fetchData(processData);
  
// Example of a for loop to iterate over an array (when you know when a loop will end)
// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// for (let i = 0; i < numbers.length; i++) {
//   console.log(numbers[i]);
// }

// Example of a while loop to iterate until a condition is met
// let count = 0;

// while (count < 10) {
//   console.log("Count:", count);
//   count++;
// }

// Example of forEach loop to iterate over an array
// let color = ['pink', 'blue', 'red'];

// color.forEach(function(color) {
//   console.log(color);
// });

 // Example of a for...in loop to iterate over object properties
// let person = {
//     name: 'Asheeka',
//     surname: 'Samuels',
//     age: 23,
//     city: 'Cape Town',
//     height: '4ft 9in',
//   };
  
//   for (let key in person) {
//     console.log(`${key}: ${person[key]}`);
//   }
  
let data = [9, 'Peter', 'Sipho', 3, 4, 11, 'Sarah', 'Sisi'];

data.forEach((value) => {
    if (typeof value === 'string' && value.charAt(0) === 'S') {
        console.log(value);
    }
});
