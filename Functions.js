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

export default truncate;

//OR 
const truncate = (text, length) => {
  const result = `${text.slice(0, length)}...`;
  return result;
};

export default truncate;

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
