 console.log("hello world");

// Data types 
// undefined - is not defined
// null - nothing
// boolean - true/false
// number - number
// object - 
// string - "", '', `` 
// symbol - 


// Declaring variables
// var can be changed
// var myName = "baeu"

// let ourName = "mujeeb"

// const cant be changed
// const pi = 3.14


// Declaring varibles 
// var a;
// // Assigning  and Declaring varibles 
// var b = 2;
// console.log(a);

//  a = 7;
//  b = a;

// console.log(a);

// Types of functions

// Named Functions
// Named functions are defined with a specific name.
// They can be declared using the function keyword.
// They can be called by their name.

// function add(x, y) {
//     return x + y;
// }
// let result = add(3, 4);
// console.log(result)

// Anonymous Functions
// Anonymous functions have no name and are defined inline.
// They are often used as arguments to other functions or assigned to variables.

// let multiply = function(x, y) {
//     return x * y;
// };
// let result = multiply(2, 5);
// console.log(result);

// Arrow Functions
// Arrow functions are a concise way to write functions.
// They have a shorter syntax and do not have their own this binding.

// const square = (x) => x * x;

// let result = square(5);
// console.log(result)


// var a = 10; 
// var b = 12; 
// var c = "I am a "; 

// c = c + "string";
// console.log(c);

// b = a -2;
// console.log(b);



// Adding numbers
// var sum = 10 + 10;
// console.log(sum);

// Subtracting numbers
// var sum = 10 - 10;
// console.log(sum);

// Multiplication
// var product = 9*9;
// console.log(product);

// Dividing numbers
// var quotient = 30 / 10;
// console.log(quotient);
 
// Incrementing numbers
// var inVar = 20;
// inVar = inVar + 1;
// console.log(inVar);
// // instead do this
// var inVar = 20;
// inVar++
// console.log(inVar);

// Decrementing numbers
// var inVar = 20;
// inVar = inVar - 1;
// console.log(inVar);
// // instead do this
// var inVar = 20;
// inVar--
// console.log(inVar);

// Remainder
// var remainder;
// remainder = 11 % 3;
// console.log(remainder);

// addition
// var a = 3;
// a = a + 12;
// console.log(a);
// instead do this
// var a = 3;
// a += 12;
// console.log(a);

// subtraction
// var a = 5;
// a = a - 10;
// console.log(a);
// // instead do this
// var a = 5;
// a -= 10;
// console.log(a);

// multiplication
// var a = 5;
// a = a * 10;
// console.log(a);
// // instead do this
// var a = 5;
// a *= 10;
// console.log(a);

// division
// var a = 5;
// a = a / 10;
// console.log(a);
// // // instead do this
// var a = 5;
// a /= 10;
// console.log(a);



// var firstName = "Mujeeb";
// var lastName = "Adewuyi";



// To escape the srting shit
// var myStr = "I am a dog\"what do i do\"my name";
// console.log(myStr);
// // or use single quotes
// var myStr = 'I am a dog"what do i do"my name';
// console.log(myStr);
// // or use bacticks
// var myStr = `I am a dog"what do i do"my name`;
// console.log(myStr);

 
/****
Code Output
\' single quote
\" double quote
\\ backslash
\n newline
\r carriage return
\ tab
\b backspace
\f form feed
****/

// var myStr = "FirstLine\n\t\\Secondline\nThirdline";
// console.log(myStr);


// var myStr = "My name is" + " Mujeeb";
// console.log(myStr)
// // Or
// var myStr = "My name is";
// myStr +=" Mujeeb";
// console.log(myStr);


// var myName = "mujeeb";
// var ourName = "hello my name is " + myName + " and i am";
// console.log(ourName);
// Or 
// var myName = "mujeeb";
// var ourName = "adewuyi";
// ourName += myName;
// console.log(ourName);


// Finding length of string
// var myName = "mujeeb";
// myName = myName.length;
// console.log(myName);)


// Bracket notation to find string character in string
// var fisrtLetterOfMyName = "";
// var myName = "ada";
// fisrtLetterOfMyName = myName[0];
// console.log(fisrtLetterOfMyName);

// var fisrtLetterOfMyName = "";
// var myName = "ada";
// fisrtLetterOfMyName = myName[1];
// console.log(fisrtLetterOfMyName);


// Bracket notation to find last string character in string
// var myName = "mujeeb";
// var lastLetter = myName[myName.length-1];
// console.log(lastLetter);

