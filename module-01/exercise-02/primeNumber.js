let n;
n=12;
counter=0;
x=1;
while(x<=n){
    if(n%x==0){
        counter++;
        if(counter>2){
            break;
        }
    }
    x++;
}
if(counter==2){
    console.log("prime");
}else console.log("not prime");
