class number{
    num;
    constructor(_num){
        this.num=_num;
    }

}

function GetFactorial(num) {
        let sum=num;
        if(num===0||num===1){
           return 1;
        }else{
            while(num>1){
                sum=sum*(num-1);
                num--;
            }return sum;
        }
}

console.log(GetFactorial(5));