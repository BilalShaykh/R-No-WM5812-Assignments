// ================== chapter# 21-25 Task 1
// let firstName = prompt('Enter your first name');
// let lastName = prompt('Enter your last name');
// let fullName = firstName + lastName;
// document.write(' Welcome to ABC.com ' + fullName);

// ================== chapter# 21-25 Task 2

// let mobileModel = prompt('Enter yor Mobile Model number');
// document.write('My favourite phone is: ' + mobileModel + '<br>');
// document.write('lenth of string: ' + mobileModel.length);

// ================== chapter# 21-25 Task 3
// let Letter = 'Pakistani';
// let indxOfLetter = Letter.indexOf('n');
// document.write('String: ' + Letter + '<br>');
// document.write('Index of "n": '+ indxOfLetter);

// ================== chapter# 21-25 Task 4
// let Letter = 'Hello world';
// let indxOfLetter = Letter.lastIndexOf('l');
// document.write('String: ' + Letter + '<br>');
// document.write('Last Index of "l": '+ indxOfLetter);

// ================== chapter# 21-25 Task 5
// let Letter = 'Pakistani';
// let charAtIndx = Letter.charAt('3');
// document.write('String: ' + Letter + '<br>');
// document.write('Character at index 3: '+ charAtIndx);

// ================== chapter# 21-25 Task 6
// let firstName = prompt('Enter your first name');
// let lastName = prompt('Enter your last name');
// let fullName = firstName.concat(lastName);
// document.write(' Welcome to ABC.com ' + fullName);

// ================== chapter# 21-25 Task 7
// let cityName = 'Hyderabad';
// document.write('City: ' + cityName + '<br>');
// let replaceName = cityName.replace('Hyder', 'Islam');
// document.write('After replacement: ' + replaceName);

// ================== chapter# 21-25 Task 8
// let message = "Ali and Sami are best friends. They play cricket and football together. <br>";
// document.write('Old message: ' + message);
// let replaceChar = message.replace(/and/g, "&");
// document.write('updates message: ' + replaceChar);

// ================== chapter# 21-25 Task 9
// let stringeValue = '472';
// document.write('Value:' + stringeValue + '<br>');
// document.write('Type: String' + '<br>');
// let strToIntegr = parseInt(stringeValue);
// document.write('Value:' + strToIntegr + '<br>');
// document.write('Type: Number');

// ================== chapter# 21-25 Task 10
// let word = prompt('Enter word in lowercase');
// document.write('User input: ' + word + '<br>');
// let ConvrtUpperCase = word.toUpperCase();
// document.write('upper Case: ' + ConvrtUpperCase);

// ================== chapter# 21-25 Task 11
// let word = prompt('Enter a word for title case');
// document.write('User input: ' + word + '<br>');
// let firstLetter = word.slice(0, 1);
// let upperCase = firstLetter.toUpperCase();
// let restOfletters = word.slice(1);
// let lowerCase = restOfletters.toLowerCase();
// let mergeWord = upperCase.concat(lowerCase);
// document.write('title case: ' + mergeWord);

// ================== chapter# 21-25 Task 12
// let num = 35.36;
// document.write('Number: ' + num + '<br>');
// let string = num.toString();
// let removeDot = string.replace('.', '');
// document.write('Result: ' + removeDot);

// ================== chapter# 21-25 Task 13
// var word = prompt('enter username')
// var result;

// for (i = 0; i < word.length; i++) {
//     if (word[i] == '!' || word[i] == ',' || word[i] == '.'|| word[i] == '@') {
//         result = true;
//         break;
//     }  
//     else {
//         result = false;
//     }
// }

// if (result === true) {
//     alert('Please enter a valid user name');
// }



// ================== chapter# 21-25 Task 14
// var foodArray = ['cake', 'apple pie', 'cookie', 'chips', 'patties'];
// var check = prompt('welcome to ABC BAkery, What do you want to order?');
// var lowerCaseWord = check.toLowerCase();
// var result;
// for (var i = 0; i < foodArray.length; i++){

