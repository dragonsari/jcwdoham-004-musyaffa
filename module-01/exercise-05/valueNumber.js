//get Lowest, Highest and Average Value in the array (wiht n without sort function)
let arrNum;
arrNum=[12,5,23,18,4,45,32];

function HighestNum(nums){
    const x = [...nums].sort((a, b) => a - b);
    return x[x.length-1];
}
function LowestNum(nums){
    const x = [...nums].sort((a, b) => a - b);
    return x[0];
}
function AverageNum(nums){
    let x=0;
    for(let i=0;i<nums.length;i++){
        x+=nums[i];
    }
    let y=x/nums.length;
    return y;
}

function HighestNumWOSort(nums){
    let x=nums[0];
    for(let i=0;i<nums.length;i++){
        if(nums[i]>x){
            x=nums[i];
        }
    }
    console.log(x);
}

function LowestNumWOSort(nums){
    let x=nums[0];
    for(let i=0;i<nums.length;i++){
        if(nums[i]<x){
            x=nums[i];
        }
    }
    console.log(x);
}