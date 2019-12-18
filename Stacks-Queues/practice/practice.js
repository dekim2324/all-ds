//stacks using linked-list

class Node {
    constructor(val){
        this.value = val;
        this.next = null;
    }
}

class Stacks {
    constructor(){
        this.first = null;
        this.last = null;
        this.size = 0;
    }
    add(val){
        const newNode = new Node(val);
        if(!this.first){
            this.first = newNode;
            this.last = newNode;
        } else {
            newNode.next = this.first;
            this.first = newNode;
        }
        this.size++;
    }
    remove(){
        if(!this.first) return undefined;
        const popped = this.first;
        this.first = this.first.next;
        popped.next = null;
        this.size--;
        if(this.size === 0){
            this.first = null;
            this.last = null;
        }
    }
}

const test = new Stacks();

test.add(1)
test.add(2)
test.add(3)


console.log(test)