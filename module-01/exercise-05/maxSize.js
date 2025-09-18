function MaxSizeArr(...nums){
    let x=[];
    for(const num of nums){
        if(x.length<5){
            x.push(num);
        }
        
    }
    return x;
}

console.log(MaxSizeArr(5, 10, 24, 3, 6, 7, 8));