//     if(lowerCaseWord === foodArray[i]){
//         result = true;
//         break;
//     }
//     else {
//         result = false;
//     // }

// if (result === true) {
//     document.write(lowerCaseWord + ' is available at index ' + foodArray.indexOf(foodArray[i]) + ' in our bakery');
// }
// else {
//     document.write('we are Sorry. ' + lowerCaseWord + ' is not available in our Bakery');
// }

// ================== chapter# 21-25 Task 15
// var str = prompt('Enter password:\n a. It should contain alphabets and numbers\n b. It should not start with a number\n c. It must at least 6 characters long');
// document.write('Password: ' + str + '<br>');
// var result = '';
// var x ;
// var y ;
// var z ;
// var a ;
// for (i = 0; i < str.length; i++) {

//     if ( str.length <= 6 || str[0].match(/\d/g) || str[i].match(/\W/g) || str[i] == '_') {
//         result = true;
//         break;
//     }
// }

// if (result === true) {
//     document.write('Please enter a valid password');
// }
// else {
//     document.write('Wellcome');
// }


// ================== chapter# 21-25 Task 16
// var university = 'University of Karachi';

// for (var i = 0; i < university.length; i++){
//     var uniSplit = university[i].split();
//     document.write(uniSplit + '<br>')
// }

// ================== chapter# 21-25 Task 17
// var userInput = prompt('enter word');
// var lastChar = (userInput.length - 1);
// var char = userInput.charAt(lastChar)
// document.write('user input: ' + userInput + '<br>')
// document.write('Last character of input: ' + char)

// ================== chapter# 21-25 Task 18
// var para = 'The quick brown fox jumps over the lazy dog';
// document.write('Text: The quick brown fox jumps over the lazy dog' + '<br>')
// var parLowerCase = para.toLowerCase();
// console.log(parLowerCase)
// var paraToArray = parLowerCase.split(' ');
// console.log(paraToArray)
// var word = 'the';
// var x = 0;
// for (var i = 0; i < para.length; i++){

//     if (paraToArray[i] === word ) {
//         x = x + 1;
//     }
// }
// document.write('There are '+ x +' occurence(s) of word ' + word);


// ================== chapter# 26-30 Task 1
// let number = +prompt('Enter a number');
// document.write('Number: ' + number + '<br>');
// document.write('Round of value: ' + Math.round(number) + '<br>');
// document.write('Floor value: ' + Math.floor(number) + '<br>');
// document.write('Ceil value: ' + Math.ceil(number));

// ================== chapter# 26-30 Task 2
// let number = +prompt('Enter a number');
// document.write('Number: ' + number + '<br>');
// document.write('Round of value: ' + Math.round(number) + '<br>');
// document.write('Floor value: ' + Math.floor(number) + '<br>');
// document.write('Ceil value: ' + Math.ceil(number));

// ================== chapter# 26-30 Task 3
// let number = +prompt('Enter a number');
// document.write('the absolute value of ' + number+ ' is ' + Math.abs(number) );

// ================== chapter# 26-30 Task 4
// var num1 = Math.ceil(Math.random() * 6);
// document.write('Random dice value: ' + num1);

// ================== chapter# 26-30 Task 5
// var num1 = Math.floor(Math.random() * 2);

// if (num1 == 1) {
//     document.write(num1 + '<br>');
//     document.write('Random coin value is: Heads ' + '<br>');
// }
// else {
//     document.write(num1 + '<br>');
//     document.write('Random coin value is: Tails' + '<br>');
// }

// ================== chapter# 26-30 Task 6
// var num1 = Math.ceil(Math.random() * 100);
// document.write('Random number between 1 and 100: ' + num1);

// ================== chapter# 26-30 Task 7
// let weight = prompt('enter your weight');
// let strToIntgr = parseFloat(weight);
// document.write(weight + '<br>')
// document.write('The weight of user is: ' + strToIntgr + ' kilograms');

