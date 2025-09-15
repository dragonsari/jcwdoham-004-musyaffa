//convert to price 
let num;
num=1000;
let price='Rp ' + num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
console.log(price)