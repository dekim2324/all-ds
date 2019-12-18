//create hash table from scratch
// hash tables are key-values pairs stored in an array
    //difference between regular array and has table is that:
    //hash table uses human readable 'keys' by 'hashing'
    //'hashing' gives us a index to store in an array


class HashTable {
    constructor(size = 13){
        //prime number helps to spread the keys more uniformly
        this.hashList = new Array(size)
    }
    hash(key){
        let total = 0;
        let prime = 13;
        for(let i = 0; i < Math.min(key.length, 100); i++){
            let char = key[i];
            let value = char.charCodeAt(0) - 96;
            //charcode returns a unicode of the charactor
            total = (total * prime) + value;
        }
        total = total % this.hashList.length;
        console.log(total);
        return total;
    }
    set(key, value){
        let index = this.hash(key);
        if(!this.hashList[index]){
            this.hashList[index] = [];
        }
        this.hashList[index].push([key, value])
    }
    get(key){
        let index = this.hash(key);
        if(this.hashList[index]){
            for(let i = 0; i < this.hashList[index].length; i++){
                if(this.hashList[index][i][0] === key){
                    console.log(this.hashList[index][i][1]);
                    return this.hashList[index][i][1];
                }
            }
        } 
        return undefined;
    }
    keys(){
        let allKeys = [];

        for(let i = 0; i < this.hashList.length; i++){
            if(this.hashList[i]){
                for(let j = 0; j < this.hashList[i].length; j++){
                    allKeys.push(this.hashList[i][j][0]);
                }
            }
        }
        console.log(allKeys)
        return allKeys;
    }
    values(){
        let allValues = [];

        for(let i = 0; i < this.hashList.length; i++){
            if(this.hashList[i]){
                for(let j = 0; j < this.hashList[i].length; j++){
                    allValues.push(this.hashList[i][j][1]);
                }
            }
        }
        console.log(allValues)
        return allValues;
    }

}


const ht = new HashTable(7);
ht.set('pink', 'girly');
ht.set('grey', 'boring');
ht.set('white', 'pure');
ht.set('black', 'badass')

// ht.get('grey');
// ht.get('white');
// ht.get('pink')

ht.keys()
ht.values()

console.log(ht)