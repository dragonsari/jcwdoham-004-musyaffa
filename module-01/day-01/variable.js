const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
rl.question("What is your name? ", (answer) => {
  console.log(answer);
  rl.close();
});

// let message = "welcome, budi";
// console.log(message);

// let panjang;
// let lebar;

// const rumusMencariLuasPersegiPanjang = panjang*lebar;
// console.log(rumusMencariLuasPersegiPanjang);
