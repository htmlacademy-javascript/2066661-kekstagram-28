// 1 задание

const checkLength = (string, length) => string.length <= length;
checkLength('Привет',3);

// 2 задание

const checkPalindrome = (word) => word.split('').reverse().join('').toLowerCase() === word.toLowerCase();
checkPalindrome('Кекс');

// 3 задание

const getNumbers = (string) => parseInt(string.replace(/[^\d]/g, ''), 10);
getNumbers('1 кефир, 0.5 батона');

//  4 задание

const fillSrt = (str, minLength, addSymbols) => {
  const symbols = minLength - str.length;
  return symbols <= 0
    ? str
    : addSymbols.slice('0', symbols % addSymbols.length) + addSymbols.repeat(symbols / addSymbols.length) + str;
};
fillSrt('q', 4, 'we');
