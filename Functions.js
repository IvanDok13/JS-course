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
