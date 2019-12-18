//the only difference is the .previous!
class Node {
    constructor(value){
        this.value = value;
        this.next = null;
        this.previous = null;
    }
}

class DoublyLinkedList {
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    push(value){
        const newNode = new Node(value);

        if(!this.head){
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.previous = this.tail;
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
    }
    pop(){
        if(!this.head) return undefined;
        const newTail = this.tail.previous;
        const chopped = this.tail;

        this.tail = newTail;
        newTail.next = null;
        chopped.previous = null;
        this.length--;
        if(this.length === 0){
            this.head = null;
            this.tail = null;
        }
    }
    shift(){
        if(!this.head) return undefined;
        const newHead = this.head.next;
        const chopped = this.head;

        this.head = newHead;
        chopped.next = null;
        newHead.previous = null;
        this.length--;

        if(this.length === 0){
            this.head = newHead;
            this.tail = newTail;
        }
    }
    unshift(value){
        const newNode = new Node(value);
        const second = this.head;
        if(!this.head) return this.push(value);
        this.head = newNode;
        newNode.next = second;
        second.previous = newNode;
        this.length++;
    }
    get(index){
        if(index < 0 || index >= this.length) return undefined;
        let count, current;
        if(index <= this.length/2){
            count = 0;
            current = this.head;
            while(count !== index){
                current = current.next;
                count++;
            }
        } else {
            count = this.length - 1;
            current = this.tail;
            while(count !== index){
                current = current.previous;
                count--;
            }
        }
        // console.log(current);
        return current;
    }
    set(index, value){
        let foundNode = this.get(index);
        foundNode.value = value;
    }
    insert(index, value){
        const newNode = new Node(value);
        if(index < 0 || index > this.length) return undefined;
        if(this.length === 0 || index === this.length) return this.push(value);
        if(index === 0) return this.unshift(value);

        const prev = this.get(index - 1);
        const after = prev.next;

        prev.next = newNode, newNode.previous = prev;
        newNode.next = after, after.previous = newNode;
        this.length++;
    }
    remove(index){
        if(index < 0 || index >= this.length) return undefined;
        if(index === 0 ) return this.shift();
        if(index === this.length - 1) return this.pop();

        const prev = this.get(index - 1);
        const chopped = prev.next;
        const after = prev.next.next;
        
        prev.next = after;
        after.previous = prev;
        chopped.next = null, chopped.previous = null;
        this.length--;
    }
}

const dll = new DoublyLinkedList;
dll.push('first');
dll.push('second');
dll.push('third');
dll.push('fourth');

dll.remove(1)

console.log(dll)