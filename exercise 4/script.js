function sum(a, b) {
  return a + b;
}

const number = sum(4, 6);
console.log(number);

function numberSquare(n) {
  return n ** 2;
}

const square = numberSquare(6);
console.log(square);

function isEven(o) {
  return o % 2;
}

const even = isEven(5);
if (even === 0) {
  console.log("Tegsh");
} else {
  console.log("Sondgoi");
}

function greet(name) {
  return name;
}

const ner = greet("Batbold");
console.log("Hello, ", ner, "!");

function maxOfTwo(a, b) {
  return Math.max(a, b);
}

const value = maxOfTwo(5, 6);
console.log(value);

function getLength(arr) {
  return arr.length;
}

const word = getLength("bataaaaaaa");
console.log(word);

function toUpper(str) {
  return str.toUpperCase();
}

const wordy = toUpper("asdfghjkl");
console.log(wordy);

function isPositive(l) {
  if (l > 0) {
    console.log("true");
  } else {
    console.log("false");
  }
}
const num = isPositive(1);

function firstItem(arr) {
  return arr.slice(0, 1);
}

const element = firstItem("Item");
console.log(element);

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
  return Math.max(...arr);
}

const nums = maxInArray([1, 2, 3, 4, 5]);
console.log(nums);

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

function lastItem(arr) {
  return arr.split("").pop();
}

const Item = lastItem("bataa");
console.log(Item);

function countOccurennces(arr, item) {}
