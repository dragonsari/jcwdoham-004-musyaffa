//A palindrome is a word, phrase, number, or other sequence of characters that reads the same forwards and backwards. The characters are mirrored around the center.
let sentence="madam";
let sentenceLowerCase=sentence.toLowerCase();
for(let i=0;i<sentence.length/2;i++){
    let leftWord=sentenceLowerCase[i];
    let righWord=sentenceLowerCase[sentence.length-1-i];
    if(leftWord!==righWord){
        console.log("Not Palindrome");
        break;
    }
    console.log("palindrome");
}