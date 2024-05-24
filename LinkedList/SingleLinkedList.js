

class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

// Function to traverse and print the elements of the linked list

function traverseLinkedList(head) {
    // Start from the head of the linked list

    let current = head;

    // Traverse the linked list until reaching the end(null)
    while (current !== null) {
        console.log(current.data + "");

        // Move to the next node
        current = current.next;
    }

    console.log();
}

// Example usage:
// Assuming the linked list is already constructed

// Create nodes

let head = new Node(1);
let second = new Node(2);
let third = new Node(3);
let four = new Node(4); 


head.next = second;
second.next = third;
third.next = four; 


// Call the traverseLinkedList function to print the linked list elements
traverseLinkedList(head);


// Finding Length in Singly Linked List:

// Steps for finding length in Singly Linked List:

// Initialize a counter variable length to 0.
// Create a pointer current and set it to the head of the linked list.
// Use a while loop to iterate through the linked list:
// Increment the length counter.
// Move the current pointer to the next node in the list.
// After the loop, return the final value of the length variable.

