//Build a link list

class LinkedList {
    constructor(head = null) {
        this.head = head;
    }
    getFirst () {
        return this.head;
    }
    getLast () {
        let lastNode = this.head;
        if (lastNode) {
            while (lastNode.next) {
                lastNode = lastNode.next;
            }
        }
        return lastNode;
    }
    print() {
        let result = [];
        let lastNode = this.head;
        while (lastNode.next) {
            result.push(lastNode.data);
            lastNode = lastNode.next;
        }
        result.push(lastNode.data);
        return result.join(' => ');
    }
    reverseList () {
        let prev = null;
        let next = null;
        let current = this.head;
        while (current !== null) {
            next = current.next;
            current.next = prev;
            prev = current;
            current = next;
        }
        this.head = prev;
        return prev;
    }
    removeNode (head = this.head, k) {
        //if linked list is empty
        if (head == null) return;
        //else
        let temp = this.head;
        //If k = 0, replace the head to the next item
        if (k == 0) {
            this.head = this.head.next;
            return;
        }
        //loop over the nodes untile you find the node in 
        //position -k (one before the one we wish to delete)
        for (let i = 0; temp!= null && i < k-1; i++) {
            temp = temp.next;
        }
        //if k is larger than the length of the list
        if (temp == null || temp.next == null) return;
        //Re-point the pointer of the previous node,
        //to the one after the deleted node
        temp.next = temp.next.next;
    }
}


class ListNode {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

//Creating two nodes, node1 & node2, 
//and a pointer from node1 to node2
let node1 = new ListNode(1);
let node2 = new ListNode(2);
let node3 = new ListNode(3);
let node4 = new ListNode(4);
let node5 = new ListNode(5);
node1.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node5;
node5.next = null;

//Creating a linked list with node1
let list = new LinkedList(node1);


//Get first method (added on the linkedList class)
console.log("___________________________________");
console.log("Get First: ");
console.log(list.getFirst());

//Get last method (added on the linkedList class)
console.log("___________________________________");
console.log("Get Last: ");
console.log(list.getLast());

//Draw the list (added on the linkedList class)
console.log("___________________________________");
console.log("Draw: "+list.print());

// //Reverse the list
// console.log("___________________________________");
// console.log("Reversed:");
// console.log(list.reverseList());

//Remove Node (k)
console.log("___________________________________");
console.log("removed (2):");
list.removeNode(this.head, 2);
console.log(list);

console.log("___________________________________");
list.reverseList();
console.log(list);