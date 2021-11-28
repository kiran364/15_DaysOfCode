// 1.c. After cleaning the text in the sentence from question number b you will get the following text. Count the number of words in this text. Don't include words with only one letter.

// ```js
// const sentence =  `I am a teacher and I love teaching. There is nothing as more rewarding as educating and empowering people. I found teaching more interesting than any other jobs. Does this motivate you to be a teacher?`
// console.log(countWords(sentence));
// 31


const sentence =  `I am a teacher and I love teaching. There is nothing as more rewarding as educating and empowering people. I found teaching more interesting than any other jobs. Does this motivate you to be a teacher?`;


function countWords(str) {
    var count = 0;
    str.split(" ").filter((x) => {
        if(x.length !== 1) {
            count ++;
        }
    });
    return `Total no of words without using single character ${count}`;
}

console.log(countWords(sentence));


