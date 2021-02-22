//Node = object
//data - any type of value (string, etc)
//next - object of type Node
//

head = {
    data:"one",
    next: {
        data: "two",
        next: {
            data: "three",
            next: {
                data: "four",
                next: null
            }
        }
    }
}

middle = head.next.next.next;

function print_list(node) {
    while(node) {
        console.log(node.data);
        node = node.next;
    }
}

function append_list(node, value) {
    while(node.next) node = node.next;
    node.next = {data : value, next : null};
}

//Change the "next" of the previous node to point to the new node
//set the new node "next" to point at the next node
// [] -> [] -> [] -> []
//       (*)
//       [] - =     

function insert_after(node, value) {
    let newNode = {data: value, next: node.next};
    node.next = newNode;
}

function delete_after(node) {
    if (node.next) node.next = node.next.next;
}

// [1*] -> [2] -> [3] -> [4] -> null
// null <- [1] <- [2] <- [3] <- [4]
// My new 'next' is my Previous
// My next's new 'next' is me
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

append_list(head,"five");

insert_after(head.next,"two and a half");
//delete_after(head.next.next);
console.log(head);
print_list(head);
newHead = reverse_list(head);
console.log("------------------------- REVERSED ---------------------");
print_list(newHead);