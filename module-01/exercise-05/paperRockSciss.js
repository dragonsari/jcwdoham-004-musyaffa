function GameOn(masukan){
    let sentence=masukan.toLowerCase();
    let noMasukan;
    if(sentence==="kertas"){
        noMasukan=2;
    }else if(sentence==="batu"){
        noMasukan=0;
    }else if(sentence==="gunting") noMasukan=1;
    let numCom=Math.floor(Math.random() * (3 - 1 + 1));
    
    if(numCom==0){//batu
        if(noMasukan==1){
            console.log('Computer Win');
        }else if(noMasukan==2){
            console.log('User Win');
        }else if(noMasukan==0){
            console.log('Draw');
        }
    }else if(numCom==1){//gunting
        if(noMasukan==1){
            console.log('Draw');
        }else if(noMasukan==2){
            console.log('Computer Win');
        }else if(noMasukan==0){
            console.log('User Win');
        }
    }else if(numCom==2){ //kertas
        if(noMasukan==1){
            console.log('User Win');
        }else if(noMasukan==2){
            console.log('Draw');
        }else if(noMasukan==0){
            console.log('Computer Win');
        }
    }
}
let s="kertas";
GameOn(s);