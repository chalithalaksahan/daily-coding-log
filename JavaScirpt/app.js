console.log("Hello, World!");
/*              
                //////////////////////////////////////////////////////////////////////////////////////
                                     What Are Unary Operators, and How Do They Work?
               /////////////////////////////////////////////////////////////////////////////////////
        const str = '42';
        const strToNum = +str;

        console.log(strToNum); // 42
        console.log(typeof str); // string
        console.log(typeof strToNum); // number    

        const str = '42';
        const strToNegativeNum = -str;

        console.log(strToNegativeNum); // -42
        console.log(typeof str); // string
        console.log(typeof strToNegativeNum); // number

        let isOnline = true;
        console.log(!isOnline); // false

        let isOffline = false;
        console.log(!isOffline); // true

        const num = 5; // The binary for 5 is 00000101

        console.log(~num); // -6

        const result = void (2 + 2);

        console.log(result); // undefined


        const value = 'Hello world';

        console.log(typeof value); // string
                
                
               //////////////////////////////////////////////////////////////////////////////////////
                                     What Are Bitwise Operators, and How Do They Work ?
               /////////////////////////////////////////////////////////////////////////////////////
                   
    
   *  These operators perform operations on the binary representations of numbers.JavaScript provides several bitwise operators, 
      including AND(&), OR(|), XOR(^), NOT(~), left shift(<<), and right shift(>>).

        let a = 5;  // Binary: 101
        let b = 3;  // Binary: 011
        console.log(a & b);  // 1 (Binary: 001)

        let a = 5;  // Binary: 101
        let b = 3;  // Binary: 011
        console.log(a | b);  // 7 (Binary: 111)

        let a = 5;  // Binary: 101
        let b = 3;  // Binary: 011
        console.log(a ^ b);  // 6 (Binary: 110)

        let a = 5;  // Binary: 101
        console.log(~a);  // -6

        let a = 5;  // Binary: 101
        console.log(a << 1);  // 10 (Binary: 1010)

        let a = 5;  // Binary: 101
        console.log(a >> 1);  // 2 (Binary: 10)


     
              //////////////////////////////////////////////////////////////////////////////////////
                    What Are Conditional Statements, and How Do If/Else If/Else Statements Work?
               /////////////////////////////////////////////////////////////////////////////////////

        true values include:

             -   non-empty strings, for example, hello

             -   any number other than 0 and -0, for example, 4, -5, and others

             -   arrays

             -   objects

             -   the boolean true

        false values include:

             -   boolean false

             -   0 (zero)

             -   "" (empty string)

             -   null

             -   undefined

             -   NaN (Not a Number)
               
        ***********************************************************************************

            if (null) {
                console.log("This will not run.");
            }

        ***********************************************************************************

            if ("freeCodeCamp") {
                console.log("This will run.");
            }  

        ***********************************************************************************
           
            const age = 22;

            if (age >= 18) {
                console.log("You're eligible to vote"); // You're eligible to vote
            }
        ************************************************************************************
             const age = 15;

            if (age >= 18) {
                console.log("You're eligible to vote"); // Code not running because age is less than 18
            }


        ************************************************************************************


            const age = 15;

            if (age >= 18) {
                console.log("You're eligible to vote");
            } else {
                console.log("You're not eligible to vote"); // You're not eligible to vote
            }

        ************************************************************************************

           const score = 87;

            if (score >= 90) {
            console.log('You got an A'); 
            } else if (score >= 80) {
            console.log('You got a B');                            // You got a B
            } else if (score >= 70) {
            console.log('You got a C');
            } else {
            console.log('You failed! You need to study more!');
            } 
            
        ************************************************************************************    
            // Ternary Operator Syntax
        ------------------------------------------------------------------------
                    condition ? expressionIfTrue : expressionIfFalse;
        ------------------------------------------------------------------------

        const temperature = 30;

        const weather = temperature > 25 ? 'sunny' : 'cool';

        console.log(`It's a ${weather} day!`);

               //////////////////////////////////////////////////////////////////////////////////////
                                        Binary Logical Operators
               /////////////////////////////////////////////////////////////////////////////////////
        
         ----   &&   ---- logical AND 

        The logical AND operator is represented by a double ampersand (&&). It checks if both operands are true and returns a result. 
        If both operands are truthy, it returns the second value, that is, the one on the right:


        const result = true && 'hello';
        console.log(result); // hello

        In the example above, the text hello is logged to the console because both operands are true. If either operand is falsy, 
        it returns the falsy value:

        const result = 0 && 3;
        console.log(result); // 0

        Since 0 is a falsy value, the number 0 is logged to the console. And if both operands are falsy, it returns the first 
        falsy value:

        const result = false && 0;
        console.log(result); // false

        Since false is a falsy value, then false is logged to the console. The logical AND operator is useful when you want to 
        check multiple conditions and ensure that all are true before proceeding. Here is an example:

        if (2 < 3 && 3 < 4) {
        console.log('The if block runs'); 
        } else {
        console.log('The else block runs');
        } 
        In the condition, since 2 is less than 3 AND 3 is less than 4, then the sentence The if block runs will be logged to the 
        console.

        ************************************************************************************

        ----  ||   ---- logical OR
        
        The logical OR operator checks if at least one of the operands is truthy. If the first operand is truthy, it returns that
        value:

        const result = 'This is truthy' || false;
        console.log(result); // This is truthy

        If the first operand is falsy but the second is truthy, the second value will be logged to the console:

        const result = 0 || 'This is truthy';
        console.log(result); // This is truthy

        It is common to use the logical OR operator in if/else statements like this:

        let userInput;

        if (userInput || 'Guest') {
        console.log('A user is present');
        } else {
        console.log('No user detected');
        }

        Since we didn't assign a value to the userInput variable, it is currently undefined. The condition in the if statement 
        checks if either the userInput variable or the string Guest are truthy. Since the string Guest is true in a boolean 
        context like this, the string A user is present will be logged to the console.

        ************************************************************************************
        ----  ??   ---- nullish coalescing operator

        The nullish coalescing operator is more sophisticated than logical OR and logical AND. Represented by a double question 
        mark (??), it helps in scenarios where you want to return a value only if the first one is null or undefined. Here is an 
        example of working with the nullish coalescing operator:

        const result = null ?? 'default';
        console.log(result); // default

        Since null is a nullish value, the string default would be logged to the console. The nullish coalescing operator is 
        incredibly useful in situations where null or undefined are the only values that should trigger a fallback or default value. 
        Here is an example of dealing with a user's preference settings:

        const userSettings = {
        theme: null,
        volume: 0,
        notifications: false,
        };

        let theme = userSettings.theme ?? 'light';
        console.log(theme); // light

        In the example above, we have an object called userSettings that contains theme, volume and notifications properties. 
        We are accessing the theme using dot notation like userSettings.theme. You will learn more about how to work with objects 
        in a future lesson. Since the user's theme is currently set to null, then the string light will be logged to the console.
    
               //////////////////////////////////////////////////////////////////////////////////////
                                        Math Object in JavaScript
               /////////////////////////////////////////////////////////////////////////////////////

        The Math.random() method generates a random floating-point number between 0 (inclusive) and 1 (exclusive). This means the 
        possible output can be 0, but it will never actually reach 1. Here is an example working with the Math.random() method:

        const randomNum = Math.random();
        console.log(randomNum);                                                //         0.5392005836109107
        // any number between 0 and 1 – 0 inclusive and 1 exclusive

        Math.min() and Math.max() both take a set of numbers and return the minimum and maximum value, respectively. Here is an 
        example of working both of those methods:

        const smallest = Math.min(1, 5, 3, 9);
        console.log(smallest); // 1

        const largest = Math.max(1, 5, 3, 9);
        console.log(largest); // 9

        console.log(Math.ceil(4.3)); // 5
        console.log(Math.floor(4.7)); // 4

        console.log(Math.round(2.3)); // 2
        console.log(Math.round(4.5)); // 5
        console.log(Math.round(4.8)); // 5

        console.log(Math.trunc(2.9)); // 2
        console.log(Math.trunc(9.1)); // 9

        console.log(Math.sqrt(81)); // 9
        console.log(Math.cbrt(27)); // 3

        console.log(Math.abs(-5)); // 5
        console.log(Math.abs(5)); // 5

        console.log(Math.pow(2, 3)); // 8
        console.log(Math.pow(8, 2)); // 64

        const max = 10;
        const min = 5;
        const randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
        console.log(randomNum);

        const randomNumBtw1And20 = Math.floor(Math.random() * 20) + 1;      //GENERATED RANDOM NUMBER BETWEEN 1 AND 20
        console.log(randomNumBtw1And20);



        
               //////////////////////////////////////////////////////////////////////////////////////
                                                 How Does isNaN Work?
               /////////////////////////////////////////////////////////////////////////////////////


        let result = 0 / 0;
        console.log(result); // NaN

        console.log(NaN === NaN); // false


        ---------------------------------not recomended---------------------------------------------------
        console.log(isNaN(NaN));       // true
        console.log(isNaN(undefined)); // true
        console.log(isNaN({}));        // true

        console.log(isNaN(true));      // false
        console.log(isNaN(null));      // false
        console.log(isNaN(37));        // false

        console.log(isNaN("37"));      // false: "37" is converted to 37
        console.log(isNaN("37.37"));   // false: "37.37" is converted to 37.37
        console.log(isNaN(""));        // false: empty string is converted to 0
        console.log(isNaN(" "));       // false: string with a space is converted to 0

        console.log(isNaN("blabla"));  // true: "blabla" is not a number

        ----------------------------------recomended----------------------------------------------------

        console.log(Number.isNaN(NaN));        // true
        console.log(Number.isNaN(Number.NaN)); // true
        console.log(Number.isNaN(0 / 0));      // true

        console.log(Number.isNaN("NaN"));      // false
        console.log(Number.isNaN(undefined));  // false
        console.log(Number.isNaN({}));         // false
        console.log(Number.isNaN("blabla"));   // false

        let a = 0;
        let b = 0;
        let result = a / b;

        if (Number.isNaN(result)) {
        result = "Error: Division resulted in NaN";
        }

        console.log(result); // "Error: Division resulted in NaN"


               //////////////////////////////////////////////////////////////////////////////////////
                                  How Do the parseFloat() and parseInt() Methods Work?
               /////////////////////////////////////////////////////////////////////////////////////

            console.log(parseFloat("3.14"));     // 3.14
            console.log(parseFloat("3.14"));     // 3.14
            console.log(parseFloat("3.14 abc")); // 3.14
            console.log(parseFloat("3.14.5"));   // 3.14
            console.log(parseFloat("abc 3.14")); // NaN  


            console.log(parseInt("42"));       // 42
            console.log(parseInt("42px"));     // 42
            console.log(parseInt("3.14"));     // 3
            console.log(parseInt("abc123"));   // NaN

        Both methods have some noteworthy behaviors. They ignore leading whitespace:

            console.log(parseFloat("  3.14"));  // 3.14
            console.log(parseInt("  42"));      // 42

        They also handle optional plus (+) and minus (-) signs:

            console.log(parseFloat("+3.14"));  // 3.14
            console.log(parseInt("-42"));      // -42

               //////////////////////////////////////////////////////////////////////////////////////
                                What Is the toFixed() Method, and How Does It Work?
               /////////////////////////////////////////////////////////////////////////////////////
        
            * The .toFixed() method is a built-in JavaScript function that formats a number using fixed-point notation. It's 
               particularly useful when you need to control the number of decimal places in a number, especially for displaying 
               currency values or when working with precise measurements.

            let num = 3.14159;
            console.log(num.toFixed(2)); // "3.14" 



            console.log((3.14159).toFixed(3));  // "3.142"
            console.log((3.14449).toFixed(3));  // "3.144"
            console.log((3.14550).toFixed(3));  // "3.146"



            let num = 3.14159;
            console.log(num.toFixed()); // "3"



            let price = 19.99;
            let taxRate = 0.08;
            let total = price + (price * taxRate);

            console.log("Total: $" + total.toFixed(2)); // "Total: $21.59"


               //////////////////////////////////////////////////////////////////////////////////////
                              How Do Comparisons Work with Null and Undefined Data Types?
               /////////////////////////////////////////////////////////////////////////////////////

            console.log(null == undefined); // true

            console.log(null === undefined); // false

            console.log(null == 0);  // false
            console.log(null == ''); // false
            console.log(undefined == 0); // false
            console.log(undefined == ''); // false

            console.log(null > 0);  // false
            console.log(null == 0); // false
            console.log(null >= 0); // true                     0>=0       null is converted to 0

            console.log(undefined > 0);  // false
            console.log(undefined < 0);  // false
            console.log(undefined == 0); // false


               //////////////////////////////////////////////////////////////////////////////////////
                      What Are Switch Statements and How Do They Differ from If/Else Chains?
               /////////////////////////////////////////////////////////////////////////////////////

               It's worth noting that switch statements in JavaScript use strict comparison (===), which means they don't perform 
               type coercion. This can be an advantage in terms of predictability and avoiding subtle bugs.
               
                switch (expression) {
                    case value1:
                        // code to be executed if expression === value1
                        break;
                    case value2:
                        // code to be executed if expression === value2
                        break;
                    default:
                        // code to be executed if expression doesn't match any case
                }



                let dayOfWeek = 3; 

                switch (dayOfWeek) {
                    case 1:
                        console.log("It's Monday! Time to start the week strong.");
                        break;
                    case 2:
                        console.log("It's Tuesday! Keep the momentum going.");
                        break;
                    case 3:
                        console.log("It's Wednesday! We're halfway there.");
                        break;
                    case 4:
                        console.log("It's Thursday! Almost the weekend.");
                        break;
                    case 5:
                        console.log("It's Friday! The weekend is near.");
                        break;
                    case 6:
                        console.log("It's Saturday! Enjoy your weekend.");
                        break;
                    case 7:
                        console.log("It's Sunday! Rest and recharge.");
                        break;
                    default:
                        console.log("Invalid day! Please enter a number between 1 and 7.");
                }

              switch statements can be more readable and concise when dealing with many possible values for a single variable.

              if/else if statements on the other hand are more flexible. They can evaluate complex conditions and different 
              variables in each clause. This makes them suitable for a wider range of scenarios.   



                let creditScore = 720; 
                let annualIncome = 60000; 
                let loanAmount = 200000; 

                let eligibilityStatus;

                if (creditScore >= 750 && annualIncome >= 80000) {
                    eligibilityStatus = "Eligible for premium loan rates.";
                } else if (creditScore >= 700 && annualIncome >= 50000) {
                    eligibilityStatus = "Eligible for standard loan rates.";
                } else if (creditScore >= 650 && annualIncome >= 40000) {
                    eligibilityStatus = "Eligible for subprime loan rates.";
                } else if (creditScore < 650) {
                    eligibilityStatus = "Not eligible due to low credit score.";
                } else {
                    eligibilityStatus = "Not eligible due to insufficient income.";
                }

                console.log(eligibilityStatus);







               */
  
