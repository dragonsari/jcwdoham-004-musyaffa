//swap lower to upper and vise versa

let sentence="The QuiCk BrOwN Fox";
let newSentence="";
for(let i=0;i<sentence.length;i++){
    if(sentence[i] >= 'A' && sentence[i] <='Z'){
        newSentence += sentence[i].toLowerCase();
    }else if(sentence[i] >= 'a' && sentence[i] <= 'z'){
        newSentence += sentence[i].toUpperCase();
    }else{
        newSentence+=sentence[i];
    }
}
console.log(newSentence);