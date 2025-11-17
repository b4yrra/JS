const x = 5;
const y = 6;
const z = 8;
const l = 10;
const h = 5;

const P = x + y + z;
const CP = l * 2 + h * 2;
const S = l * h;

console.log("Perimetr = " + P);

console.log("Niilber = " + (1 + 3 + 5 + 7 + Math.ceil(8.7)));

console.log("1. ", CP);

console.log("2. ", S);

const second = 98;
const minute = second / 60;
const secund = second % 60;

console.log("3. ", ~~minute, "min", ~~secund, "sec");

const sec = 1297;
const secunds = sec % 60;
const minutes = sec / 60;
const hour = minutes / 60;

console.log("4. ", ~~hour, "hour", ~~minutes, "min", ~~secunds, "sec");

const minutee = 875;
const secunde = 88;
const fullSecunds = minutee * 60 + secunde;

console.log("5. ", fullSecunds, "sec");

const hour1 = 83;
const minute1 = 84;
const secund1 = 85;
const answer1 = minute1 * 60;
const answer2 = answer1 * 60 + secund1;

console.log("6. ", answer2, "sec");

const hour2 = 38;
const day1 = hour2 / 24;
const dayhour = hour2 % 24;

console.log("7. ", ~~day1, "day", dayhour, "hour");

const day2 = 4;
const hour3 = 40;
const houranswer = day2 * 24 + 40;

console.log("8. ", houranswer, "hour");

const month = 106;
const year = 106 / 12;
const yearmonth = 106 % 12;

console.log("9. ", ~~year, "years", yearmonth, "months");

const year2 = 90;
const month2 = 98;
const yearmonth2 = 90 * 12 + 98;

console.log("10. ", yearmonth2, "months");

const numbers = [9, 3, 2, 8];
const minimum = Math.min(...numbers);

console.log("11. ", minimum);

const number = [2, 9, 4, 3];
const minimum2 = number.filter((number) => number < 5);
const produce = minimum2.reduce((a, b) => a * b);

console.log("12. ", produce);

const number2 = [11, 9, 4, 3];
const maximum = number2.filter((num) => num > 5);
const produces = maximum.reduce((a, b) => a * b);

console.log("13. ", produces);

// let x = 5;
// let y = 3;
// let xy = x + y;

// console.log("Bodlogo 1 =", xy);

// const a = 10;
// const b = 4;
// const ab = a - b;

// console.log("Bodlogo 2 =", ab);

// const p = 7;
// const q = 6;
// const pq = p * q;

// console.log("Bodlogo 3 =", pq);

// const m = 20;
// const n = 5;
// const mn = m / n;

// console.log("Bodlogo 4 =", mn);

// x = 15;
// y = 4;
// xy = x % y;

// console.log("Bodlogo 5 =", xy);

// let num = 10;
// num = num + 5;

// console.log("Bodlogo 6 =", num);

// mum = num += 10;

// console.log("Bodlogo 7 =", xum);

// bum = num -= 20;

// console.log("Bodlogo 8 =", bum);

// vum = num *= 3;

// console.log("Bodlogo 9 =", vum);

// zum = num /= 4;

// console.log("Bodlogo 10 =", zum);