// var myName = "mujeeb";
// var lastLetter = myName[myName.length-3];
// console.log(lastLetter);

// var a = "1001"
// var lastNumber = a [a.length-1];
// console.log(lastNumber);



// String immubitability (0nly works for let and var)
// var myName = "oujeeb";
// myName = "mujeeb";
// console.log(myName);


// Word blanks
// function wordBlanks(myNoun, myAdjective, myVerb, myAdverb) {
//     var result = "";
//     result += "the " + myAdjective + " " + myNoun + " " + myVerb + " to the " + myAdjective + " store";

//     return result;
// }
// console.log(wordBlanks("dog", "big", "ran", "quickly"));  
// console.log(wordBlanks("bike", "slow", "flew", "slowly"));  



// Store multiply values with arrays
// var array =["Mujeeb", 1];
// console.log(array)


// Nested arrays
// var arrays = [["mujeeb", 1],["array", 2]];
// console.log(arrays);


// Access array data with indexes
// var array = [100, 200, 300];
// var data = array[0];
// console.log(data);

// var array = ["mujeeb", "adewuyi", "abiola"];
// var data = array[2];
// console.log(data);


// Modify array with indexes
// var old = [1, 2, 3];
// old[1]= 6;
// console.log(old);


// Access multi-dimensional arrys with indexes
// var myArray = [[1,2,3], [4,5,6], [7,8,9], [[10,11,12], 13, 14]];

// var myData = myArray[2][1];
// console.log(myData);

// var myData = myArray[3][1];
// console.log(myData);

// var myData = myArray[3][0][2];
// console.log(myData);

// var myData = myArray[3][0][1];
// console.log(myData);


// Manipulate arrays with unshift() adds to first
// var ourArray = ["mujeeb", "adewuyi", "cat"];
// ourArray.shift();
// ourArray.unshift("Happy");
// console.log(ourArray);

// Manipulate arrays with shift() removes the first
// var ourArray = [20, 30, 40];
// var removedFromArray = ourArray.shift();
// console.log(ourArray);

// Manipulate arrays with push() adds to the last
// var ourArray = ["mujeeb", "adewuyi", "cat"];
// ourArray.push(["happy", "joy"]);
// console.log(ourArray);


// Manipulate arrays with pop() reomves  the last 
// var ourArray = [20, 30, 40];
// var removedFromArray = ourArray.pop();
// console.log(ourArray);


// var ourArray =[[1, 2, 3], [4, 5, 6]];
// var removedFromArray = ourArray.pop();
// console.log(ourArray);


// var ourArray =[[1, 2, 3], [4, 5, 6]];
// var removedFromArray = ourArray.shift();
// console.log(ourArray); 



// Shopping list
// var myList = [["cereal", 3], ["milk", 2], ["bannanas", 3], ["juice, 2"], ["eggs", 12]];


// Write reusable code with functions
// function mujeeb() {
//  console.log("Hey, world");
// }
// mujeeb();


// Passing values to functions with arguments
// function mujeeba(a, b) {
//     console.log(a - b);
// }
// mujeeba(10, 5);

// function mujeeb(a, b) {
//     console.log(a + b);
// }
// mujeeb(10, 5);


// Global scope and functions   outside the function
// var myName = "mujeeb";
// function myFunction() {

// }
// myFunction();

// Local scope and functions    in side the function
// function mujeeb() {
//     var ram = 2;
//     return ram;
// }
// console.log(mujeeb());


// Global vs Local scope in functions     local wins
// var outerWear = "t-shirt";
//  var myData =  (() => {
//     var outerWear = "sweater";

//     return outerWear;
// })();
// console.log(myData);

// var outerWear = "t-shirt";
// function myOutfit() {
//     var outerWear = "sweater";

//     return outerWear;
// }
// console.log(myOutfit())


// Return a value from a function with return 
// function minusSeven(num) {
//     return num - 7;
// }
// console.log(minusSeven(10));

// function name(a) {
//     return a + 2
// }
// console.log(name(7));


// Understanding undefined value returned from a function
// var sum = 0;
// function addThree() {
//    sum = sum + 3;
//    return sum;
// }
// console.log(addThree());

// var add = 0; 
// function addFive() {
//    add += 5;
//    return add;
// }
// console.log(addFive());



// Assignment with a returned value
// var processed = 0;
// function processedArg(num) {
//     return num + 2;

