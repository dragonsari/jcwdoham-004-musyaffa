//change first letter of the word to uppercase
let sentence="pagi dunia";
if(sentence.length!=0){
    sentence.split(" ").map(spWord=>{
        if(spWord.length !=0){
            spWord.charAt(0).toUpperCase()+spWord.slice(1);
        }
    })
    .join(" ");
}
console.log(sentence);
