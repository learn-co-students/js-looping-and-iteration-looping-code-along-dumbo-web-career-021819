// Code your solutions in this file

function printBadges(array){
  for(let i = 0; i < array.length; i++){
    console.log(`Welcome ${array[i]}! You are employee #${i + 1}.`);
  }

  return array;
}

function tailsNeverFails(){
  coinChance = Math.random();
  let tailCount = 0;
  // let headCount = 0;


  while (coinChance){
    if (coinChance >= 0.5){
      //tails
      tailCount += 1;
    }
  }
  return `You got ${tailCount} tails in a row!`;
}