// }
// processed = processedArg(5);
// console.log(processed);

// var one = 0;
// function oneTwo(num) {
//     return (num + 10) / 2;
// }
// one = oneTwo(10);
// console.log(one)


// Stand in line
//  function nextInline(arr, item) {
//     arr.push(item);
//     return arr.shift();
// }
// var testArr = [1,2,3,4,5];

// console.log("Before:" + JSON.stringify(testArr));
// console.log(nextInline(testArr, 6));
// console.log("After:" + JSON.stringify(testArr));


// Boolean Values only true or false  no quotation marks
// function welcomeToBooleans() {
//     return true;
// }
// function welcomeToBooleans() {
//     return false;
// }


// Use conditional logic with If statement
// function trueOrFalse(wasThatTrue) {
//     if (wasThatTrue) {
//         return "yes, that was true";
//     }
//     return "no, that was false";
// }
// console.log(trueOrFalse(true));


// Comparison with the equality operator ==
// function testEqual(num) {
//     if (num == 12) {
//         return "true";
//     }
//     return "false";
// }
// console.log(testEqual(12));


// Comparison with the strict equality operator === 
// function testEqual(num) {
//     if (num === 12) {
//         return "true";
//     }
//     return "false";
// }
// console.log(testEqual(12));

// but if with string would return false because it is strict

// function testEqual(num) {
//     if (num === "12") {
//         return "true";
//     }
//     return "false";
// }
// console.log(testEqual(12));


// Practice Comparing different values
// function compareEquality(a, b) {
//     if ( a === b) {
//         return "yes";
//     }
//     return "no";
// }
// console.log(compareEquality(10, "10"));


// Comparison with the inequality operator
// function testNotEqual(val) {
//     if (val != 99){
//         return "not equal";
//     }
//     return "equal";
// }
// console.log(testNotEqual(99));


// Comparison with the strict inequality operator
// function testStrictNotEqual(val) {
//     if (val !== 99){
//         return "not equal";
//     }
//     return "equal";
// }
// console.log(testStrictNotEqual("99"));


// Comparison with the logical and operator
// function testGreaterAndLesserThan(val) {
//     if (val > 100){
//         return "greater";
//     }
//     if (val < 10){
//         return "lesser";
//     }
//     return "same";
// }
// console.log(testGreaterAndLesserThan(10));


// Comparison with greater than or equal to operator
// function testGreaterOrEqual(num) {
//     if (num >= 20) {
//         return "20 0r over"
//     }
//     if (num >= 10) {
//         return "10 or over"
//     }
//     return "lesser"
// }
// console.log(testGreaterOrEqual(10));


// Comparison with the less than operator
// function testLessThan(val) {
//     if (val < 25) {
//         return "under 25";
//     }
//     if (val < 55) {
//         return "under 55";
//     }
//     return "55 0r over";
// }
// console.log(testLessThan(35));


// Comparison with the less than or equal to operator
// function testLessThanOrEqual(val) {
//     if (val <= 10){
//         return "less than or equal to 10"
//     }
//     if (val <= 24){
//         return "less than or equal to 24"
//     }
//     return ""
// }
// console.log(testLessThanOrEqual(24));
 


// Comparisons with the logical and operator
// function testLogicalAnd(val) {
//     if (val >= 5) {
//         if (val >= 25) {
//             return "yes";
//         }
//         return "no";
//     }
//     return "i dont know";
// }
// console.log(testLogicalAnd(0));

// do this instead

// function testLogicalAnd(val) {
//     if (val == 25 && val > 10)  {
//         return "yes";
//     } else if (val >= 5){
//     return "i dont know"; 
//     }
// }
// console.log(testLogicalAnd(10));
 

// Comparisons with the logical or operator
// function testLogicalOr(val) {
//     if (val < 10) {
//         return "outside"
//     }
//     if (val > 20) {
//         return "outside"
//     }
//     return "inside"
// }
// console.log(testLogicalOr(15));

// do this instead

// function testLogicalOr(val) {
//     if (val < 10 || val > 20) {
//         return "outside";
//     }
//     return "inside";
// }
// console.log(testLogicalOr(15));



// Else statements
// function testElse(val) {
//     var result = "";
//     if (val > 5) {
//         result = "Bigger than 5";
//     } else {
//         result = "5 or smaller";
//     }
//     return result;
// } 
// console.log(testElse(10));


