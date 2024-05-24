
class LinkedList {
    constructor(data) {
        this.data = data;
        this.next = null;
    }

    findLength() {
        let length = 1; // Start from 1 since the current instance is already counted
        let current = this.next; // Start from the next node

        while (current !== null) {
            length++;
            current = current.next;
        }

        return length;
    }

    push(newData) {
        const newNode = new LinkedList(newData);
        newNode.next = this.next;
        this.next = newNode;
    }
}

const llist = new LinkedList(1); // Initialize the linked list with a node

// Adding elements to the list
llist.push(3);
llist.push(5);

// Printing the length of the list