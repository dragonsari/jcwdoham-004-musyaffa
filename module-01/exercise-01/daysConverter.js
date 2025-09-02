let days;
days = 400;

//year divided by 365 tofixed to get only number, not the decimal (it will become 0 if only get 0.somthing)
const year=(days/365).toFixed();

//month divided by the rest of the day that already calculated on Year (it will become 0 if only get 0.somthing)
//const month=((days-(year*365))/30).toFixed();
const month=((days%365)/30).toFixed();

//days got by calculation input minus how many year multiple by 365 and month multiple by 30
const day=days-(month*30+year*365);

console.log(year+ " Year, "+month+" Month, "+ day+ " days");