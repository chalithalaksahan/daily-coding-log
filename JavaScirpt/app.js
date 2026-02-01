console.log("Hello, World!");
/*
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

        










               */
  
