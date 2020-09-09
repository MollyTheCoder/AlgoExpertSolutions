//Given a sorted array, find the smallest positive integer that is not the sum of a subset of the array.
//For example, for the input [1, 2, 3, 10], you should return 7
let arrayFoo = [1, 2, 3, 10, 6, 12, 8, 21];

let allSums = arrayFoo.sort((a,b)=>a-b).reduce((r,o) => {  
    for(var i = 1; i < arrayFoo.length; i++) {
        r = [...r, o + arrayFoo[i]]
    }
    return [...r, o];
}, [])
//remove duplicate
allSums = allSums.sort((a,b)=>a-b).reduce((r,o) => {
    if(r.indexOf(o) < 0) r = [...r, o];
    
    return r;
}, [])
//get smallest sum
let smallestNumber = allSums.reduce((r,o) => {
    if(r !== o) r++;    
    return r;
}, 1)
console.log(smallestNumber)