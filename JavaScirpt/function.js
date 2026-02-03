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

               //////////////////////////////////////////////////////////////////////////////////////
                                 What Are Arrow Functions, and How Do They Work?
               /////////////////////////////////////////////////////////////////////////////////////

Here is how you can refactor the previous example to use arrow function syntax instead:

            const greetings = (name) => {
            console.log("Hello, " + name + "!");
            };

If your parameter list only has one parameter in it, then you can remove the parentheses like this:

            const greetings = name => {
            console.log("Hello, " + name + "!");
            };

If your arrow function has no parameters, then you must use the parentheses like this:

            const greetings = () => {
            console.log("Hello");
            };

if your function body only contains a single line of code, you can remove the curly braces like this:

            const greetings = name => console.log("Hello, " + name + "!");            
If you tried to remove the curly braces and place the calculation on the same line, then you would get an Uncaught SyntaxError: Unexpected token 'return' message:

const calculateArea = (width, height) => return width * height;
The reason why you are getting this error, is because you need to remove the return statement. When you remove that return statement, the error will disappear and the function will still implicitly return the calculation.

const calculateArea = (width, height) => width * height;
*/