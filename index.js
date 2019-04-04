// Code your solutions in this file
function printBadges(array) {
  for (let i = 0; i < array.length; i++) {
    console.log(`Welcome ${array[i]}! You are employee #${i + 1}.`)
  }
  return array;
}

let counter = 0
function tailsNeverFails(){
  while (Math.random() > 0.5) {
    counter++;
    tailsNeverFails();
  }
  return `You got ${counter + 1} tails in a row!`
}