// ================== chapter# 26-30 Task 8
// var inputNumber = prompt('Enter a number');
// var generateNum = Math.ceil(Math.random() * 10);
// document.write(generateNum + '<br>');
// if (inputNumber == generateNum) {
//     document.write('You guess a correct number')
// }
// else {
//     document.write('Try again')
// }

// ================== chapter# 31-34 Task 1
// let date = new Date();
// document.write(date)

// / ================== chapter# 31-34 Task 2
// let monthArray = ['january', 'February', 'March', 'april', 'may', 'june', 'july', 'august', 'september', 'october', 'november', 'december'];
// let date = new Date();
// let monthIndx = date.getMonth();
// let month = monthArray[monthIndx];
// document.write('Current month is: ' + month);

// / ================== chapter# 31-34 Task 3
// let dayArray = ['sun', 'mon', 'tue', 'wed', 'thur', 'fri', 'sat'];
// let date = new Date();
// let dayIndx = date.getDay();
// let day = dayArray[dayIndx];
// document.write('Current day is: ' + day);

// / ================== chapter# 31-34 Task 4
// let inputDay = prompt('enter today name');
// let dayArray = ['sun', 'mon', 'tue', 'wed', 'thur', 'fri', 'sat'];
// if (inputDay == dayArray[0] || inputDay == dayArray[6] ){
//     document.write('It’s Fun day')
// }
// else {
//     document.write('working day ' + inputDay);
// }

// ================== chapter# 31-34 Task 5
// let currentDate = new Date();
// let date = currentDate.getDate();
// if (date <= 15) {
//     document.write('First fifteendays of the month')
// }
// else {
//     document.write('Last days of the month.')
// }

// ================== chapter# 31-34 Task 6
// let currentDate = new Date();
// document.write('Current Date: ' + currentDate + '<br>');
// let miliSec1970 = currentDate.getTime();
// document.write('Elapsed milisecond since jan 1, 1970: ' + miliSec1970 + '<br>');
// let minuts1970 = miliSec1970 / (60 * 1000);
// document.write('Elapsed minutes since jan 1, 1970: ' +minuts1970)

// ================== chapter# 31-34 Task 7
// let currentDate = new Date();
// document.write('Current Date: ' + currentDate + '<br>');
// let hours = currentDate.getHours();
// let minutes = currentDate.getMinutes()
// let time = hours + ':' + minutes
// let strTime = time.toString()
// if (strTime >= '12:01' &&  strTime <= '23:59') {
//     document.write('Its P.M');
// } 
// else {
//     document.write('Its A.M');
// }

// ================== chapter# 31-34 Task 8
// let currentDate = new Date();
// let laterDate = currentDate.setMonth(11) + currentDate.setDate(31) + currentDate.setHours(00)+ currentDate.setMinutes(00) + currentDate.setSeconds(00);
// document.write('Later Date: ' + currentDate)

// // ================== chapter# 31-34 Task 9
// let date1 = new Date("04/24/2020"); ///date you want to count from
// let date2 = new Date();  //current date
// let day = 1000 * 60 * 60 * 24; //Time for one day
// let differenceInTime = date2.getTime() - date1.getTime(); //subtracting date by converting them in time
// let differenceInDays = differenceInTime / day; //Time is always in millisecond do we convert it in a day 
// document.write(Math.round(differenceInDays) + ' days have passed since 1st Ramzan, 2020');



// ================== chapter# 31-34 Task 10
// let date1 = new Date("01/01/2015");
// let date2 = new Date("12/05/2015, 22:50:16");
// document.write('On refrence Date: ' + date2 + '<br>')
// let timeDifference = date2.getTime() - date1.getTime();
// let timeInSeconds = timeDifference / (1000*60);
// document.write(Math.round(timeInSeconds) + ' Seconds has passed since begning of 2015')

