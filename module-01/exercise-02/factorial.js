let n;
let sum;

n=6;
const x=n;

sum=n;
while(n>1){
    sum=sum*(n-1);
    console.log(sum);
    n--;
}
console.log("the result of "+x+"! is "+sum);