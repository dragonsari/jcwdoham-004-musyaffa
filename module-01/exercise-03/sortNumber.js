//sort number with conditional statement
let num1=42;
let num2=27;
let num3=18;

if(num1<num2 && num1<num3){
    if(num2<num3){
        console.log(`${num1},${num2},${num3}`);
    }else{ //num3<num2
        console.log(`${num1},${num3},${num2}`);
    }
}else if(num2<num1 && num2<num3){
    if(num1<num3){
        console.log(`${num2},${num1},${num3}`);
    }else{ //num3<num1
        console.log(`${num2},${num3},${num1}`);
    }
}else if(num3<num1 && num3<num2){
    if(num1<num2){
        console.log(`${num3},${num1},${num2}`);
    }else{ //num2<num1
        console.log(`${num3},${num2},${num1}`);
    }
}