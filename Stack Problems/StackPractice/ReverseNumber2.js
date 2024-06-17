

function reverse_number(num) {
    // Step 1: Convert the number to string 
    // Convert the number to a string: This allows us to easily access each digit of the number
    let numStr = num.toString();

    // Step 2: Initialize an empty array to use as a stack 
    let stack = [];

    // Step 3: Push each character (digit) of the string onto the stack 
    /* Push each digit onto the stack: We loop through the string and push each character (digit) onto the stack. */
    for (let i = 0; i < numStr.length; i++) {
        stack.push(numStr[i]);
    }

    // Step 4: Initialize an empty string to store the reversed number 
    let reversedStr = '';

    // Step 5:  Pop each character from the stack and append it to the reversed string 
    /* Pop each digit from the stack: We initialize an empty string to build the reversed number. By popping   from the stack, we get the digits in reverse order. */
    while (stack.length > 0) {
        reversedStr = reversedStr + stack.pop();
    }

    // Step 6: Covert the reversed String back to a number 
    // Convert the reversed string back to a number: Finally, we convert the reversed string back to an integer.
    // let reversedNum = parseInt(reversedStr);

    // Step 7: Return the reversed number 
    return reversedStr;
}

let originalNumber = 'abced';
let reversedNumber = reverse_number(originalNumber);
console.log(reversedNumber); 