// ================== chapter# 31-34 Task 11
// let date1 = new Date();
// document.write('Current Date: ' + date1 + '<br>');
// let date2 = date1.setHours('14');
// document.write('1 hour ago, it was '+ date1 + '<br>');

// ================== chapter# 31-34 Task 12
// let date1 = new Date();
// document.write('Current Date: ' + date1 + '<br>');
// let date2 = date1.setFullYear('1920');
// document.write('100 Years ago, it was '+ date1 + '<br>');

// ================== chapter# 31-34 Task 13
// let inputBornYear = new Date(prompt('Enter birth year mm/dd/yyyy'));
// let BornYear = inputBornYear.getFullYear();
// let currentDate = new Date();
// let differenceInTime = currentDate.getTime() - inputBornYear.getTime();
// let differenceInYears = differenceInTime / (1000 * 60 * 60 * 24 * 30 * 12);
// document.write('Your age is: ' + Math.round(differenceInYears)+ '<br>');
// document.write('Your birth year: ' + BornYear);

// // ================== chapter# 31-34 Task 14
// document.write('<h1>K-Electric Bill</h1>' + '<br>');
// document.write('Customer name: <strong>ABC Customer</strong>' + '<br>')
// document.write('Month: <strong>February</strong>' + '<br>')
// document.write('Number of Units: <strong>410</strong>' + '<br>')
// document.write('Charges per unit: <strong>16</strong>' + '<br>' + '<br>')
// document.write('Net Amount Payable (within Due Date): ' + '<strong>' + 410 * 16 + '</strong>' + '<br>')
// document.write('Late Payment Surcharge: <strong>350</strong>' + '<br>')
// document.write('Gross Amount Payable (after Due Date): ' + '<strong>' + ((410 * 16)+350) + '</strong>' + '<br>')


// // ================== chapter# 35-38 Task 1
// function CurrentTime() {
//     var currentTime = new Date();
//     return currentTime;
// }
// CurrentTime();
// document.write(CurrentTime());

// // ================== chapter# 35-38 Task 2
// function greeting() {
//     let firstName = prompt('Entery your First name');
//     let lastName = prompt('Entery your Last name');
//     let fullName = firstName + lastName;
//     return (fullName);
// }
// var x = greeting();
// document.write('welcome to ABC website ' + x);

// ================== chapter# 35-38 Task 3
// function add() {
//     let num1 = +prompt('Enter first number');
//     let num2 = +prompt('Enter second number');
//     let add = num1 + num2;
//     return (add);
// }
// document.write(add());

// ================== chapter# 35-38 Task 4

// function calculator() {
//     var num1 = +prompt('Enter first number');
//     var num2 = +prompt('Enter second number');
//     var operator = prompt('Enter operator +,-,* or/');
//     if (operator == '+') {
//         var result1 = num1 + num2;
//         return (result1);
//     }
//     else if (operator == '-') {
//         var result2 = num1 - num2;
//         return (result2);
//     }
//     else if (operator == '*') {
//         var result3 = num1 * num2;
//         return (result3);
//     }
//     else if (operator == '/') {
//         var result4 = num1 / num2;
//         return (result4);
//     }
//     else {
//         var x = 'wrong operator';
//         return (x);
//     }
// }
// document.write(calculator());

// ================== chapter# 35-38 Task 5
// function numPower(a) {
//     var power = Math.pow(a, 2);
//     return (power);
// }
// document.write(numPower(5));

// ================== chapter# 35-38 Task 6
// function factorial() {
//     var inputNum = +prompt('Enter number for factorial');
//     if (inputNum == 1 || inputNum == 0) {
//         return (document.write('Factorial is: 1'));
//     }
//     for (i = inputNum - 1; i >= 1; i--){
//         inputNum = inputNum * i;

//     }
//    return (document.write('Factorial  is ' + inputNum));
// }
// factorial();

