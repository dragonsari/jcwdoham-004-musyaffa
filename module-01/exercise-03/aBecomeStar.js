//change "a" letter to * (star)
let sentence="An apple a day keeps the doctor away";
let newSentence="";
for(let i=0;i<sentence.length;i++){
    if(sentence[i] >= 'A' && sentence[i] <='a'){
        newSentence += "*";
    }else{
        newSentence+=sentence[i];
    }
}
console.log(newSentence)