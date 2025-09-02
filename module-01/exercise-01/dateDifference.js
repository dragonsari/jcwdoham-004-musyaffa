let date1;
let date2;

date1 = new Date("2022-01-20");
date2 = new Date("2022-01-22");

const diffInMs = date2-date1; //the result of the calculation is become milisecond, and the time is Number of milliseconds since January 1, 1970 00:00:00.
const msInADay = 1000 * 60 * 60 * 24; //1000 is milisecond in 1 sec, 60 second, 60 minute, 24 hour
const diffindays= Math.round(diffInMs/msInADay);

console.log(diffindays);