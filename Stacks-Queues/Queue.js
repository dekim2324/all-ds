const q = [];

q.push('first')
q.push('second')
q.push('third')

q.shift()

//--------------

const q2 = [];

q2.unshift('first');
q2.unshift('second');
q2.unshift('third');

q2.pop();



//as you see, whichever direction
        //doing this will be LINEAR TIME both..
//          bc both have to be RE-INDEXED!

//for stacks - push&pop, you dont have to reindex
//for queues - you will have to reindex

