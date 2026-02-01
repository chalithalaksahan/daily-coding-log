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

*/
              