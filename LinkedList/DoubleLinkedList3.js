// Node class to represent each node in the doubly linked list
class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
        this.prev = null;
    }
}

// DoublyLinkedList class
class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    // Method to add a node at the end of the list
    add(data) {
        const newNode = new Node(data);
        
        if (this.head === null) {
            // If the list is empty, set head and tail to the new node
            this.head = newNode;
            this.tail = newNode;
        } else {
            // If the list is not empty, append the new node at the end
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }
    }

    // Method to delete a node at a given position
    deleteNodeAtPosition(position) {
        if (this.head === null) {
            console.log("List is empty. No node to delete.");
            return;
        }

        let current = this.head;
        let count = 0;

        // Traverse to the node at the given position
        while (current && count < position) {
            current = current.next;
            count++;
        }

        if (current === null) {
            console.log(`Position ${position} is out of bounds.`);
            return;
        }

        // If the node to be deleted is the head
        if (current === this.head) {
            this.head = current.next;
            if (this.head) {
                this.head.prev = null;
            } else {
                // If the list becomes empty, update the tail as well
                this.tail = null;
            }
        } else if (current === this.tail) {
            // If the node to be deleted is the tail
            this.tail = current.prev;
            this.tail.next = null;
        } else {
            // Node to delete is in the middle
            current.prev.next = current.next;
            current.next.prev = current.prev;
        }

        console.log(`Node at position ${position} deleted.`);
    }

    // Method to print the list
    printList() {
        let current = this.head;
        while (current) {
            console.log(current.data);
            current = current.next;
        }
    }
}

// Usage example
const dll = new DoublyLinkedList();
dll.add(10);
dll.add(20);
dll.add(30);
dll.add(40);

console.log("List before deleting the node at position 2:");
dll.printList();

dll.deleteNodeAtPosition(2);

console.log("List after deleting the node at position 2:");
dll.printList();
