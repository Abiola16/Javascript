console.log("hello world");

// alert("hello");


// modify the webpage
// document.body.innerHTML = "hello"; 


// Oeprators 
// +
// -
// *
// /


// Using brakcets to control whih one gets done first
// (1 + 1) * 3


// Rounding up numbers
// var math = Math.round(2.3);
// console.log(math);

// var mat = Math.round(2.8);
// console.log(mat);

// var ma = Math.round((2095 + 799) * 0.1) / 100;
// console.log(ma);


// Strings   combining strings together is called CONCATENATION
// 'hello'
// "hello"
// `hello`  template strings:  

// var im = "$" + (2095 + 799) / 100;
// console.log(im);

// to round up
// // var im = "$" + Math.round(20.95 + 7.99);
// // console.log(im);

// var m = "Items (" + (1 + 1) + "): $" + (2095 + 799) / 100;
// console.log(m)


// Escape characters
// console.log('I\'m learning javascript');
// console.log("I'm learning \njavascript");


// HTML + CSS + JAVASCRIPT


// Variables
// let variable1 = 3;
// console.log(variable1);

// let calculation = 2 + 2;
// console.log(calculation);

// let result = calculation + 2;
// console.log(result);

// let variable1 = 1;
// variable1 += 2;
// console.log(variable1);

// var variable1 = 1;
// console.log(variable1);
// variable1 = 2;
// console.log(variable1);

// const variable2 = 3;

// var variable3 = 3;

// console.log(typeof 3);
// console.log(typeof variable3);
// console.log(typeof "mujeeb");
// console.log(typeof true);


// Add to cart
// let cartQuantity = 0;


// Booleans
// true and false

// console.log(3 < 5);
// console.log(typeof true); 


// If statements
// if (true) {
//         console.log("hello");
//     }

// if (false) {
//         console.log("hello");
//     } else { console.log("no");
// }

// if (15 >= 16) {
//     console.log("you can drive");
// } else {
//     console.log("you cant drive");
// }


// if (10 >= 16) {
//     console.log("you can drive");
// } else if(15 >= 14){
//     console.log("almost");
// } else {
//     console.log("you cant drive");
// }


// const age = 15;
// if (age >= 16) {
//     console.log("you can drive");
// } else if(age >= 14){
//     console.log("almost");
// } else {
//     console.log("you cant drive");
// }


// Logical operators  
// && =  and
// || = or


// Truthy and falsy values
// if (0) {
//     console.log("truthy");
// }

// falsy values- 0  ''   NaN(not a number)  undefined  null  any other ones are trh truthy values

// const cartQuantity = 5;

// if (cartQuantity) {
//     console.log('cart has products')
// }

// console.log(!0) 

// console.log('text'/ 5);

// let variable1;
// console.log(variable1);

// Ternary operatora
// const result = 21 > 22 ? 'true' : 'false';
// console.log(result);

// Guard operator
// false && console.log('helloo');

// const message = 5 && 'hello';
// console.log(message);

// Default operator
// const currency = 'EUR' || 'USD';
// console.log(currency)


// Functions
// function function1() {
//     console.log('hello');
//     console.log('2 + 2');
// }
// function1();
// function1();

// Rock paper and scissors
// let  computerMove = '';
// function pickComputerMove() {
//     const randomNumber = Math.random();
//     let  computerMove = '';

//     if (randomNumber >= 0 && randomNumber < 1/3) {
//          computerMove = 'rock';
//     } else if (randomNumber >= 1/3 && randomNumber < 2/3) {
//          computerMove = 'paper';
//     } else if (randomNumber >= 2/3 && randomNumber < 1) {
//           computerMove = 'scissors'; 
//     }
//     console.log(computerMove);
//     return 5;
// }


// function playGame(playerMove) {
//      const computerMove = pickComputerMove();
//      let result = '';
//      if (playerMove === 'scissors') {
//           if (computerMove === 'rock') {
//                result = 'you lose';
//           } else if (computerMove === 'paper') {
//                result = 'you win';
//           } else if (computerMove === 'scissors') {
//                result = 'tie';
//           }

