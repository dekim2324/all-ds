// Stacks using ARRAYS
//Remember stacks are just concepts, so we could do it like this!
var stack = [];

stack.push('google');
stack.push('insta')
stack.push('youtube');

//to remove, just remove the last one to be added!
stack.pop();

//-----------------------------------------------------------
//You can do it different directionally
var ans = [];

ans.unshift('one');
ans.unshift('two');
ans.unshift('three');

//same here, remove the last one added!
ans.shift();


//shift and unshift may not be best options for sake of big(O) notation.
//you have to reindex the whole array!

//if using array, better option is to use push & pop