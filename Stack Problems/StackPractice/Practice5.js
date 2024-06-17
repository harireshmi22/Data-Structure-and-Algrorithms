
function reverse_number(num) {

    let numstring = num.toString();
    let stack = [];

    for (let i = 0; i < numstring.length; i++) {
        stack.push(numstring[i]);
    }

    let reverse = '';
    while (stack.length > 0) {
        reverse = reverse + stack.pop();
    }

    return reverse;
}

let number = 123456;+
console.log("Original Number: " + number)
const numbers = reverse_number(number);
console.log("Reverse Number: " + numbers); 
