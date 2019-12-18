//Singly-linked List
// data structure that stores value, similar to that of an Array,
// except linked lists are not numbered by indices.
// It is good ds to use if insertion and deletion is prevalent,
// especially beginning of the data.

class Node {
    constructor(value){
        this.value = value;
        this.next = null
    }
}

class SinglyLinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    push(val){
        const newNode = new Node(val);
        if(!this.head){
            this.head =  newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            this.tail = newNode
        }
        this.length++;
    }
    pop(){
        if(!this.head) return undefined;
        let current = this.head;
        let newTail = current;

        while(current.next){
            newTail = current;
            current = current.next;
        }
        this.tail = newTail;
        this.tail.next = null;
        this.length--;
        if(this.length === 0){
            this.head = null;
            this.tail = null;
        }
        return current;
    }
    shift(){
        if(!this.head) return undefined;
        let chopped = this.head;
        this.head = this.head.next;
        chopped.next = null;
        this.length --;

        if(this.length === 0){
            this.head = null;
            this.tail = null;
        }
        return chopped;
    }
    get(index){
        if(index < 0 || index >= this.length) return undefined;
        let count = 0;
        let current = this.head;

        while(count !== index){
            current = current.next;
            count++;
        }
        console.log(current);
        return current;
    }
    set(index, value){
        let foundNode = this.get(index);
        foundNode.value = value;
        return foundNode;
    }
    insert(index, value){
        if(index < 0 || index > this.length) return undefined;
        if(this.length === 0) return this.push(value);
        let newNode = new Node(value);
        let prev = this.get(index - 1);
        let after = prev.next;

        prev.next = newNode;
        newNode.next = after;
        this.length++;
    }
    remove(index){
        if(index < 0 || index >= this.length) return undefined;
        let prev = this.get(index - 1);
        let after = prev.next.next;
        let removed = this.get(index);

        prev.next = after;
        removed.next = null;
        this.length--;
        
    }
    reverse(){
        let node = this.head;
        this.head = this.tail;
        this.tail = node;
        let prev = null;
        let next;
        for(let i = 0; i < this.length; i++){
            next = node.next;
            node.next = prev;
            prev = node;
            node = next;
        }
    }
}

// {'first' --> 'second' --> 'third'};



const sll = new SinglyLinkedList;
sll.push('first');
sll.push('second');
sll.push('third');
sll.push('fourth');
sll.push('fifth');

sll.reverse()


console.log(sll)