let n;
n=15; //n15 is 610
//Fn=Fn-1+Fn-2, n>1
let f1;
let f2;
let f3;
let i=0
f1=0;
f2=1;
if(n==0||n==1){
    if(n==0){
        console.log("fibonanci N number of 0 is 0");
    }else console.log("fibonanci N number of 1 is 1");
}else{
    i=2;
    while(i<=n){
        f3=(f2)+(f1);     
        console.log("Fibonanci number "+i+" result "+f3);
        f1=f2;
        f2=f3;
        i++;
    }
}