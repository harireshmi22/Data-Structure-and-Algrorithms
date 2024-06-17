class Stack {
    constructor() {
        this.arr = new Array(100);
        this.top1 = -1;
        this.top2 = this.arr.length + 1;
    }

    push1(x) {
        if (this.top1 < this.top2 - 1) {
            this.top1++;
            this.arr[this.top1] = x;
        } else {
            return;
        }
    }

    push2(x) {
        if (this.top1 < this.top2 - 1) {
            this.top2--;
            this.arr[this.top2] = x;
        } else {
            return;
        }
    }

    pop1() {
        if (this.top1 > 0) {
            const value = this.arr[this.top1];
            this.arr[this.top1--] = null;
            return value;
        } else {
            return -1;
        }
    }

    pop2() {
        if (this.top2 <= 100) {
            const value = this.arr[this.top2];
            this.arr[this.top2] = null;
            this.top2++;
            return value;
        } else {
            return -1;
        }
    }
}

// Driver program to test twoStack class 
let ts = new Stack(); 
ts.push1(5);
ts.push2(10);
ts.push2(15);
ts.push1(11);
ts.push2(7);
console.log(ts); 
console.log("Popped element from" + " stack1 is " + ts.pop1());
ts.push2(40);
console.log("Popped element from" + " stack2 is " + ts.pop2()); 