// ================== chapter# 35-38 Task 7
// function counting() {
//     var num1 = +prompt('Enter number for start counting ');
//     var num2 = +prompt('Enter number for end counting');
//     if (num1 < num2) {
//         for (i = num1; i <= num2; i++){
//             document.write(i + ' ');
//         }
//         return (i);
//     }
//     else if (num1 > num2) {
//         for (j = num1; j >= num2; j--){
//             document.write(j + ' ');
//         }
//         return (j);
//     }
// }

// counting();

// ================== chapter# 35-38 Task 8
// function calculateHypotenuse() {
//     var perpendicular = +prompt('Enter perpendicular');
//     var base = +prompt('Enter Base');

//     function calculateSquare(square) {
//         var numSquare = (square * square);
//         return numSquare;
//     }
//     var hypotenuse = Math.sqrt(calculateSquare(perpendicular) + calculateSquare(base));
//     return document.write(hypotenuse + '<br>');
// }
// calculateHypotenuse();

// ================== chapter# 35-38 Task 9a
// function triangleArea(width,height) {
//     var areaOfTriangle = width * height;
//     return document.write(areaOfTriangle);
// }
// triangleArea(5, 6);

// ================== chapter# 35-38 Task 9b
// function triangleArea() {
//     var areaOfTriangle = width * height;
//     return document.write(areaOfTriangle);
// }
// triangleArea(width=5,height=5);

// ================== chapter# 35-38 Task 10
// function palindrome() {
//     var inputWord = prompt('Enter word');
//     var check = '';
//     for (i = inputWord.length - 1; i >= 0; i--){
//         check += inputWord[i];
//     }
//     if (check === inputWord) {
//         document.write(inputWord + ' is palindrome');
//     }
//     else {
//         document.write(inputWord + ' is not palindrome');
//     }
// }c
// palindrome();

// ================== chapter# 35-38 Task 11
// function titleCase() {
//     var str = 'the quick brown fox';
//     var strToArray = str.split(' ');
//     var newArray = [];
//     console.log(strToArray)
//     for (i = 0; i < strToArray.length; i++){
//         var word = strToArray[i].slice(0, 1).toUpperCase() + strToArray[i].slice(1).toLowerCase() + ' ';
//         newArray.push(word);
//     }
//     return newArray.join(' ')
// }
// document.write(titleCase());

// ================== chapter# 35-38 Task 12
// function longWord() {
//     var inputstring = prompt('enter sentence');
//     document.write('Example Input: ' + inputstring + '<br>');
//     var strToArray = inputstring.split(' ');
//     var result = strToArray[0];
//     for (var i = 1; i < strToArray.length; i++){
//         if (result.length < strToArray[i].length) {
//             result = strToArray[i];
//         }
//     }
//     return result;
// }
// document.write('Expected Output: ' + longWord());

// ================== chapter# 35-38 Task 13
// function wordCount(inputStr, inputLetter) {
//     var inputStr = prompt('Enter sentence');
//     document.write('Sentence: ' + inputStr + '<br>');
//     var inputLetter = prompt('Enter Letter for counting');
//     var x = 0;
//     for (var i = 0; i < inputStr.length; i++){
//         if (inputStr[i] == inputLetter) {
//             (inputLetter = inputStr[i]);
//             (x = x + 1)
//         }

//     }
//     return ('Letter ' + inputLetter + ' is ' + x + 'times in above sentence');
// }
// document.write(wordCount());


// ================== chapter# 35-38 Task 14
// var circleRadius = +prompt('Enter radius of circle');
// function calcCircumference() {
//     var circumferenceOfCircle = circleRadius * Math.PI * 2;
//     return (circumferenceOfCircle.toFixed(2));
// }
// console.log(calcCircumference());

// function calcArea() {
//     var areaOFCircle = Math.PI * (Math.pow(circleRadius, 2));
//     return (areaOFCircle.toFixed(2));
// }
// console.log(calcArea());

























