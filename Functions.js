//Implement a function called printMotto() that will print the phrase Winter is coming to the screen.
const printMotto = () => {
  const motto = 'Winter is coming';
  console.log(motto);
};

printMotto();
//Winter is coming

//OR
const printMotto1 = () => {
    console.log('Winter is coming');
};

printMotto1();
//Winter is coming


//Implement a function that prints hurray! 3 times
const sayHurrayThreeTimes = () => {
    const word = 'hurray!';
    return '${word} ${word} ${word}';
};
//retyrn 'hurray! hurray! hurray!'

/*Implement a truncate() function that truncates the passed structure to a certain number of characters, 
resulting in an ellipsis and returning the resulting structure*/

const truncate = (text, length) => {
   return(text.length > length) ?
    text.slice(0, length) + '...' : text;
};


const getLetter = (text, numberOfSymbol) => text[numberOfSymbol - 1] || '';

//OR 
const truncate = (text, length) => {
  const result = `${text.slice(0, length)}...`;
  return result;
};

/*const text = 'Hello, world!';
truncate(text, 5);*/
//Hello


/*Implement the getHiddenCard() function, which takes a credit card number (consisting of 16 digits) 
as a string as input and returns a hidden version of it that can be used on the site for display*/
const getHiddenCard = (cardNumber, hiddenNumber = 4) => {
  const hiddenCardNumber = `${'*'.repeat(hiddenNumber)}${cardNumber.slice(-4)}`;
  return hiddenCardNumber;
}

export default getHiddenCard;
//getHiddenCard(1234567892356789, 2) => **6789


const sum = (a, b) => {
  return a + b;
}; //May be write as =>

const sum = (a, b) => a + b;
//Both code are equal


//Implement a capitalization() function that takes a non-empty entry and converts the first letter of the string to case-sensitive:
const capitalize = (text) => `${text.slice(0, 1).toUpperCase()}${text.slice(1)}`;

export default capitalize;
//OR
const capitalize = (text) => `${text[0].toUpperCase()}${text.slice(1)}`;

export default capitalize;
//const name = 'aleksandr'; console.log(capitalize(name)); => Aleksandr


//Example
const isFirstLetterInUpperCase = (string) => {
  const firstLetter = string[0];
  return firstLetter.toUpperCase() === firstLetter;
};

isFirstLetterInUpperCase('marmont'); // false
isFirstLetterInUpperCase('Robb');    // true


/*Implement the isInternationalPhone() function, which checks the format of the specified phone. 
If the phone starts with +, then it is an international format*/
const isInternationalPhone = (phoneNumber) => phoneNumber[0] === '+';

export default isInternationalPhone;

isInternationalPhone('89522682864'); // false
isInternationalPhone('+79211287463'); // true


//Here's a function that takes a password and says if it matches the conditions or doesn't:
const isStrongPassword = (password) => {
  const length = password.length;
  return length > 8 && length < 20;
};

isStrongPassword('qwerty'); // false
isStrongPassword('qwerty1234'); // true
isStrongPassword('zxcvbnmasdfghjkqwertyui'); // false


const hasSpecialChars = (str) => /* the content of the special offer in line*/;

const hasCapitalChars = (str) => /* checks for capitalization of a string */;

const isStrongPassword = (password) => {
  const length = password.length;
  return length > 8 && (hasSpecialChars(password) || hasCapitalChars(password));
};

/*another example. We want to find an apartment that meets the conditions: area from 100 sq. meters and more on any street 
OR area from 80 sq. meters and more, but on the main street Main Street*/
const isGoodApartment = (area, street) => {
  const result = area >= 100 || (area >= 80 && street === 'Main Street');
  return result;
};

isGoodApartment(91, 'Queens Street'); // false
isGoodApartment(78, 'Queens Street'); // false
isGoodApartment(70, 'Main Street');   // false

isGoodApartment(120, 'Queens Street'); // true
isGoodApartment(120, 'Main Street');   // true
isGoodApartment(80, 'Main Street');    // true

// ! - using negation you can check for oddness:
const isEven = (number) => number % 2 === 0;

isEven(10);  // true
!isEven(10); // false

//Implement an isLeapYear() function that determines whether the year is highly skewed or not.
const isLeapYear = (year) => year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0);

isLeapYear(1900); // false
isLeapYear(2023); // false
isLeapYear(2000); // true


/*Implement a getLetter() function that extracts the specified character from the given string 
(by serial number, not index) and returns it to the outside. If there is no such character, then the function returns an empty string.*/
const getLetter = (text, numberOfSymbol) => text[numberOfSymbol - 1] || '';

const text = 'John Gold';
console.log(getLetter(text[1])); //J


//the function determines the type of the passed sentence. To begin with, it will distinguish ordinary sentences from interrogative ones.
const getTypeOfSentence = (sentence) => {
  const lastChar = sentence[sentence.length - 1];
  if (lastChar === '?') {
    return 'question';
  }
  return 'normal';
};
                       
// OR
const getTypeOfSentence = (sentence) => {
  const lastChar = sentence.slice(-1);

  return (lastChar === '?') ? 'question' : 'normal';
};

console.log(getTypeOfSentence('Hodor'));  // normal
console.log(getTypeOfSentence('Hodor?')); // question


const getTypeOfSentence = (sentence) => {
  const lastChar = sentence[sentence.length - 1];
  let sentenceType;

  if (lastChar === '?') {
    sentenceType = 'question';
  } else if (lastChar === '!') {
    sentenceType = 'exclamation';
  } else {
    sentenceType = 'normal';
  }

  return `Sentence is ${sentenceType}`;
};

getTypeOfSentence('Who?'); // Sentence is question
getTypeOfSentence('No');   // Sentence is normal
getTypeOfSentence('No!');  // Sentence is exclamation


/*Implement a normalizeUrl() function that performs what is known as data normalization. 
It takes a website address and returns it with https:// at the beginning*/
const normalizeUrl = (adress) => {
  const writtenAdress = adress.startsWith('https://');

  if (writtenAdress === true) {
    return adress;
    
  } else {
    return `https://${adress}`;
  };

};


//The same
const normalizeUrl = (site) => {
  let normalizedUrl;

  if (site.startsWith('https://')) {
    normalizedUrl = site;
  } else {
    normalizedUrl = `https://${site}`;
  }

  return normalizedUrl;
};

console.log(normalizeUrl('Hodor')); //  https://Hodor
console.log(normalizeUrl('https://Hodor')); //  https://Hodor
