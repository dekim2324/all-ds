class Node {
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
        const newNode = new Node(value);
        if(!this.root) return this.root = newNode;

        let current = this.root;
        while(true){
            if(value === current.value) return undefined;
            if(value < current.value){
                if(current.left === null) return current.left = newNode;
                current = current.left;
            } else if(value > current.value){
                if(current.right === null) return current.right = newNode;
                current = current.right;
            }
        }
    }
    find(value){
        if(!this.root) return undefined;
        let current = this.root, found = false;
        while(current && !found){
            if(value < current.value){
                current = current.left
            }else if(value > current.value){
                current = current.right;
            } else {
                found = true;
            }
        }
        if(!found) return undefined;
        console.log(current)
        return current;
    }
}

var tree = new BST();

tree.insert(25);
tree.insert(20);
tree.insert(30);
tree.insert(35)
tree.insert(22);

tree.find(30)

console.log(tree)