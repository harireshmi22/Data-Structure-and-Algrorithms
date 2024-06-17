// Javascript program to evaluate value of a postfix expression

// Method to evaluate value of a postfix expression

function evaluatePostfix(exp) {
    // create a stack
    let stack = [];

    // Scan all character one by one
    for (let i = 0; i < exp.length; i++) {
        let c = exp[i];

        // If the scanned character is an operand (number here),
        // push it to the stack.

        // parseInt(c) converts the character c to an integer.
        // isNaN checks if the conversion results in a number.
        // If c is a number, it is pushed onto the stack after converting the character to its numeric value.
        if (!isNaN(parseInt(c))) stack.push(c.charCodeAt(0) - "0".charCodeAt(0));
        //  If the scanned character is an operator, pop two
        // elements from stack apply the operator
        else {
            let val1 = stack.pop();
            let val2 = stack.pop();

            switch (c) {
                case "+":
                    stack.push(val2 + val1);
                    break;

                case "-":
                    stack.push(val2 - val1);
                    break;

                case "*":
                    stack.push(val2 * val1);
                    break;

                case "/":
                    stack.push(val2 / val1);
                    break;
            }
        }
    }
    return stack.pop();
}

// Driver program to test above functions
let exp = "231*+9-";
console.log("postfix evaluation: " + evaluatePostfix(exp));


// Explanation of Simplified Function
// Initialization:
// stack is created to store numbers.
// Iteration:
// For each character in the expression, it checks if it's a number or an operator.
// Handling Numbers:
// If it's a number, it's pushed onto the stack.
// Handling Operators:
// If it's an operator, the last two numbers are popped from the stack.
// The operation is performed and the result is pushed back onto the stack.
// Result:
// The final result is the last element in the stack.