//return a sum of the number on the mixed array
let mixArr=["3", 1, "string", null, false, undefined, 2];

function SumOfNum(mixedArray){
    let total=0;
    for(let i=0; i<mixedArray.length;i++){
        if(typeof mixedArray[i] === 'number'){
            total+=mixedArray[i];
        }
    }
    console.log(total);
}

SumOfNum(mixArr);