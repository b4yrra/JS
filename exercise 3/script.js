const fruits = ["Banana", "Orange", "Apple", "Mango", "Kiwi"];

console.log(fruits.shift(), fruits.pop());

const fruits2 = ["Apple", "Banana"];
fruits2.push("Mango");

console.log(fruits2);

const numbers = [1, 2, 3, 4];
numbers.pop();

console.log(numbers);

const number = [10, 20, 30];
number.unshift("5");

console.log(number);

const number2 = [100, 200, 300];
number2.shift();

console.log(number2);

const num1 = [1, 2, 3];
const num2 = [4, 5, 6];

console.log(num1.concat(num2));

const fruits3 = ["apple", "banana", "orange"];
Includes = fruits3.includes("apple");

console.log(Includes);

const animal = ["cat ", "dog", "bird"];
IndexOf = animal.indexOf("dog") + 1;

console.log("Dog is in", IndexOf);

const word = ["I", "Love", "JavaScript"];
Join = word.join("-");

console.log(Join);

const num3 = [10, 20, 30, 40, 50];
slicednum = num3.slice(0, 3);

console.log(slicednum);

const num4 = [1, 2, 3, 4];
splicednum = num4.toSpliced(1, 1);

console.log(splicednum);

const num5 = [1, 2, 3, 4, 5];
Reverse = num5.reverse();

console.log(Reverse);

const fruit = ["banana", "apple", "cherry"];
Sort = fruit.sort();

console.log(Sort);

const array = ["a", "b", "c", "d"];
ArraIs = Array.isArray(array);

console.log(ArraIs);

const color = ["red", "blue", "green"];
Strings = color.toString();
Length = Strings.length;

console.log(Length);

const number3 = [10, 20, 30];
Splice = number3.toSpliced(1, 1, "25");

console.log(Splice);

const lang = ["HTML", "CSS"];
const lang1 = ["JavaScript", "React"];
merge = lang.concat(lang1);
elements = merge.length;

console.log(elements);

const number4 = [1, 2, 3, 4, 5];
splicedNumber = number4.toSpliced(3, 5);

console.log(splicedNumber);

const num6 = [5, 10, 15, 20];
numSplice = num6.toSpliced(2, 1);

console.log(numSplice);

const number5 = [100, 200, 300];
Check = number5.includes(200);

if (Check === true) {
  console.log("200 Байна.");
} else {
  console.log("200 Байхгүй.");
}