//      } else if (playerMove === 'paper') {
//           if (computerMove === 'rock') {
//                result = 'you win';
//           } else if (computerMove === 'paper') {
//                result = 'tie';
//           } else if (computerMove === 'scissors') {
//                result = 'you lose';
//           }

//      } else if (playerMove === 'rock') {
//           if (computerMove === 'rock') {
//                result = 'tie';
//           } else if (computerMove === 'paper') {
//                result = 'you lose';
//           } else if (computerMove === 'scissors') {
//                result = 'you win';
//           }
//      }

//      alert(`you picked ${playerMove}. computer picked ${computerMove}. ${result}`);
// }

// function pickComputerMove() {
//      const randomNumber = Math.random();

//      let computerMove = '';

//      if (randomNumber >= 0 && randomNumber < 1 / 3) {
//           computerMove = 'rock';
//      } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
//           computerMove = 'paper';
//      } else if (randomNumber >= 2 / 3 && randomNumber < 1) {
//           computerMove = 'scissors';
//      }

//      return computerMove;
// }


// Return statement    lets us get a value out of a function   and also ends a function


// Parameters     puts a value into a function
// function calculateTax(cost, taxPercent = 0.1) {
//      console.log(cost * taxPercent);
// }
// calculateTax(2000, 0.2);
// calculateTax(5000);


// Objects
// const product = {
//      name: 'socks',
//      price: '1090'
// };
// console.log(product);
// console.log(product.name);

// dot notation
// product.name = 'cotton socks';
// console.log(product['name']);
// console.log(product)

// product.color = 'blue';
// console.log(product);

// delete product.color;
// console.log(product);

// bracket notation    we can use 
// const product2 = {
//     name: 'shirt',
//     time: 'delivery-time',
//     rating: {
//         stars: 4.5,
//         count: 87
//     },
//     fun: function function1() {
//         console.log('function inside object')
//     }
// };
// console.log(product2);
// console.log(product2['name']);
// console.log(product2['time']);
// console.log(product2.rating['count']);
// console.log(product2.fun);
// product2.fun();

// console.log(typeof console.log);


// JSON          allows you to send data to another computer and to be saved in storage
// console.log(JSON.stringify(product2));

// const jsonString = JSON.stringify(product2)
// console.log(JSON.parse(jsonString));


// localStorage       allows you to save value more permanently



// console.log('hello'.length);
// console.log('hello'.toUpperCase());
// console.log('HELLO'.toLowerCase());
// console.log('HELLO'.toLocaleLowerCase());
// console.log('hello'.toLocaleUpperCase());

// const object1 ={
//     message: 'hello'
// };
// const object2 = object1;

// object1.message = 'welcome';
// console.log(object1);
// console.log(object2);

// const object3 = {
//     message: 'welcome'
// };
// console.log(object3);
// console.log(object3 === object1);
// console.log(object2 === object1);

// const object4 = {
//     message: 'welcome',
//     price: 799
// };

// // Desturcting
// // const message = object4.message;

// // do this intead
// const {message, price} = object4;
// console.log(message);
// console.log(price);

// const object5 = {
//     // message: message

        // do this instead    Shorthand property
//     // message,
//     // method: function function1() {
//     //     console.log('method');
//     // }
    
//     // do this instead   Shorthand method
//     method() {
//         console.log('method');
//     }
// };
// console.log(object5);
// object5.method();



// Document Object Model (DOM)




// Arrays and loops
// const myArray = [10, 9, 'mujeeb', true, {age: 18} , [1, 2]];
// console.log(myArray);

// console.log(Array.isArray([1, 2]));
// console.log(myArray.length)
// console.log(myArray[1] = 10);
// console.log(myArray); 

// myArray.push(100);
// console.log(myArray);

// myArray.pop(100);
// console.log(myArray);

// myArray.unshift(100);
// console.log(myArray);

// myArray.shift(100);
// console.log(myArray);

// splice     removes an array
// newArray = [[1, 2, 3], [4, 5, 6]];
// newArray.splice(0, 0);
// console.log(newArray);

// newArray = [1, 2, 3];
// newArray.splice(0, 2);
// console.log(newArray);
 


// Loops
// while loop
// let i = 1;

// while (i <= 5) {
// console.log(i);
// i++;
// }

