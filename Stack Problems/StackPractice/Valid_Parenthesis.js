function isvalid(exp) {
    const stack = [];
    for (let i = 0; i < exp.length; i++) {
        const char = exp[i];

        if (char === '(' || char === '[' || char === '{') {
            stack.push(char);
            continue;
        }

        if (stack.length === 0) {
            return false;
        }

        let topElement;
        switch (char) {
            case ')':
                topElement = stack.pop();
                if (topElement !== '(') {
                    return false;
                }
                break;

            case '}':
                topElement = stack.pop();
                if (topElement !== '{') {
                    return false;
                }
                break;

            case ']':
                topElement = stack.pop();
                if (topElement !== '[') {
                    return false;
                }
                break;
        }
    }

    return stack.length === 0;
}

// Example usage
const expression = "()[(){()}]";
if (isvalid(expression)) {
    console.log("This is a Balanced Expression");
} else {
    console.log("This is Not a Balanced Expression");
}
