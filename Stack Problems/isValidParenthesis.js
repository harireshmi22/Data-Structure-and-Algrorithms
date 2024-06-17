
function isvalidParenthesis(s) {
    const stack = [];

    const map = {
        ')': '(',
        '}': '{',
        ']': '['
    };

    // loop through each character in the string
    for (let i = 0; i < s.length; i++) {
        const char = s[i];

        // If the character is a closing parenthesis
        if (map[char]) {
            // Pop the top element from the stack 
            const topElement = stack.length ? stack.pop() : '#';

            // if the popped element does not match the expected opening parenthesis, return false 
            if (topElement !== map[char]) {
                return false;
            }
        } else {
            // if the character is opening parenthesis, push it onto the stack 
            stack.push(char);
        }
    }

    // if the stack is empty, all parenthesis were matched correctly 
    return stack.length === 0;
}

console.log(isvalidParenthesis("()")); // true
console.log(isvalidParenthesis("()[]{}")); // true
console.log(isvalidParenthesis("(]")); // false
console.log(isvalidParenthesis("([)]")); // false
console.log(isvalidParenthesis("{[]}")); // true