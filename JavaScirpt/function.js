/*
               //////////////////////////////////////////////////////////////////////////////////////
                                  What Is the Purpose of Functions, and How Do They Work?
               /////////////////////////////////////////////////////////////////////////////////////

* A function call, or invocation, is when we actually use or execute the function. To call a function, you will need to reference 
the function name followed by a set of parentheses:

function greet() {
  console.log("Hello, Jessica!");
}

greet(); // "Hello, Jessica!"

----------------------------------------

function greet(name) {
  console.log("Hello, " + name + "!");
}

greet("Alice"); // Hello, Alice!
greet("Nick"); // Hello, Nick!

----------------------------------------
When a function finishes its execution, it will always return a value. By default, the return value will be undefined. Here is an 
example:

function doSomething() {
  console.log("Doing something...");
}

let result = doSomething();
console.log(result); // undefined

----------------------------------------

* If you need your function to return a specific value, then you will need to use the return statement. Here is an example of 
using a return statement to return the sum of two values:

function calculateSum(num1, num2) {
  return num1 + num2;
}

console.log(calculateSum(3, 4)); // 7

----------------------------------------

So far, we've been working with named functions, but you can also create what's called an anonymous function. An anonymous 
function is a function without a name that can be assigned to a variable like this:

const sum = function (num1, num2) {
  return num1 + num2;
};

console.log(sum(3, 4)); // 7

----------------------------------------

Functions support default parameters, allowing you to set default values for parameters. These default values are used if the 
function is called without an argument for that parameter. Here's an example:

function greetings(name = "Guest") {
  console.log("Hello, " + name + "!");
}

greetings(); // Hello, Guest!
greetings("Anna"); // Hello, Anna!


*/