

class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    push(data) {

        const newNode = new Node(data);

        if (this.head === null) {
            this.head = newNode;
        } else {

            let current = this.head;

            while (current.next !== null) {
                current = current.next;
            }

            current.next = newNode;
        }
    }

    findLength() {

        let count = 0;
        let current = this.head;

        while (current !== null) {
            count++;
            current = current.next;
        }

        return count;
    }
}

const list = new LinkedList();

list.push(1);
list.push(2);
list.push(3);
list.push(4);
list.push(5); 

console.log("Length of the linked list is: " + list.findLength());