//remove all odd number in array
function EvenOnlyArray(arrOfNumber){
        let evenArr=[];
        for(let i=0; i<arrOfNumber.length;i++){
        let odd=initArr[i]%2;
        if(odd==0){
            evenArr.push(initArr[i]);
            //console.log(initArr[i]);
        }
    }
    console.log(evenArr);
}

let initArr=[1,2,3,4,5,6,7,8,9,10]
let evenArray=EvenOnlyArray(initArr);