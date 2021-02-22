class Node {
    constructor(_data,_next=null) {
        this.data = _data;
        this.next = _next;
    }
}

class LinkedList {
    //It makes more sense to use "head" as a pointer to the first member and not carry actual list data
    //It's easier to insert new values at the head of the list this way.
    constructor (_label = "HEAD") {
        this.head = new Node(_label);
    }

    // [HEAD] -> [1] -> [2] -> NULL
    append(_data) {
        let node = this.head;
        while (node.next) node = node.next;
        node.next = new Node (_data);
    }

    insert(_position,_data) {
        let node = this.head;
        let counter = 0;
        while (node.next && counter < _position) {
            node = node.next;
            counter++;
        }

        if (node.next) {
            node.next = new Node(_data,node.next);
        }
        else {
            node.next = new Node (_data);   
        }

    }

    remove(_position) {
        if (_position <= 0) return false;
        let node = this.head;
        let counter = 0;
        while (node.next && counter < _position-1) {
            node = node.next;
            counter++;
        }

        if (counter == _position-1) {
            if (node.next) {
                //[*] -> [pos] -> []
                if (node.next.next) {
                    node.next = node.next.next;   
                }
                //[*]->[pos]->NULL
                else {
                    node.next = null;
                }
            }
            else return false;
        }
        return true;
    }


    getFirst() {
        if (this.head.next) return this.head.next.data;
        else return null;
    }

    getLast() {
        let node = this.head;
        while (node.next) node = node.next;
        if (node === this.head) return null;
        else return node.data;

    }



    reverse() {
        function reverse_list(node) {
            let previous = null;
            while(node) {
                let temp = node.next;
                node.next = previous;
                previous = node;
                node = temp;
            }
        
            return previous;
        
        }

        this.head.next = reverse_list(this.head.next);
    }

    print() {
        console.log(`Linked list: ${this.head.data}`);
        console.log('--------------------------------------------');
        let node = this.head.next;
        let position = 1;
        while (node) {
            console.log(`Position: ${position} | Value: ${node.data}`);
            node = node.next; 
            position++;           
        }
    }


    //HEAD.DATA: [data] -> [data] -> [data]
    //My numbers: [1] -> [2] -> [3] -> [4]
    draw() {
        let result = this.head.data+": ";

        if (this.head.next) result += `[${this.head.next.data}]`;

        let node = this.head.next.next;
        while (node) {
            result += ` => [${node.data}]`;
            node = node.next;
        }

        return result;
    }
}


let numbers = new LinkedList("My numbers");
numbers.append(1);
numbers.append(2);
numbers.append(3);
numbers.append(4);
numbers.append(5);
numbers.append(6);
numbers.append(7);
numbers.append(8);
numbers.append(9);
numbers.append(10);
//numbers.insert(5,"TEST");
//numbers.reverse();
//numbers.print();
numbers.remove(4);
console.log(numbers.draw());

