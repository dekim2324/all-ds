class MaxBinaryHeap {
    constructor(){
        this.values = [];
    }
    insert(element){
        this.values.push(element);
        this.bubbleUp();
    }
    bubbleUp(){
        let currentInd = this.values.length - 1;
        while(true){
            let parentInd = Math.floor((currentInd - 1)/2);
            let currentVal = this.values[currentInd];
            if(this.values[currentInd] > this.values[parentInd]){
                this.values[currentInd] = this.values[parentInd];
                this.values[parentInd] = currentVal;
                currentInd = this.values.indexOf(currentVal);
            } else {
                break;
            }
        }
    }
        removeMax(){
            this.values = this.values.slice(1);
            let popped = this.values.pop();
            this.values.unshift(popped)
            this.bubbleDown();
        }
        bubbleDown(){
            let currentInd = 0;
            while(true){
                let leftChildInd = (currentInd*2)+1;
                let rightChildInd = leftChildInd + 1;
                let currentVal = this.values[currentInd];
                if(this.values[currentInd] < this.values[leftChildInd] 
                    && this.values[leftChildInd] > this.values[rightChildInd]){
                        this.values[currentInd] = this.values[leftChildInd];
                        this.values[leftChildInd] = currentVal;
                        currentInd = leftChildInd;
                    } else if(this.values[currentInd] < this.values[rightChildInd] 
                        && this.values[rightChildInd] > this.values[leftChildInd]){
                            this.values[currentInd] = this.values[rightChildInd];
                            this.values[rightChildInd] = currentVal;
                            currentInd = rightChildInd;
                    }else {
                        break;
                    }
            }
        }
    
}

const mbh = new MaxBinaryHeap();

// //below for insert test
// mbh.insert(41)
// mbh.insert(39)
// mbh.insert(33)
// mbh.insert(18)
// mbh.insert(27)
// mbh.insert(12)
// mbh.insert(55)
// //[55,39,41,18,27,12,33];
// mbh.insert(1)
// //[55,39,41,18,27,12,33,1];
// mbh.insert(45)
// //[55,45,41,39,27,12,33,1,18];

//below for remove test
mbh.insert(41)
mbh.insert(39)
mbh.insert(33)
mbh.insert(18)
mbh.insert(27)
mbh.insert(12)

mbh.removeMax()
//[39,27,33,18,12]

console.log(mbh.values)