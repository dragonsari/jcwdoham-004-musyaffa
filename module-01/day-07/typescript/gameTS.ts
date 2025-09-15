//game 
class Car{
    name:string;
    speed:number;
    fuel:number;
    distance:number;
    constructor(nameCar:string, speedCar:number, fuelCar:number, distanceCar:number){
        this.name=nameCar;
        this.speed=speedCar;
        this.fuel=fuelCar
        this.distance=distanceCar;
    }
}

let car1=new Car("car1",100,100,0);
let car2=new Car("car2",100,100,0);


class CarRacing{
    
}

function Move(car:Car){
    if(car.fuel!=0){
        let item:number;
        item=GetRandomItem();
        UseItem(item,car);
        car.distance += car.speed;
        car.fuel -= 10;
        ShowStatus(car);
        Move(car);
    }
}

function UseItem(item:number,car:Car){
    if(item=1){
        car.speed+=20;
    }else if(item=2){
        car.speed-=20;
    }else if(item=3){
        car.speed+=0;
    }
}

function ShowStatus(car:Car){
    console.log(`${car.name} (Speed => ${car.speed}, fuel => ${car.fuel}, distance => ${car.distance})`);
}



//Game Method
function GetRandomItem(){
    let item:number;
    item=Math.floor(Math.random()*3)+1;
    return item;
}

function Start(){
    ShowStatus(car1);
    ShowStatus(car2);
    Move(car1);
    Move(car2);
    if(car1.fuel<=0&& car2.fuel<=0){
        if(car1.distance>car2.distance){
            console.log("car1 win");
        }else{
            console.log("car2 win")
        }
    }
}
Start();