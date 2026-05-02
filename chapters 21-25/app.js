// answer no 1

// let firstName = prompt ("Enter your first name") ;
// let lastName = prompt ("Enter your last name") ;
// let fullName = "Bisma" + " " + "Anwer"
// alert("Hello " + fullName ) ; 

// answer no 2

// let phoneModel = prompt ("Enter your favorite mobile phone model") ;

// answer no 3

// let country = "Pakistani" ; 
// document.write(country.indexOf ("n")) ;

// answer no 4

// let word = "Hello World"
// document.write(word.lastIndexOf ("l")) ;


// answer no 5

// let nationality = "Pakistani";
// document.write (nationality.charAt (3));

// answer no 6

// let firstName = prompt ("Enter your first name") ;
// let lastName = prompt ("Enter your last name") ;
// let fullName = "Bisma" + " " + "Anwer"
// alert("Hello " + fullName ) ; 

// answer no 7

// let city = "Hyderabad"
// document.write(city.replace("Hyder","Islam"));

// answer no 8

// let para = "Ali and Sami are best friends. They play cricket and football together."
// document.write(para.replaceAll("and","&"));

// answer no 9
// let value = "472";
// let num = Number(value);
// document.write("Value: " + value + "<br>");
// document.write("Type: " + typeof(value) + "<br>");
// document.write("Value: " + num + "<br>");
// document.write("Type: " + typeof(num) + "<br>");

// answer no 10

// let word = prompt ("Enter peanuts");
// let capitalCase = word.toUpperCase();
// alert(capitalCase);

// answer no 11

// let word = prompt ("Enter javascript");
// let final = word[0].toUpperCase() + word.slice(1).toLowerCase();
// alert(final);

// answer no 12

// let num = 35.36 ;
// let number= "35.36";
// document.write(number.replace(".",""));

// answer no 13

// let userInput=prompt('Enter your name: ');
// let charCode;
// for(let i=0 ;i < userInput.length ; i++){
//     charCode = userInput.charCodeAt(i);
//      if(charCode===33||charCode===44||charCode===46||charCode===64){
//         alert("Please enter a valid username")
//      }

// }


// answer no 14

// let A = ["cake", "apple pie", "cookie", "chips", "patties"]
// let userInput = prompt ("Welcome to our bakery ! What do you want to order?");
// userInput = userInput.toLowerCase();
// let flag = false;
// for (let i = 0; i<A.length; i++){
//     if (userInput==A[i]){
//         alert(userInput + " is available at index " + i + " in our bakery");
//         flag = true;
//         break;

//     }
// }
// if(flag == false){
//     alert("We are Sorry" + userInput + "is not available in our bakery");
// }

// answer no 15

// let password = prompt("Enter your password: ");
// let passwordLength = false;
// let passwordChar = false;
// let passwordInt = false;
// let passwordStart = true;

// // Checking for Alphabet
// for (i = 0; i < password.length; i++){
//     let charValue = password[i].charCodeAt(0);

//     // Checking for UpperCase Letters
//     if (charValue >= 65 && charValue <= 90 ){
//         passwordChar = true;
//     }

//     // Checking for LowerCase Letters
//     else if (charValue >= 97 && charValue <= 122 ){
//         passwordChar = true;
//     }
// }

// // Checking for Numbers
// for (i = 0; i < password.length; i++){
//     let charValue = password[i].charCodeAt(0);  
//     if (charValue >= 48 && charValue <= 57 ){
//         passwordInt = true;
//     }
// }

// // Checking for first letter
// let charValue = password.charCodeAt(0);
// if (charValue >= 48 && charValue <= 57 ){
//     passwordStart = false;
// }

// // Checking for Length
// if(password.length >= 6){
//     passwordLength = true;
// }

// if(passwordChar === false || passwordInt === false || passwordLength === false || passwordStart === false){
//     alert("Enter valid Password");
// }

// else{
//     alert("Password Approved");
// }




// answer no 16

// let university = "University of Karachi";
// let letters = university.split("");
// for(let i=0; i < letters.length; i++){
//     console.log(letters[i]);
// }

// answer no 17

// let userInput = prompt("Enter Pakistan");
// let lastChar = userInput[userInput.length-1];
// alert("Last caracter is: " + lastChar);

// answer no 18

// let line = "The quick brown fox jumps over the lazy dog";
// let final = line.toLowerCase().split(" ");
// let count = 0;
// for (let i = 0; i < final.length; i++) {
//     if (final[i]==="the"){
//         count++;
//     }
// }
// console.log("There are " + count + " occurrences of word the.");



