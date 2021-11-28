// Write a function which returns array of seven random numbers in a range of 0-9. All the numbers must be unique
// ```js
// sevenRandomNumbers()
// [1,4,5,7,9,8,0]

function sevenRandomNumbers(){
    var arr = [];
    while(arr.length < 7) {
        var r = Math.floor(Math.random() * 9);
        if(arr.indexOf(r) === -1) arr.push(r);
    }
    return arr;
}

console.log(sevenRandomNumbers());
