// Graph Class
// we are building an undirected graph first

class Graph {
    constructor() {
        this.adjacencyList = {};
    }
    addVertex(vertex) {
         this.adjacencyList[vertex] = [];
    }
    addEdge(v1, v2) {
        this.adjacencyList[v1].push(v2);
        this.adjacencyList[v2].push(v1);
    }
    removeEdge(vertex1, vertex2) {
        this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(
            v => v !== vertex2
        );
        this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(
            v => v !== vertex1
        );
    }
    removeVertex(vertex) {
        while(this.adjacencyList[vertex].length) {
            const adjacentVertex = this.adjacencyList[vertex].pop();
            this.removeEdge(vertex, adjacentVertex)
        }
        delete this.adjacencyList[vertex];
    }
}

//TEST adding vertex
var g = new Graph();
g.addVertex("tokyo");
g.addVertex("san fran");
g.addVertex('seoul');
g.addVertex('austin');
g.addVertex('dallas');
console.log(g)

//Test add edge
g.addEdge('tokyo', 'seoul');
g.addEdge('tokyo', 'san fran');
g.addEdge('austin', 'dallas');
g.addEdge('austin', 'san fran');
g.addEdge('austin', 'seoul');
g.addEdge('dallas', 'tokyo')
console.log(g);

//Test remove edge
// g.removeEdge('tokyo', 'seoul')

//test remove vertex
// g.removeVertex('dallas')