// Else If statements
// function testElseIf(val) {
//     if (val > 10) {
//         return "greater than 10";
//     } else if (val < 5) {
//         return "smaller than 5";
//     } else{
//         return "between 5 and 10";
//     }
// }
// console.log(testElseIf(7));


// Logical order in If statemnts    once the first condition is met it doesnt check for the other conditions
// function orderMyLogic(val) {
//     if (val < 10) {
//         return "less than 10";
//     } else if (val < 5) {
//         return "less than 5";
//     } else {
//         return "greater than or equal to 10";
//     }
// }
// console.log(orderMyLogic(3));

// do this instead

// function orderMyLogic(val) {
//     if (val < 5) {
//         return "less than 5";
//     } else if (val < 10) {
//         return "less than 10";
//     } else {
//         return "greater than or equal to 10";
//     }
// }
// console.log(orderMyLogic(3));



// Chaining If Else Statements
// function testSize(num) {
//     if (num < 5) {
//         return "tiny"
//     } else if (num < 10) {
//         return "small"
//     } else if (num < 15) {
//         return "medium"
//     } else if (num <= 20) {
//         return "large"
//     } else {
//         return "huge"
//     }
// }
// console.log(testSize(16));


// Golf code
// var names = ["Hole-in-one", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go home"]
// function golfScore(par, strokes) {
//     if (strokes == 1) {
//         return names[0]
//     } else if (strokes <= par - 2) {
//         return names[1]
//     } else if (strokes == par - 1) {
//         return names[2]
//     } else if (strokes == par) {
//         return names [3]
//     } else if (strokes == par + 1) {
//         return names [4]
//     } else if (strokes == par + 2) {
//         return names [5]
//     } else if (strokes == par + 3) {
//         return names [6]
//     }
// }
// console.log(golfScore(5, 8));


// var grade = ["A1", "B2", "C4", "C5", "E8", "F9"]
// function testScore(score) {
//     if (score <= 15) {
//         return grade[5]
//     } else if (score <= 20) {
//         return grade[4]
//     } else if (score <= 30) {
//         return grade[3]
//     } else if (score <= 35) {
//         return grade[2]
//     } else if (score <= 40) {
//         return grade[1]
//     } else if (score <=45) {
//         return grade[0]
//     }
// }
// console.log(testScore(41));


 
// Switch statements
// function caseInSwitch(val) {
//     var answer = "";
//     switch(val) {
//         case 1:
//             answer = "alpha";
//             break;
//         case 2:
//             answer = "beta";
//             break;
//         case 3:
//             answer = "gama";
//             break;
//         case 4:
//             answer = "delta";
//             break;
//     }
//     return answer;
// }
// console.log(caseInSwitch(2)



// Default options in switch statements
// function switchOfStuff(val) {
//     var answer = "";
//     switch(val) {
//                 case "a":
//                     answer = "apple";
//                     break;
//                 case "b":
//                     answer = "bird";
//                     break;
//                 case "c":
//                     answer = "cat";
//                     break;
//                 default:
//                     answer = "no answer";
//                     break;
//             }
//             return answer;
// }
// console.log(switchOfStuff("c"));


// Multiple identical options in switch statements
// function sequentialSizes(val) {
//     var answer = "";
//     switch(val) {
//         case 1:
//         case 2:
//         case 3:
//             answer = "Low";
//             break;
//         case 4:
//         case 5:
//         case 6:
//             answer = "Medium";
//             break;
//         case 7:
//         case 8:
//         case 9:
//             answer = "High";
//             break;
//         default:
//             answer = "no pressure"
//             break;
//     }
//     return answer;
// }
// console.log(sequentialSizes("1"));


// Replacing if else chains with switch
// assignment
// function changeToSwitch(val) {
//     var answer = "";

//     if (val === "a") {
//         return "alpha";
//     } else if (val === "b") {
//         return "beta";
//     } else if (val === "c") {
//         return "gamma";
//     } else {
//         return "no answer"
//     }
//     return answer;
// }
// console.log(changeToSwitch("d"));

// function changeToSwitch(val) {
//     var answer = "";
//     switch (val) {
//         case "a":
//             answer = "alpha"
//             break;
//         case "b":
//             answer = "beta"
//             break;
//         case "c":
//             answer = "gamma"
//             break;
    
//         default:
//             answer = "no answer"
//             break;
//     }
//     return answer;
// }
// console.log(changeToSwitch("d"));


