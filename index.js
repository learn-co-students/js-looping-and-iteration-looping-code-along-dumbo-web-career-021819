// Code your solutions in this file
function printBadges(myArray) {
  for (let i = 0; i < myArray.length; i++) {
    console.log(`Welcome ${myArray[i]}! You are employee #${i + 1}.`);
  }
  return myArray;
}

function tailsNeverFails(flipTime) {
  let tailsCounter = 0
  let headsCounter = 0
  let random = Math.random()
  while (random >= 0.5) {
    tailsCounter++
    random = Math.random()
  }
  return `You got ${tailsCounter} tails in a row!`
}
