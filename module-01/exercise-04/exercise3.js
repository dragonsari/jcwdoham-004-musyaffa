function BodyMassIndex(weight, height){
    let heightM=height/100;
    let bmi = weight/(heightM*heightM);
    if(bmi<18.5){
        return console.log("Less Weight");
    }else if(bmi>=18.5 && bmi <=24.9){
        return console.log("Ideal");
    }else if(bmi>=25 && bmi <=29.9){
        return console.log("Overweight");
    }else if(bmi>=30 && bmi <=39.9){
        return console.log("Very Overweight");
    }else if(bmi>39.9){
        return console.log("Obesity");
    }
}

let bodymass=BodyMassIndex(60,165);