//replace multiplication of 3 with fizz, 5 with buzz, 3 x 5 fizzbuzz

function FizzBuzz(n){
    let sentence="";
    for(let i=1;i<=n;i++){
        if(i%3==0){
            sentence+="Fizz"+" ";
        }else if(i%5==0){
            sentence+="Buzz"+" ";
        }else if(i==15){
            sentence+="FizzBuzz"+" ";
        }else{
            sentence+=i +" ";
        }
    }
    console.log(sentence);
}

FizzBuzz(15);