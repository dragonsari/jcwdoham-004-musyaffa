function SumOfDupVal(arr){
    let x=[];
    let y=[];
    let z=0;
    for(let i=0;i<arr.length;i++){
        if(!x){
            x.push(arr[i]);
        }
        if(!x.includes(arr[i])){
            x.push(arr[i]);
        }else if(x.includes(arr[i])){
            y.push(arr[i]);
        }
    }
    for(let i=0;i<y.length;i++){
        z+=y[i];
    }
    return z;
}


let numbers=[10, 20, 40, 10, 50, 30, 10, 60, 10];
console.log(SumOfDupVal(numbers));