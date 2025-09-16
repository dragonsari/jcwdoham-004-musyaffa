//combine words inside of the array, separate by (,) coma and last word by "and"
let arrWords;
arrWords=["apple", "banana", "cherry", "date"];

function CombineWord(arrSen){
    let sentence="";
    for(let i=0;i<arrSen.length;i++){
        if(i==arrSen.length-1){
            sentence+= 'and '+arrSen[i];
        }else sentence+=arrSen[i]+', ';
    }
    console.log(sentence);
}

CombineWord(arrWords);