## Task 1: Build a function-based console log message generator
In this exercise, your task is to code a function named `consoleStyler`, which accepts four parameters:
- `color`
- `background`
- `fontSize`
- `txt`

Inside the body of the consoleStyler() function declaration, you need to do the following:

1. Create a new variable named message, and assign the following to it on the very first line inside the consoleStyler() function body.: 
    ```
    "%c" + txt;
    ```

    Tip: Do not copy the 3 back ticks. These are used to format this document in the Preview tab.

2. Create a style variable and assign the following to it on the next line: 
    ```
    `color: ${color};`
    ```
	
	Tip: The single backtick before color and after the semi-colon must be included.

3. Next, update the style variable (using the += operator) with the following code: 
    ```
    `background: ${background};`
    ```
	
	Tip: The single backtick before background and after the semi-colon must be included.

4. Then, update the style variable (again, using the += operator) with the following code: 
    ```
    `font-size: ${fontSize};`
    ```
	
	Tip: The single backtick before font-size and after the semi-colon must be included.

5. Finally, console log the message and style variables inside the `consoleStyler` function declaration.

Hint: Be sure to use backticks (``) when updating your variable styles and not single ('') or double ("") quotes.

<br>

## Task 2: Build another console log message generator. 

Your task is to code another function, and name it `celebrateStyler()`. The function accepts a single parameter, reason, which should be of string data type.

Inside the function declaration's body, code the following: 

1. A new variable, named fontStyle, assigning it this code:
    ```
    "color: tomato; font-size: 50px";
    ```

2. On the next line, an if statement, verifying that `reason == "birthday"`. 

3. Inside the body of the if block, code the following: 
    ```
    console.log(`%cHappy birthday`, fontStyle);
    ```

4. On the next line, add an else if, and inside the parentheses, check that 
    ```
    reason == "champions"
    ```

5. Inside the else if block, add this code: 
    ```
    console.log(`%cCongrats on the title!`, fontStyle);
    ```

6. Add an else block, with the following code inside of it: 
    ```
    console.log(message, style);
    ```

<br>

## Task 3: Run both the consoleStyler and the celebrateStyler functions

1. Invoke the consoleStyler() function, with the following arguments:

    - `'#1d5c63'`

    - `'#ede6db'`

    - `'40px'`

    - `'Congrats!'`

2. Next, invoke the celebrateStyler() function, with the following argument:

    - `'birthday'`


## Task 4: Insert a congratulatory and custom message

1. Code another function, named `styleAndCelebrate()`.   
The function declaration's body should consist of two function invocations:
    ```
    consoleStyler(color, background, fontSize, txt);  
    celebrateStyler(reason);