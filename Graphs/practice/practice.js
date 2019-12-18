//implement Graph

class Graph {
    constructor() {
        this.list = {}
    };
    addVertex(vertex) {
        this.list[vertex] = []
    };
    addEdge(v1, v2) {
        this.list[v1].push(v2);
        this.list[v2].push(v1);
    };
    removeVertex(vertex) {
        while(this.list[vertex].length) {
            let adjacentNode = this.list[vertex].pop();
            this.removeEdge(vertex, adjacentNode)
        }
        delete this.list[vertex];
    }
    removeEdge(v1, v2) {
        this.list[v1] = this.list[v1].filter(current => {
            return current !== v2
        })
        this.list[v2] = this.list[v2].filter(current => {
            return current !== v1
        })
    }
}
var g = new Graph();
g.addVertex("tokyo");
g.addVertex("san fran");
g.addVertex('seoul');
g.addVertex('austin');
g.addVertex('dallas');

//Test add edge
g.addEdge('tokyo', 'seoul');
g.addEdge('tokyo', 'san fran');
g.addEdge('austin', 'dallas');
g.addEdge('austin', 'san fran');
g.addEdge('austin', 'seoul');
g.addEdge('dallas', 'tokyo')
console.log(g);

g.removeEdge('austin', 'dallas')
debugger;