// Returning boolean values from functions
// function isLess(a, b) {
//     if (a < b) {
//         return true;
//     } else {
//         return false;
//     }
// }
// console.log(isLess(10, 15));

// dont be stupid do this instead

// function isLess(a, b) {
//     return a < b;
// }
// console.log(isLess(10, 15)); 


// Returning early pattern from functions
// function abTest(a, b) {
//     if (a < b || b < 0) {
//         return undefined;
//     }
//     return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2));
// }
// console.log(abTest(-2, 2));


// Counting cards
// var count = 0; 
// function cc(card) {
//     switch(card) {
//         case 2:
//         case 3:
//         case 4:
//         case 5:
//         case 6:
//             count++;
//             break;
//         case 10:
//         case "J":
//         case "Q":
//         case "K":
//         case "A":
//             count--;
//             break;
//     }
//     var holdBet = "Hold";
//     if (count > 0) {
//         holdBet = "bet"
//     }
//     return count + " " + holdBet;
// }
// // cc(2); cc("K"); cc(10); cc("K"); cc("A");
// console.log(cc("K"));



// Build Javascript objects     PROPERTIES are before the column while VALUES are after the column
// var ourDog = {
//    "name": "Capmer",
//    "legs": 4,
//    "tails": 1,
//    "friends": ["everything", "mujeeb"]
// };
// console.log(ourDog);

// var myDog = {
//     "name": "Quincy",
//     "legs": 3,
//     "tails": 2,
//     "friends:" []
// };



// Acessing object propeties with dot notation
// var things = {
//     "mop": "moping",
//     "broom": "swepping",
//     "brush": "washing"
// };

// var whatMopIsUsedFor = things.mop;
// var whatBroomIsUsedFor = things.broom;
// var whatBrushIsUsedFor = things.brush;


// Acessing object propeties with bracket notation    used anytime but necessary when there is space
// var bestFoods = {
//     "solid food": "beans",
//     "liquid food": "fanta"
// };

// var bestSolidFood = bestFoods["solid food"];
// var bestLiquidFood = bestFoods["liquid food"];

// console.log(bestLiquidFood);


// Acessing object propeties with variables
// var scores = {
//     20: "math",
//     30: "eng",
//     40: "phy"
// };

// var idk = 30;
// var grade = scores[idk];
// console.log(grade);


// Updating object properties
// var ourDog = {
//    "name": "Camper",
//    "legs": 4,
//    "tails": 1,
//    "friends": ["everything!"]
// };

// ourDog.name = " Camper Mujeeb";
// ourDog["name"] = "Camper Mujeeb";
// console.log(ourDog.name);


// Add new properties to an object
// var myDog = {
//     "name": "Quincy",
//     "legs": 3,
//     "tails": 2 
// };
// myDog["bark"] = "woof";
// myDog.teeth = 3;
// console.log(myDog);


// Delete new properties to an object
// var myDog = {
//     "name": "Quincy",
//     "legs": 3,
//     "tails": 2,
//     "friends": []
// };
//  myDog["bark"] = "woof";
// delete myDog.bark;
// console.log(myDog);


// Using obejcts for lookups
// function phoeneticLookup(val) {
//     var result = "";

//     var lookup = {
//         "a": "alpha",
//         "b": "bravo",
//         "c": "chicago",
//         "d": "dog"
//     };
//     result = lookup[val];

//     return result;
// }
// console.log(phoeneticLookup("c"));


// Testing obejcts for properties
// var myObj = {
//     a: "alpha",
//     b: "beta",
//     c: "gamma"
// };


// function checking(checkprop) {
//     if (myObj.hasOwnProperty(checkprop)) {
//         return myObj[checkprop];
//     } else {
//         return "not found";
//     }
// }
// console.log(checking("a"));



// Manipulating complex objects       array and objects
// var myMusic = [
//     {
//         "artist": "Mujeeb",
//         "title": "Fallin in luv",
//         "release_year": 2023,
//         "formats": [
//             "youtube video"
//         ]
//     },
//     {
//         "artist": "pop",
//         "title": "Fallin in luv",
//         "release_year": 2023,
//         "formats": [
//             "youtube video",
//             "cd"
//         ]
//     }
// ]


