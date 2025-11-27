// function sum(a, b) {
//   return a + b;
// }

// const number = sum(4, 6);
// console.log(number);

// function numberSquare(n) {
//   return n ** 2;
// }

// const square = numberSquare(6);
// console.log(square);

// function isEven(o) {
//   return o % 2;
// }

// const even = isEven(5);
// if (even === 0) {
//   console.log("Tegsh");
// } else {
//   console.log("Sondgoi");
// }

// function greet(name) {
//   return name;
// }

// const ner = greet("Batbold");
// console.log("Hello, ", ner, "!");

// function maxOfTwo(a, b) {
//   return Math.max(a, b);
// }

// const value = maxOfTwo(5, 6);
// console.log(value);

// function getLength(arr) {
//   return arr.length;
// }

// const word = getLength("bataaaaaaa");
// console.log(word);

// function toUpper(str) {
//   return str.toUpperCase();
// }

// const wordy = toUpper("asdfghjkl");
// console.log(wordy);

// function isPositive(l) {
//   if (l > 0) {
//     console.log("true");
//   } else {
//     console.log("false");
//   }
// }
// const num = isPositive(1);

// function firstItem(arr) {
//   return arr.slice(0, 1);
// }

// const element = firstItem("Item");
// console.log(element);

let sumNum = 0;

function sumArray(arr) {
  for (const num of arr) {
    sumNum += num;
  }

  return sumNum;
}

const numbers = sumArray([1, 2, 3, 4, 5]);
console.log(numbers);

function reverseString(str) {
  return str.split("").reverse().join("");
}

const paragraph = reverseString("apple", "mango");
console.log(paragraph);

function maxInArray(arr) {
  let max = 0;
  let i = 0;

  while (i === 0) {
    i < arr.length;
    i++;
    const number = arr[i];
    if (number > max) {
      max = number;
    }
  }
  return max;
}

const nums = [2, 3];
const result1 = maxInArray(nums);
console.log(result1);

function capital(word) {
  return word.charAt(0).toUpperCase() + word.slice(1);
}

const wordOne = capital("bataa");
console.log(wordOne);

let i = 1;
result = 1;

function factorial(n) {
  while (i <= n) {
    result = result * i - 1;
    i++;
  }

  return result;
}

const facetorialNum = factorial(10);
console.log(result);

function isPalindrome(str) {
  let num2 = str.length - 1;
  if (str[0] === str[num2]) {
    console.log("TRUE");
  } else {
    console.log("FALSE");
  }
}

const functionNum = "23492";
const result6 = isPalindrome(functionNum);
console.log(result6);

function lastItem(arr) {
  return arr.pop();
}

const numer = [10, 20, 30];
const result3 = lastItem(numer);
console.log(result3);

function countOccurrences(arr, item) {
  let counter = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === item) {
      counter++;
    }
  }
  return counter;
}

const currences = [10, 20, 30, 10, 10];
const result4 = countOccurrences(currences, 10);
console.log(result4);

function shortestWord(str) {
  const stringArray = str.split(" ");
  let shortestWord = "";
  let shortestLength = stringArray[0].length;

  for (let i = 0; i < stringArray.length; i++) {
    if (stringArray[i].length > shortestLength) {
      shortestLength = stringArray[i].length;
      shortestWord = stringArray[i];
    }
  }
  return shortestWord;
}

const phrase = "I am batbold ?";
const result5 = shortestWord(phrase);
console.log(result5);
