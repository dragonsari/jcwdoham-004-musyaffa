//calculate 2 array of number with same length
let arrNum1=[1,2,3];
let arrNum2=[4,5,6];


function CalculateArr(arr1,arr2){
    let arr3;
    arr3=[];
    for(let i=0;i<arr1.length;i++){
        let num=arr1[i]+arr2[i];
        arr3.push(num);
    }
    console.log(arr3);
}

CalculateArr(arrNum1,arrNum2);