const date = [
    {name : "gomnam" , id:1},
    {name : "amar" , id:2},
]

// find  {name : "gomnam" , id:1} 
// use indexOf
console.log(date.indexOf({name : "gomnam" , id:1}));
//-1
// why?
// they have not same reference so there is not {name : "gomnam" , id:1} in date array

// use id
//excersize in MDN
// The find() method returns the value of the first element in the provided array that satisfies the provided testing function. If no values satisfy the testing function, undefined is returned.
const array1 = [5, 12, 8, 130, 44];

const found = array1.find(element => element > 10);

console.log(found);
// expected output: 12

// excersize2
const num = [10, 20, 30, 40, 50, 60]
const selectedtem = num.find( function (item){
    console.log(item);
    return item > 40;
});
console.log(selectedtem);
// 10
// 20
// 30
// 40
// 50
//50



//use learning about date array

const findItem = date.find (function (el){
    // return el.id===1;
    return el.id===2;
});
console.log(findItem);
//{name: 'gomnam', id: 1}
// {name: 'amar', id: 2}