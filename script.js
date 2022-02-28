//BOOLEAN

// let isMarried = true;
// console.log(isMarried); //true
// console.log(typeof isMarried);// boolean

// let a = Boolean(1);
// console.log(a); //true


// let a = Boolean(0);
// console.log(a); //false

// let a = Boolean(' ');
// console.log(a); //true

// let a = Boolean('dndvb');
// console.log(a); //true

// let a = Boolean('');
// console.log(a); //false

//NULL

// let cart = null;
// console.log(cart); //null
// console.log(typeof cart); //object

//Undefined

// let cart;
// console.log(cart); //undefined
// console.log(typeof cart); //undefined


   //Number to String

// let myNum = 123;
//
// console.log(myNum);//123
// console.log(typeof myNum);//number
//
// let myStrNum = String(myNum);
//
// console.log(myStrNum);//123
// console.log(typeof myStrNum);//string


// let a = '10';
// let b = '2';
//
// console.log(a + b); //String 102
// console.log(a - b); //Number 8
// console.log(a * b); //Number 20
// console.log(a / b); //Number 5
// console.log(a % b); //Number 0
// console.log(a ** b); //Number 100


// let a = +'10';
// let b = +'2';
//
// console.log(a + b); //String 12
// console.log(a - b); //Number 8
// console.log(a * b); //Number 20
// console.log(a / b); //Number 5
// console.log(a % b); //Number 0
// console.log(a ** b); //Number 100

// let a = '10';
// let b = '2';
//
// console.log(+a + +b); //String 12
// console.log(a - b); //Number 8
// console.log(a * b); //Number 20
// console.log(a / b); //Number 5
// console.log(a % b); //Number 0
// console.log(a ** b); //Number 100

// let a = Number('10');
// let b = Number('2');
//
// console.log(a + b); //String 12
// console.log(a - b); //Number 8
// console.log(a * b); //Number 20
// console.log(a / b); //Number 5
// console.log(a % b); //Number 0
// console.log(a ** b); //Number 100


// let a = '10jcbjb';
// let b = '2';
//
// console.log(+a + +b); //NaN
// console.log(a - b); //NaN
// console.log(a * b); //NaN
// console.log(a / b); //NaN
// console.log(a % b); //NaN
// console.log(a ** b); //NaN


      //Comparing Numbers
//
// let a = 10;
// let b = 20;
//
// console.log(a == b); // false
// console.log(a != b); // true
//
// console.log(a > b); // false
// console.log(a >= b); // false
//
// console.log(a < b); //true
// console.log(a <= b); //true
//
// console.log(a === b); //false



           //Условное ветвление

// let isMarried = true;
//
// if (isMarried === true) {
//     console.log("Я не буду знакомиться");
// }


               //блок else


// let isMarried = false;
//
// if (isMarried) {
//   console.log("Я не буду с Вами знакомиться");
// } else {
//   console.log("Привет, меня зовут Иван");
// }


// let age = 101;
//
// if (age < 3) {
//   console.log("Здравствуй, малыш!");
// } else if (age < 18) {
//   console.log("Привет!");
// } else if (age < 100) {
//   console.log("Здравствуйте!");
// } else {
//   console.log("Какой необычный возраст!");
// }


// let password = false;
//
// password ? console.log("Доступ открыт") : console.log("Доступ закрыт");


// let password = 123;
//
// password === 1234 ? console.log("Доступ открыт") : console.log("Доступ закрыт");




               //Exercise

// В переменную lang нужно получить данные от пользователя если пользователь введет “ru” нужно приветствовать
// его на русском если “ky” на кыргызском если будет другое значение нужно вывести сообщение
// “Я не знаю такого языка”

// let lang = prompt('What is your language?');
//
// if (lang === 'ky'){
//     document.write('Assalomu aleykum');
// } else if(lang === "ru"){
//     document.write('Zdrastvuite');
// }else{
//     document.write('I dont know such as language!');
// }

//
// let letters = 'abcde';
//
// if (letters[0] === 'a'){
//     console.log('Yes');
// }else{
//     console.log('No')
// }

// let num = 12345;
// let strNum = String(num)
// let subStrNum = strNum.substr(0,3)
//
// if (subStrNum === '123'){
//     console.log('Yes')
// }else{
//     console.log('No')
// }


            // Homework

// let ask = prompt('What is your number?');
//
// if (ask % 2 === 0){
//     document.write('Четный')
// }else {
//     document.write('Нечетный')
// }

// let monthName = prompt('Type here months of year');
//
//
// if (monthName === 'January' || monthName === 'December'|| monthName === 'February'){
//     document.write('This is Winter')
// } else if (monthName === 'March'|| monthName === 'April' || monthName === 'May'){
//     document.write('This is Spring')
// }else if (monthName === 'June'|| monthName === 'July' || monthName === 'August'){
//     document.write('This is Summer')
// }else if (monthName === 'September' || monthName === 'October'|| monthName === 'November'){
//     document.write('This is Autumn')
// }else{
//     document.write('It is not a season of Year')
// }

//
// let chineseZodiac = prompt('What is your Year?');
//
// if (chineseZodiac % 12 === 0 ){
//     document.write(`<h3>Your zodiac: <h3/> Monkey`)
// }else if (chineseZodiac % 12 === 1 ){
//     document.write(`<h3>Your zodiac: <h3/> Rooster`)
// }else if(chineseZodiac % 12 === 2){
//     document.write(`<h3>Your zodiac: <h3/> Dog`)
// }else if (chineseZodiac % 12 === 3){
//     document.write(`<h3>Your zodiac: <h3/> Pig`)
// }else if (chineseZodiac % 12 === 4){
//     document.write(`<h3>Your zodiac: <h3/> Rat`)
// }else if (chineseZodiac % 12 === 5){
//     document.write(`<h3>Your zodiac: <h3/> Ox`)
// }else if (chineseZodiac % 12 === 6){
//     document.write(`<h3>Your zodiac: <h3/> Tiger`)
// }else if (chineseZodiac % 12 === 7){
//     document.write(`<h3>Your zodiac: <h3/> Rabbit`)
// }else if (chineseZodiac % 12 === 8){
//     document.write(`<h3>Your zodiac: <h3/> Dragon`)
// }else if (chineseZodiac % 12 === 9){
//     document.write(`<h3>Your zodiac: <h3/> Snake`)
// }else if (chineseZodiac % 12 === 10){
//     document.write(`<h3>Your zodiac: <h3/> Horse`)
// }else if (chineseZodiac % 12 === 11){
//     document.write(`<h3>Your zodiac: <h3/> Goat`)
// }else{
//     document.write(`<h3>Your zodiac: <h3/> NoNe`)
//  }