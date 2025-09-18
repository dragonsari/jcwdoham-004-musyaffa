function AddElement(arr,element){
    if(!arr){
        return [element];
    }else if(!arr.includes(element)){
        arr.push(element);
    }
    return arr;
    
}

let nums=[1,2,3,4]
console.log(AddElement(nums,4));
console.log(AddElement(nums,7));