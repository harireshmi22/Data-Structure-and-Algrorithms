// Given a number , write a program to reverse this number using stack.
let stack = [];

function push_digit(number) {
    while (number != 0) {
        stack.push(number % 10);
        number = Math.floor(number / 10);
    }
}

function reverse_number(number) {
    // Push number's digits to stack 
    push_digit(number);

    let reverse = 0;
    let i = 1;

    // Popping the digit and forming the reversed number 
    while (stack.length !== 0) {
        reverse = reverse + (stack[stack.length - 1] * i);
        stack.pop();
        i = i * 10;
    }
    // Return the reverse number formed 
    return reverse;
}

// Driver program to test the above function
let number = 39997;
console.log(reverse_number(number)); 