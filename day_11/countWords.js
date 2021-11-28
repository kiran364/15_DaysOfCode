// 1.a. Write a function which count the number of occurrence of words in a paragraph or a sentence.The function `countWords` takes a paragraph and two words as parameters. It compare  which word is most frequently occurred in the paragraph.
// ```js
// const paragraph = 'I love teaching. If you do not love teaching what else can you love. I love JavaScript if you do not love something which can give life to your application what else can you love.';
// console.log(countWords(paragraph,'love', 'you'));
// The word love more frequently occurred than you.

function countWords(paragraph, love, you) {
	// split the string by spaces in a
	let a = paragraph.split(" ");

	// search for pattern in a
	let count = 0;
    let count1 = 0;
	for (let i = 0; i < a.length; i++) {
	    // if match found increase count
	    if (a[i].includes(love))
		    count++;

        if (a[i].includes(you))
          count1++;

	}

    if(count < count1)
	return `the word You is occurred more than Love with count ${count1}`;

    return `the word Love is occurred more than You with count ${count}`;
}
	
// Driver code
let para = "I love teaching. If you do not love teaching what else can you love. I love JavaScript if you do not love something which can give life to your application what else can you love.";
word1 = 'love';
word2 = 'you';
const result = countWords(para, word1, word2);
console.log(result)
