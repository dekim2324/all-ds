class MaxBinaryHeap {
    constructor(){
        this.values = [];
    }
    insert(value){
        this.values.push(value);
        this.bubbleUp()
    }
    bubbleUp(){
        let currentInd = this.values.length - 1;
        while(true){
            let parentInd = Math.floor(((currentInd - 1)/2));
            
            if(this.values[currentInd] > this.values[parentInd]){
                let newValue = this.values[currentInd];
                this.values[currentInd] = this.values[parentInd];
                this.values[parentInd] = newValue;
                currentInd = parentInd;
            }else break;
        }
        return this.values;
    }
    remove(){
        this.values = this.values.slice(1);
        let popped = this.values.pop();
        this.values.unshift(popped);
        this.bubbleDown()
    }
    bubbleDown(){
        let currentInd = 0;
       
        while(true){
            let leftChildInd = (currentInd*2)+1;
            let rightChildInd = (currentInd*2)+2;
            if(this.values[currentInd] < this.values[leftChildInd] && this.values[leftChildInd] > 
                this.values[rightChildInd]){
                    let currentVal = this.values[currentInd];
                    this.values[currentInd] = this.values[leftChildInd]
                    this.values[leftChildInd] = currentVal;
                    currentInd = leftChildInd;
                }  else if(this.values[currentInd] < this.values[rightChildInd] && this.values[rightChildInd] > 
                    this.values[leftChildInd]){
                        let currentVal = this.values[currentInd];
                        this.values[currentInd] = this.values[rightChildInd]
                        this.values[rightChildInd] = currentVal;
                        currentInd = rightChildInd;
                    } else break;
        }
    }
}



const heap = new MaxBinaryHeap();

heap.insert(41)
heap.insert(39)
heap.insert(33)
heap.insert(18)
heap.insert(27)
heap.insert(12)
//[41,39,33,18,27,12]

heap.remove()
//[39,27,33,18,12]

console.log(heap.values);


