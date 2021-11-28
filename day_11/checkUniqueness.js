// Write a function which check if items of an array are unique?
// ```js
// const arrOne = [1, 4, 6, 2, 1];
// console.log(checkUniqueness(arrOne));
// false
// const arrTwo = [1, 4, 6, 2, 3]
// console.log(checkUniqueness(arrTwo));
// true
// ```

function checkUniqueness(arr) {
    
    // Put all array elements in a Set for unique value and initialize it to new set s
    let s = new Set(arr);
    // If all elements are distinct, size of
    // set should be same array.
    return (s.size == arr.length);
}
 
// Driver code
const arrOne = [1, 2, 6, 2, 3];
//if checkUniqueness() return value
if (checkUniqueness(arrOne)) {
    console.log("All Elements are Distinct");
}
else {
    console.log("Not all Elements are Distinct");
}
