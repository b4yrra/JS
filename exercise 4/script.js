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