// for loop
// for (i = 1; i <=5; i++) {      
// 	 console.log(i);
// }

// use a while loop for a non standard loop
// let randomNumber = 0;
// while(randomNumber < 0.5) {
// 	randomNumber = Math.random(); 
// }
// console.log(randomNumber);

// const todoList = [
// 	'make dinner',
// 	'wash dishes',
// 	'listen to durk'
// ];
// for (let i = 0; i < todoList.length; i++) {
// 	const value = todoList[i];
// 	console.log(value);
// }

// const nums = [1, 1, 3];
// let total = 0;


// for (let i = 0; i < nums.length; i++) {
// 	const num = nums[i];
// 	total += num;
// }
// console.log(total);

// const nums = [1, 1, 3];
// let total = 0;


// for (let i = 0; i < nums.length; i++) {
// 	const num = nums[i];
// 	total += num;
// }
// console.log(total);

// const numsDoubled = [];
// for (let i =0; i < nums.length; i++) {
// 	const num = nums[i];
// 	numsDoubled.push(num * 2);
// }
// console.log(numsDoubled)



// const array1 = [1, 2, 3];
// const array2 = array1.slice();
// array2.push(4);
// console.log(array1);
// console.log(array2);

// const [firstValue, secondValue] = [1, 2, 3];


// for (let i = 0; i <= 10; i++) {
//   if (i % 3 === 0) {
//     continue;
//   }
//   console.log(i);
//    if ( i === 8) {
//     break;
//    }
// }

// let i = 1;
// while(i <= 10) {
//   if (i % 3 === 0) {
//     i++
//     continue;
//   }
//   console.log(i)
//   i++;
// }

// function doubledArray(nums) {
//   const numsDoubled = [];
//   for (let i = 0; i < nums.length; i++) {
//     const num = nums[i];
//     if (num === 0) {
//       return numsDoubled;
//     }
//     numsDoubled.push(num * 2);
//   }
//   return numsDoubled;
// }
// console.log(doubledArray([1, 1, 3]));
// console.log(doubledArray([2, 2, 5, 0, 5]));



// // Advanced functions    functions are values and can be saved in a variable
// function greeting() {
//    console.log('hello');
// }
// greeting();

// const num = 2;
// // saving functions in variables    anonymous function
// const function1 = function() {
//   console.log('hello 2');
// };
// console.log(function1);
// console.log(typeof function1);
// function1();

// // function saved in an object are called methods
// const object1 = {
//   num: 2,
//   fun: function() {
//     console.log('hello 3');
//   }
// };
// object1.fun();

// // passing a value into a function
// function display(param) {
//   console.log(param);
// }
// display(2);

// // passing functions into a function   callback
// function run(param){
//   param();
// }
// run(function () {
//   console.log('hello 4');
// });

// asynchronous code  - means the computer wont wait for a line to finish before going to the next line
// synchronous code  - means the computer wait for a line to finish before going to the next line
// setTimeout(function() {
//   console.log('timeout');
//   console.log('timeout 2')
// ;}, 3000);

// console.log('next line');

// setInterval(function() {
//   console.log('interval');
// }, 3000);

// console.log('next line 2');

// [
//   'make dinner',
//   'wash dishes',
//   'listen to durk'
// ].forEach( (value, index) => {
//   if (value === 'wash dishes') {
//     return;
//   }
//   console.log(index);
//   console.log(value);
// });



// Arrow functions
// const regularFunction = function(param, index) {
//   console.log('hello');
//   return 5;
// }

// const arrowFunction = (param, index) => {
//   console.log('hello');
//   return 5;
// };
// arrowFunction();

// const oneParam = param => {
//   console.log(param + 1);
// };

// const oneLine = () => 2 + 3;
// console.log(oneLine());

// const object2 = {
//   method: () => {

//   },
//   method() {

//   }
// };


// console.log([1, -3, 5].filter((value, index) => {
//   if (value >= 0){
//     return true;
//   } else {
//     return false;
//   }

//   // or
//   return value >= 0;
// }));

console.log([1, 1, 3].map((value) => {
  return value * 2;
}));

console.log([1, 1, 3].map(value => value * 2));