function simpleEvaluatePostfix(expression) {
    // Stack to store numbers
    let stack = [];

    // Loop through each character in the expression
    for (let char of expression) {
        if (!isNaN(parseInt(char))) {
            // If the character is a number, push it onto the stack
            stack.push(parseInt(char));
        } else {
            // If the character is an operator, pop two numbers from the stack
            let b = stack.pop();
            let a = stack.pop();
            // Perform the operation and push the result back onto the stack
            switch (char) {
                case '+':
                    stack.push(a + b);
                    break;
                case '-':
                    stack.push(a - b);
                    break;
                case '*':
                    stack.push(a * b);
                    break;
                case '/':
                    stack.push(a / b);
                    break;
            }
        }
    }

    // The final result is the last element in the stack
    return stack.pop();
}

// Test the simplified function
let exp = "231*+9-";
console.log("Postfix evaluation: " + simpleEvaluatePostfix(exp)); // Output: -4
