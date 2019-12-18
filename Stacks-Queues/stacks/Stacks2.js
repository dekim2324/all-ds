//Build a Stack using singly linked-list
//  unlike array, doesn't need to be indexed and no tens of methods that come
//        with something like an array

class Node {
    constructor(val){
        this.value = val;
        this.next = null;
    }

}

//remember if you push & pop, when you remove, you have to traverse
//   the whole data. So better way to do it is to use
//    SHIFT & UNSHIFT - add and remove from the beginning!
class Stack {
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
                let temp = this.first;
                this.first = newNode;
                this.first.next = temp;
            }
            this.size++;
    }
    remove(){
        if(!this.first) return undefined;
        let newFirst = this.first.next;
        this.first.next = null;
        this.first = newFirst;
        this.size--;
        if(this.size === 0){
            this.first = null;
            this.last = null;
        }
    }
}

const stackList = new Stack();

stackList.add('first');
stackList.add('second');
stackList.add('third');

stackList.remove()
stackList.remove()
stackList.remove()

// console.log(stackList)