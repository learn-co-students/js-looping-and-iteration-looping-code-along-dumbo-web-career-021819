// Code your solutions in this file

function printBadges(empArray) {
  for (let i=0; i < empArray.length; i++) {
    console.log(`Welcome ${empArray[i]}! You are employee #${i + 1}.`)
  }
  return empArray;
};

function tailsNeverFails() {
  let i=0;

  while (Math.random() >= 0.5) {
    i ++;
  }
  return `You got ${i} tails in a row!`;
}
