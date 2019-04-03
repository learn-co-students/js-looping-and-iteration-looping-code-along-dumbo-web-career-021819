// Code your solutions in this file
const printBadges = (array) => {
  counter = 0;
  for (const element of array) {
    counter ++;
    console.log(`Welcome ${element}! You are employee #${counter}.`);
  }

  return array;
}

function tailsNeverFails () {
  let tails = 0;

  while (Math.random() >= 0.5) {
    tails++;
  }

  return `You got ${tails} tails in a row!`;
}
