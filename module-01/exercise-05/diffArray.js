function DiffArray(arr1,arr2){
    let x=[];
    for(let i=0;i<arr1.length;i++){
        if(!arr2.includes(arr1[i])){
            x.push(arr1[i]);
        }
    }
    for(let i=0;i<arr2.length;i++){
        if(!arr1.includes(arr2[i])){
            if(!x.includes(arr2[i])){
                x.push(arr2[i]);
            }
        }
    }
    return x;
}

let arr1=[1, 2, 3, 4, 5];
let arr2 = [3, 4, 5, 6, 7];
console.log(DiffArray(arr1,arr2));