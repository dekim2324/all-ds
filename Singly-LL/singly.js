
class Node {
    constructor(val){
        this.val = val;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    push(val){
        const newNode = new Node(val);
        if(!this.head){
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
        console.log(this)
        return this;
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
        this.length--;
        if(this.length === 0){
            this.head = null;
            this.tail = null;
        }
    }
    unshift(val){
        const newNode = new Node(val);
        const second = this.head;
        if(this.length === 0){
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.head = newNode;
            newNode.next = second
        }
        this.length++;
    }
    get(index){
        if(index < 0 || index >= this.length) return null;
        let current = this.head;
        let count = 0;
        while(index !== count){
            current = current.next;
            count++;
        }
        console.log(current);
        return current;
    }
    set(ind, val){
        let foundNode = this.get(ind);
        if(foundNode){
            foundNode.val = val;
            return true;
        }
        return false;
    }
    insert(ind, val){
        if(ind < 0 || ind > this.length) return undefined;
        if(ind === 0) return this.unshift(val);
        if(ind === this.length) return this.push(val);
        
        let newNode = new Node(val)
        let prev = this.get(ind - 1);
        let after = prev.next;
        prev.next = newNode;
        newNode.next = after;

        this.length++;
    }
    remove(index){
        if(index < 0 || index >= this.length) return undefined;
        if(index === 0) return this.unshift();
        if(index === this.length - 1) return this.pop();

        let chopped = this.get(index);
        let before = this.get(index - 1);
        let after = chopped.next;

        before.next = after;
        chopped.next = null;
        this.length--;
    }
    reverse(){
        let node = this.head;
        this.head = this.tail;
        this.tail = node;
        let next;
        let prev = null;
        for(let i = 0; i < this.length; i++){
            next = node.next;
            node.next = prev;
            prev = node;
            node = next;
             }
          return this;
        }

}

// {'first' --> 'second' --> 'third'};


const newList = new SinglyLinkedList();
newList.push('firstone');
newList.push('secondone');
newList.push('thirdone');
newList.push('fourthone');

newList.reverse()


console.log(newList)
