function DuplicateVal(arr){
    let x=[];
    let y=[];
    for(let i=0;i<arr.length;i++){
        if(!x){
            x.push(arr[i]);
        }
        if(!x.includes(arr[i])){
            x.push(arr[i]);
        }else if(x.includes(arr[i])){
            if(!y.includes(arr[i])){
                y.push(arr[i]);
            }    
        }
    }
    return y;
}


let arrNum=[1, 2, 2, 2, 3, 3, 4, 5, 5]
console.log(DuplicateVal(arrNum));