// Acessing nested object
// var myLife = {
//     "mujeeb": {
//         "music": {
//             "drill music": "dior",
//             "slowsongs": "love language"
//         },
//         "movies": {
//             "cia": "red notice"
//         }
//     }
// };
// var myBestDrillMusic = myLife.mujeeb.music["drill music"];
// console.log(myBestDrillMusic);
// var myBestCiaMovie = myLife["mujeeb"]["movies"]["cia"];
// console.log(myBestCiaMovie);


// Acessing nested arrays   
// var myClothes = [
//     {
//         type: "louis-vuitton",
//         list: [
//             "balenciaga",
//             "jordans",
//             "airforce"
//         ]
//     },
//     {
//         type: "amiris",
//         list: [
//             "red",
//             "yellow",
//             "black"
//         ]

//     }
// ]
// var myList = myClothes[0].list[0];
// console.log(myList);


// Record collection
//  var music = {
//     "2023": {
//         "album": "Almost healed",
//         "artist": "Lil durk",
//         "tracks": [
//             "Pellecoat",
//             "Moment of truth"
//         ]
//     },
//     "2022": {
//         "album": "Her loss",
//         "artist": "Drake 21 savage",
//         "tracks": [
//             "alright",
//             "ok"
//         ]
//     },
//     "2021": {
//         "album": "The voice of the heroes", 
//     }
//  }

// var musicCopy = JSON.parse(JSON.stringify(music));
// console.log(musicCopy);

// function updateMusic(id, prop, value) {
//     if (value === "") {
//         delete collection[id][prop];
//     } else if (prop === "tracks") {
//         music[id][prop] = music[id][prop] || [];
//         music[id][prop].push(value);
//     } else {
//         music[id][prop] = value; 
//     }

//     return music;
// }
// console.log(updateMusic(2021, "artist", "abba"));



// Iterate with loops    loops allows you to run the same code multiple times
// var myArray = []
// var  i = 1;
// while(i < 6 ) {
//     myArray.push(i);
//     i++;
// }
// console.log(myArray);


// Iterate with for loop forwards      lesser than for forwards
// var myArray = []
// for (var i = 0; i < 5; i++){
//     myArray.push(i);
// }
// console.log(myArray);


// Iterate odd and even numbers with for loops forwards
// var myArray = []
// for (var i = 1; i < 10; i += 2){
//     myArray.push(i);
// }
// console.log(myArray);

// for even
// var myArray = []
// for (var i = 0; i < 10; i += 2){
//     myArray.push(i);
// }
// console.log(myArray);


// Count backwards with a for loops   greater than for bckwards
// var myArray = []
// for (var i = 10; i > 0; i--){
//     myArray.push(i);
// }
// console.log(myArray);

// for odd
// var myArray = []
// for (var i = 9; i > 0; i -= 2){
//     myArray.push(i);
// }
// console.log(myArray);

// for even
// var myArray = []
// for (var i = 10; i > 0; i -= 2){
//     myArray.push(i);
// }
// console.log(myArray);



// Iterate through an array with a for loop
// var myArray = [1, 2, 3, 4, 5];
// var ourArray = 0;

// for (var i = 0; i < myArray.length; i++) {
//     ourArray  += myArray[i];
// }
// console.log(ourArray);



// Nested for lopps
// function multiplyAll(arr) {
//     var product = 0;

//     for (var i = 0; i < arr.length; i++) {
//         for (var j = 0; j < arr[1].length; j++) {
//             product += arr[i][j];
//         }
//     }
//     return product;
// }
// var product = multiplyAll([[1,2],[3,4],[5,6,7]]);
// console.log(product);


// Iterate with Do.... while loops
// var myArray = []
// var  i = 10;

// do {
//     myArray.push(i);
//     i++;
// } while(i < 5)
// console.log(i, myArray);



// Profile lookup
// var contacts = [
//     {
//         "firstname": "Akira",
//         "lastname": "Laine",
//         "number": "00000000",
//         "likes": ["pizza", "coding", "brownie points"]
//     },
//     {
//         "firstname": "Kristian",
//         "lastname": "Ves",
//         "number": "unknown",
//         "likes": ["Javascript" , "gaming", "Foxes"]
//     },
// ];

// function lookUpProfile(name, prop){
//     for (var i = 0; i < contacts.length; i++) {
//         for (var j = 0; j < contacts[i].length; j++) {
//         if (contacts[i].firstname === name) {
//             return contacts[i][prop] || "no such property";
//         }
//     }
//     }
//     return "no such contacts";
// }

// var data = lookUpProfile("Sherlock", "likes");
// console.log(data);


