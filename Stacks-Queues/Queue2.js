
class Node {
    constructor(val){
        this.value = val;
        this.next = null;
    }
}

class Queue {
    constructor(){
        this.first = null;
        this.last = null;
        this.size = 0;
    }
    enqueue(val){
        const newNode = new Node(val);
        if(!this.first){
            this.first = newNode;
            this.last = newNode;
        } else {
            this.last.next = newNode;
            this.last = newNode;
        }
        this.size++;
    }
    dequeue(){
        if(!this.first) return undefined;
        const chopped = this.first;
        this.first = this.first.next;
        chopped.next = null;
        this.size--;
        if(this.size === 0){
            this.first = null;
            this.last = null;
        }
    }
}

const que = new Queue();

que.enqueue('first')
que.enqueue('second')
que.enqueue('third')

que.dequeue();
que.dequeue();


console.log(que)