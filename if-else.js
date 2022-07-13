// conditional statement

let a = 10;
let b = 200;
let c = 30;

if (a > b && a > c) {
  console.log("a is gratest");
} else if (b > a && b > c) {
  console.log("b is gratest");
} else {
  console.log("c is gratest");
}

// check if given number is even or odd

let num = 329651 * 3;

if (num % 2 === 0) {
  console.log("The number is even");
} else if (num % 2 === 0) {
  console.log("The number is odd");
} else {
  console.log("This is not a number");
}

// we can also check even or odd using ternery operator

let number = 21;

let even_odd =
  number % 2 === 0 ? "The given number is Even" : "The given number is odd";

console.log(even_odd);
