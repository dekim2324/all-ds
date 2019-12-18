// hash('pink', 50)
//the second value is the length of the array
//number between 0 - 49
//we expect to spit out an index.

// Simple Hash Example:

function hash(key, arrayLen){
    let total = 0;
    for(let char of key){
        //map "a" to 1, "b" to 2, "c" to 3, etc
        //-96 to give a alphabetical number 1- 24
        let value = char.charCodeAt(0) - 96
        total += value;
    }
    total = total % arrayLen
    console.log(total)
}

// hash('pink', 9)

// problem with above hash:
// 1. only hashes strings..
// 2. Not constant time! bc we loop.. 
// 3. Could be a little more random (involves using PRIME NUMBERS)

//Refining our Hash

function newHash(key, arrayLen){
    let total = 0;
    let WEIRD_PRIME = 31;
    for(let i = 0; i < Math.min(key.length, 100); i++){
        let char = key[i];
        let value = char.charCodeAt(0) - 96
        total = (total * WEIRD_PRIME + value) % arrayLen
    }
    console.log(total);
}

// newHash('hello', 13)
// newHash('hi', 13)
//ideally we want to use PRIME LENGTH
//again prime numbers should spread the 'cubby' spaces in the array
// the whole point of this is to speed up the process
        //first thing is we set minimum times to iterate..
        //data could collide though. You should consider at least
        //we want arraylength to be prime as well (makes it more scattered)


class HashTable {
  constructor(size=53){
      //how large hash table should be (default prime value of 53)
    this.keyMap = new Array(size);
  }

  _hash(key) {
    let total = 0;
    let WEIRD_PRIME = 31;
    for (let i = 0; i < Math.min(key.length, 100); i++) {
      let char = key[i];
      let value = char.charCodeAt(0) - 96
      total = (total * WEIRD_PRIME + value) % this.keyMap.length;
    }
    return total;
  }
  set(key,value){
    let index = this._hash(key);
    console.log(index)
    // remember we are doing separate chaining (nested array)
    //must check if there is anything in the 'cubby'
    if(!this.keyMap[index]){
      this.keyMap[index] = [];
      // store in a nest array already
      //so next time around we can just push it in (easy to add in)
    }
    this.keyMap[index].push([key, value]);
  }
  get(key){
    let index = this._hash(key);
    if(this.keyMap[index]){
      for(let i = 0; i < this.keyMap[index].length; i++){
        if(this.keyMap[index][i][0] === key) {
          return this.keyMap[index][i][1]
        }
      }
    }
    return undefined;
  }
  keys(){
    let keysArr = [];
    for(let i = 0; i < this.keyMap.length; i++){
      if(this.keyMap[i]){
        for(let j = 0; j < this.keyMap[i].length; j++){
          if(!keysArr.includes(this.keyMap[i][j][0])){
            keysArr.push(this.keyMap[i][j][0])
          }
        }
      }
    }
    return keysArr;
  }
  values(){
    let valuesArr = [];
    for(let i = 0; i < this.keyMap.length; i++){
      if(this.keyMap[i]){
        for(let j = 0; j < this.keyMap[i].length; j++){
          if(!valuesArr.includes(this.keyMap[i][j][1])){
            valuesArr.push(this.keyMap[i][j][1])
          }
        }
      }
    }
    return valuesArr;
  }

}

let ht = new HashTable(17);
ht.set("maroon","#800000")

console.log(ht)
// ht.set("yellow","#FFFF00")
// ht.set("olive","#808000")
// ht.set("salmon","#FA8072")
// ht.set("lightcoral","#F08080")
// ht.set("mediumvioletred","#C71585")
// ht.set("plum","#DDA0DD")