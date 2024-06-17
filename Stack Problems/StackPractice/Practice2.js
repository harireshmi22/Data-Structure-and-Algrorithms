
function simpleEValuate(exp) {
    let stack = [];

    // scan the given infix 
    for (let i = 0; i < exp.length; i++) {
        let c = exp[i];

        if (!isNaN(parseInt(c))) {
            stack.push(parseInt(c)); // parseInt(c) converts the character c to an integer.
        } else {
            let val1 = stack.pop(); // pop 1 element 
            let val2 = stack.pop();

            switch (c) {
                case '+':
                    stack.push(val2 + val1);
                    break;

                case '-':
                    stack.push(val2 - val1);
                    break;

                case '*':
                    stack.push(val2 * val1);
                    break;

                case '/':
                    stack.push(val2 / val1);
                    break
            }
        }
    }

    return stack.pop();
}

let exp = "231*+9-";
console.log("Postfix evaluation: " + simpleEValuate(exp)); // Output: -4