// Generate random fractions   
// function randomFraction() {

//     return Math.random();
// }
// console.log(randomFraction())


// Generate random whole fractions
// var random = Math.floor(Math.random() * 20);
// console.log(random)

// function randomWholeNumber() {
//     return Math.floor(Math.random() * 20);
// }
// console.log(randomWholeNumber())


// Generate random whole numbers within a range
// function anything(myMin, myMax) {
//     return Math.floor(Math.random() * (myMax - myMin + 1) + myMin)
// }
// console.log(anything(1, 5))


// Use the parseInt function     converts string to integer
// function convertToInteger(str) {
//     return parseInt(str)
// }
// console.log(convertToInteger("56"));


// Use the parseInt function with a Radix   converts binary number to an integer  
// function convertToInteger(str) {
//     return parseInt(str, 2)
// }
// console.log(convertToInteger("10101"));


// Use the conditional (ternary) operator
// function checkEqual(a, b) {
//     if (a === b){
//         return "true"
//     } else {
//         return "false"
//     }
// }
// console.log(checkEqual(1, 3));

// do this instead
// function checkEqual(a, b) {
//     return a === b ? "yes" : "no";

//     // dont be stupid just write it like this
//     return a === b;
// }
// console.log(checkEqual(1, 3));


// Use multiple conditional (ternary) operators
// function checkSign(num) {
//     return num > 0 ? "positive" : num < 0 ? "negative" : "zero"
// }
// console.log(checkSign(1))


// Differnces between var and let keywords      let does not let you declare a variable twice
// var myName = "mujeeb";
// var myName = "adewuyi";

// console.log(myName);
// "use strict"
// let myName = "mujeeb";

// mujeeb =  "adewuyi";

// console.log(myName);


// Use "use strict" to catch common coding mistakes  either globally or locally


// Compare scopes of the let and var kewywords 
// function checkScope() {
//     "use strict";
//     var i = "function scope";
//     if (true) {
//         i = "block scope";
//         console.log("block scope is:", i);
//     }
//     console.log("function scope is:", i);
// }
// checkScope();

// it would be block scope but if it was Let it would be different
// function checkScope() {
//     "use strict";
//     let i = "function scope";
//     if (true) {
//        let i = "block scope";
//         console.log("block scope is:", i);
//     }
//     console.log("function scope is:", i);
// }
// checkScope();


// Declare a read-only variable with the const keyword
// function printManytimes(str) {
//     "use strict";

//     const SENTENCE = str + "is cool!";

//     // sentence = str + "is amazing!";

//     for(let i = 1; i < str.length; i += 2) {
//         console.log(SENTENCE);
//     }
// }
// printManytimes("mujeeb");


// Mutate an array declared with const    you would have to use bracket notation
// const s = [5, 7, 2];
// function editInPlace() {
//     "use strict";

//     // s = [2, 5, 7];
//     s[0] = 2;
//     s[1] = 5;
//     s[2] = 7;
//     // return editInPlace();
// }
// // editInPlace();
// console.log(editInPlace());


// Prevent object mutation
// function freezeObj() {
//     "use strict";
    
//     const MATH_CONSTANTS = {
//         PI: 3.14
//     };
// // doesnt allow math constants to change
//     Object.freeze(MATH_CONSTANTS);    

//     try {
//         MATH_CONSTANTS.PI = 7;
//     } catch(ex) {
//         console.log(ex);
//     }
//     return MATH_CONSTANTS.PI;
// }
// const PI = freezeObj();

// console.log(PI);            


// Use arrow functions to write concise anonymous functions
// var magic = function() {
//     return new Date();
// }

// var magic = () => {
//     return new Date();
// }

// // if we are returning one keyword we dont need the bracket and return
// var magic = () => new Date();



// Write arrow functions with parameters       concat is used for merging arrays
// var myConcat = (arr1, arr2, arr3, arr4) => arr1.concat(arr2, arr3, arr4) 
// console.log(myConcat([1,2],[3,4,5],[1,2],[3,4,5]))


// Write higher order arrow functions
// const realNumberArray = [4, 5.6, -9.8, 3.14, 42, 6, 8.34, -2];

// const squareList = (arr) => {
//     const squaredIntegers = arr.filter(num => Number.isInteger(num) && num > 0).map(x => x * x);
//     return squaredIntegers;
// };

// const squaredIntegers = squareList(realNumberArray);
// console.log(squaredIntegers);

