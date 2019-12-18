class Node {
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class Tree {
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
    bfs(){
        let node = this.root,
            queue = [],
            data = [];
        queue.push(node);

        while(queue.length){
            node = queue.shift();
            data.push(node.value);
            if(node.left) queue.push(node.left);
            if(node.right) queue.push(node.right);
        }
        console.log(data)
    }
    dfsPre(){
        let data = [];
        (function traverse(node){
            data.push(node.value);
            if(node.left) traverse(node.left);
            if(node.right) traverse(node.right);
        })(this.root)
        console.log(data)
    }
    dfsPost(){
        let data = [];
        (function traverse(node){
            if(node.left) traverse(node.left);
            if(node.right) traverse(node.right);
            data.push(node.value);
        })(this.root)
        console.log(data)
    }
    dfsInOrder(){
        let data = [];
        (function traverse(node){
            if(node.left) traverse(node.left);
            data.push(node.value);
            if(node.right) traverse(node.right);
        })(this.root);
        console.log(data)
    }
}

let tree = new Tree();

tree.insert(10)
tree.insert(6)
tree.insert(15)
tree.insert(3)
tree.insert(8)
tree.insert(20)

// tree.bfs();
// tree.dfsPre();
tree.dfsPost()

console.log(tree);


//answer for breadth first [10, 6, 15, 3, 8, 20]
// dfs pre order [10, 6, 3, 8, 15, 20]
//dfs post order [3, 8, 6, 20, 15, 10]
//dfs inOrder [3,6,8,10,15,20]