// 1. Write an arrow function to add two numbers:

// let addition = (a,b) => (a+b);
// console.log(addition(4,6));

// 2. Write an arrow function to check if a number is even or odd:

// let num = +prompt("enter your number");
// let checker =  (number) => { if(number % 2 === 0){
//     alert(`${number} is an even number`)
// } else {
//     alert(`${number} is an odd number`)
// }
// };
// (checker(num));

// 3. Write an arrow function to return the greater of two numbers.

// let num1 = +prompt("enter first number");
// let num2 = +prompt("enter second number");
// let greaterNumber = (a,b) => {
//     if(a > b){
//         alert (`${a} is greater than ${b}`)
//     } else if(b > a) {
//         alert (`${b} is greater than ${a}`)
//     }
//     else {
//         alert ("both are equal")
//     }
// }
// (greaterNumber(num1,num2));

// 4. Write an arrow function that returns Pass if marks > 40, otherwise Fail

// let passingMarks = +prompt("Enter your result:");
// let result = (a) => {
//     if(a > 40){
//         alert(`you have passed`)
//     } else {
//         alert("sorry, you did not pass.")
//     }
// }
// result((passingMarks));

// 5. Write an arrow function to check if a number is positive or negative

// let numb = +prompt("Enter a number:");
// let answer = (value) => {
//     if(value > 0){
//         alert("it's a positive number.")
//     } else if(value < 0){
//         alert("it's a negative number.")
//     } else {
//         alert("this is 0")
//     }
// }
// answer((numb));

// 6. Write an arrow function to return the square of a number.

// let value = +prompt("Enter a number;");
// let number = (a) => (a*a);
// console.log(number(value));

// 7. Write an arrow function to convert a string to uppercase

// let text = prompt("Enter a word");
// let upperCase = (word) => word.toUpperCase();
// console.log(upperCase(text));

// 8. Write an arrow function to convert a string to lowercase.

// let text = prompt("Enter a word");
// let lowerCase = (word) => word.toLowerCase();
// console.log(lowerCase(text));

// 9. Write an arrow function to check if a string is empty

// let word = prompt("write anything!");
// let functionName = (name) => {
//     if(name === ""){
//         alert("The string is empty")
//     } else{
//         alert("The string is not empty")
//     }
// }
// (functionName(word));

// 10. Write an arrow function to return the first character of a string

// let text = prompt("Enter a word");
// let firstCharacter = (word) => word.charAt();
// console.log(firstCharacter(text));

// 11. Write an arrow function to return the first element of an array

// let fruits = ["mango","apple","banana","orange","grapes"];
// let firstElement = (arr) => {
//     for(let i=0; fruits.length; i++){
//         if (fruits[i].length==0)
//     }
// };
// console.log((fruits[i]));

// let fruits = ["mango","apple","banana","orange","grapes"];
// let firstElement = (fruits) => fruits[0];
// console.log(firstElement(fruits));

// 12. Write an arrow function to return the last element of an array.

// let fruits = ["mango","apple","banana","orange","grapes"];
// let lastElement = (fruits) => fruits[fruits.length-1];
// console.log(lastElement(fruits));

// 13. Write an arrow function to count the number of elements in an array

// let fruits = ["mango","apple","banana","orange","grapes"];
// let elementsNumber = (fruits) => fruits.length;
// console.log(elementsNumber(fruits));

// 14. Write an arrow function to return all even numbers from an array.

// let numbers = [1,2,3,4,5,6,7,8,9,10];
// let evenNumbers = numbers.filter (num => num % 2 === 0);
// console.log(evenNumbers);

// 15. Write an arrow function to return all odd numbers from an array

// let numbers = [1,2,3,4,5,6,7,8,9,10];
// let oddNumbers = numbers.filter (num => num % 2 !== 0);
// console.log(oddNumbers);

// 16. Write an arrow function to return numbers greater than 10 from an array.

// let number = [2,8,7,10,12,40,73,100,80];
// let greaterNumbers = number.filter (num => num > 10);
// console.log(greaterNumbers);

// 17. Write an arrow function to find the largest number in an array.

// let number = [2,8,7,10,12,40,73,100,80];
// let largestNumber = (numb) => Math.max(...number);
// console.log(largestNumber(number)); 

// 18. Write an arrow function to find the smallest number in an array.

// let number = [2,8,7,10,12,40,73,100,80];
// let smallestNumber = (numb) => Math.min(...number);
// console.log(smallestNumber(number)); 

// 19. Write an arrow function to return only string values from a mixed array.

// let values = ["apple",3,"mango",45,900,"grapes"];
// let stringValue = (values) => values.filter (values => typeof values === "string")
// console.log(stringValue(values));

// 20. Write an arrow function to remove the last element of an array

// let fruits = ["mango","apple","banana","orange","grapes"];
// let lastElement = (fruits) => fruits.pop();
// console.log(lastElement(fruits));

// 21. Write an arrow function to sum all numbers in an array.

// let number = [2,8,7,10,12,40,73,100,80];
// let sum = 0;
// let sumOfNumbers = (number) => {
//     for (let i = 0; i < number.length; i++){
//         sum = sum + number[i];
//     }
//     console.log(sum);
// } 
// sumOfNumbers(number);

// 22. Write an arrow function to count how many vowels are in a string.

// let str = "hello world";
// let vowels = "aeiou"
// let countVowels = (str) => {
//     for(let i = 0; i < str.length; i++){
//         if(vowels.includes(str[i])){
//             console.log(str[i]);
//         }
//     }
// }
// countVowels(str);

// 23. Write an arrow function to remove all spaces from a string

// let text = ("    I   love   coding    in   JavaScript     ");
// let trimmer = word => text.replace(/\s/g, "");
// console.log(trimmer(text));

// 24. Write an arrow function to check if a word is present in a sentence.

// let sentence =prompt("Enter a sentence");
// let word = prompt("Enter a word");
// let wordChecker = (sentence,word) => {
//     if (sentence.includes(word)){
//         console.log("word is present in sentence")
//     } else{
//         console.log("word is not present in a sentence")
//     }
// }
// wordChecker(sentence,word);

// 25. Write an arrow function to return the first word of a sentence

// let sentence =prompt("Enter a sentence");
// let firstWord = (sentence) => sentence.split(" ")[0];
// console.log(firstWord(sentence));

// 26. Write an arrow function to return the last word of a sentence.

// let sentence =prompt("Enter a sentence");
// let lastWord = (sentence) => {
//     let words = sentence.split(" ");
//     return words.pop();
// }
// console.log(lastWord(sentence));

// 27. Write an arrow function to reverse a string.

// let sentence =prompt("Enter a sentence");
// let reverseWord = (sentence) => sentence.split(" ").reverse().join(" ");
// console.log(reverseWord(sentence));

// 28. Write an arrow function to check if a number is divisible by 3.

// let number = +prompt("write a number:");
//  let functionNumber = (numb) => {
//     if(number % 3 === 0){
//         alert("It is divisible by 3")
//     } else{
//         alert("It is not divisible by 3")
//     }
// }
// (functionNumber(number));

// 29. Write an arrow function to check if a string contains only letters.

// let line = +prompt("write a text that contain number and letters:");
// let onlyLetter = (str) => /^[a-zA-Z\s]+$/ .test(str);
// console.log(onlyLetter(line));


// 30. Write an arrow function to convert a sentence into an array of words.

// let sentence = prompt("Enter a sentence");
// let arrOfWords = (sentence) => sentence.split(" ");
// console.log(arrOfWords(sentence));