// const increment = (function() {
//     return function increment(number = 2, value = 1) {
//         return number + value;
//     };
// })();
// console.log(increment(5, 2));
// console.log(increment(5));
// console.log(increment());



// Use the rest operator with function parameters
// const sum = (function() {
//     return function sum(x, y, z) {
//         const args = [x, y, z];
//         return args.reduce((a, b) => a + b, 0);
//     };
// })();
// console.log(sum(1, 2, 3));

// const sum = (function() {
//     return function sum(...args) {
//         return args.reduce((a, b) => a + b, 0);
//     };
// })();
// console.log(sum(1, 2, 3));


// Use the spread operator to evaluate arrays in-place
//   

// Use destructing assignment to assign variables from objects
// var arrays = {a: 2, b: 4, c: 6};

// var alpha = arrays.a
// var beta = arrays.b
// var gamma = arrays.c

// // do this instead
// var {a: alpha, b:beta, c:gamma} = arrays;

// const AVG_TEMPERATURES = {
//     today: 77.5,
//     tomorrow: 79
// };
// function getTemOfTomorrow(avgTemperatures) {
//     "use strcit"

//     const {tomorrow : tempOfTomorrow} = avgTemperatures;
//     return tempOfTomorrow;
// }
// console.log(getTemOfTomorrow(AVG_TEMPERATURES))


// Destructing assigmnet with nested objects
// const LOCAL_FORECAST = {
//     today: {min: 72, max: 83},
//     tomorrow: {min: 73.3, max: 84.6}
// };
// function getMaxTomorrow(forecast) {
//     "use strict"

//     const {tomorrow: {max: maxOfTomorrow}} = forecast;
//     return maxOfTomorrow;
// }
// console.log(getMaxTomorrow(LOCAL_FORECAST));


// Use Destructing assigmnet to assign variables from arrays
// const [z, x, , y] = [1, 2, 3, 4, 5, 6]
// console.log(z, x, y)


// let a = 8, b = 6;
// (() => {
//     // "use strict";

//     [a, b] = [b ,a]
// })();
// console.log(a);
// console.log(b);


// Use destructing assignment with the rest operator      ask chatgpt why the const = arr is done twice
// const source = [1,2,3,4,5,6,7,8,9,10];
// function removeFirstTwo(list) {
//     const [, , ...arr] = list;
//     return arr;
// }
// const arr = removeFirstTwo(source);
// console.log(arr);
// // console.log(source);


// Use destructing assignment to pass an object as a function's parameter
// const stats = {
//     max: 80,
//     median: 60,
//     min: 20,
//     mean: 50,
//     average: 50
// };
// const half = (function() {
//     return function half({max, min}) {
//         return(max + min) / 2.0
//     };
// })();
// console.log(stats);
// console.log(half(stats));


// Create strings using template literals
// const human = {
//     name:"Mujeeb Adewuyi",
//     age: 18
// };

// const intro = `Hello, my name is ${human.name} and i am ${human.age} years old`;
// console.log(intro);

// const result = {
//     success: ["max-length", "no-amd", "prefer-arrow-functions"],
//     failure: ["no-var", "var-on-top", "linebreak"],
//     skipped: ["id-blacklist", "no-dup-keys"]
// };
// function makeList(arr) {
//     const resultDisplayArray = [];
//     for (let i = 0;  i < arr.length; i++) {
//         resultDisplayArray.push(`<li class="text-warning">${arr[i]}</li>`)
//     }
//     return resultDisplayArray;
// }
// const resultDisplayArray = makeList(result.failure);
// console.log(resultDisplayArray);


// Write concise object literal declarations using simple fields
// const createPerson = (name, age, gender) => {
//     return {
//         name: name,
//         age: age,
//         gender: gender
//     };
// };
// const person = createPerson("mujeb adeuyi", "18", "male");
// console.log(person);

// do this instead
// const createPerson = (name, age, gender) => ({name, age, gender});
// const person = createPerson("mujeb adeuyi", "18", "male");
// console.log(person);



// Write concise declarative functions
// const bicycle = {
//     gear:2,
//     setGear(newGear) {
//         "use strict";
//         this.gear = newGear;
//     }
// };
// bicycle.setGear(3)
// console.log(bicycle.gear);


// Use class syntax to define a constructor function










// // alert("hello world");
// // prompt("hello world");
// // console.log("hello world");

