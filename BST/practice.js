//build a binary search tree:

class Node{
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BST {
    constructor(){
        this.root = null;
    }
    insert(value){
        let current = this.root;
        let newNode = new Node(value);
        if(!this.root) return this.root = newNode;
        if(value === current.value) return undefined;

        while(true){
            if(value < current.value){
                if(current.left === null) return current.left = newNode;
                current = current.left;
            }else if(value > current.value){
                if(current.right === null) return current.right = newNode;
                current = current.right;
            }
        }
    }
}

const first = new BST();
first.insert(10);
first.insert(8);
first.insert(12);


console.log(first)
console.log('hello')
