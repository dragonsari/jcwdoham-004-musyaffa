//return 2nd smallest number on the array
let num=[1,2,3,4,5,6];

function SecSmallest(nums){
    if (nums.length < 2) {
        console.log("None");
    }
    const x = [...nums].sort((a, b) => a - b);
    return x[1];
}
console.log(SecSmallest(num));