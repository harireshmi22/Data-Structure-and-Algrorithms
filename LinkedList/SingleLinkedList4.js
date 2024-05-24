// Node class to represent each element in the linked list
class Node {
    constructor(value) {
        this.value = value;  // The value stored in the node
        this.next = null;    // Pointer to the next node in the list
    }
}

// SinglyLinkedList class to manage the list
class SinglyLinkedList {
    constructor() {
        this.head = null;  // The head (first node) of the list
    }

    // Function to insert a node at the beginning of the list
    insertAtHead(value) {
        const newNode = new Node(value);
        newNode.next = this.head;  // The new node points to the current head
        this.head = newNode;       // The head is updated to be the new node
    }

    // Function to insert a node at the end of the list
    insertAtTail(value) {
        const newNode = new Node(value);
        if (this.head === null) {  // If the list is empty
            this.head = newNode;   // The new node becomes the head
            return;
        }
        let current = this.head;
        while (current.next !== null) {  // Traverse to the end of the list
            current = current.next;
        }
        current.next = newNode;  // The last node points to the new node
    }

    // Function to delete a node by value
    deleteByValue(value) {
        if (this.head === null) return;  // If the list is empty, do nothing

        if (this.head.value === value) {  // If the head needs to be removed
            this.head = this.head.next;  // Update the head to the next node
            return;
        }

        let current = this.head;
        while (current.next !== null && current.next.value !== value) {
            current = current.next;  // Traverse to the node before the one to be deleted
        }

        if (current.next === null) return;  // If the value was not found, do nothing

        current.next = current.next.next;  // Bypass the node to be deleted
    }

    // Function to print the linked list
    printList() {
        let current = this.head;
        while (current !== null) {
            console.log(current.value);  // Print the value of each node
            current = current.next;  // Move to the next node
        }
    }
}

// Example usage
const list = new SinglyLinkedList();
list.insertAtHead(10);
list.insertAtHead(20);
list.insertAtTail(30);
list.printList();  // Output: 20 10 30
list.deleteByValue(10);
list.printList();  // Output: 20 30
