// Code your solutions in this file

const printBadges = ( (array) => {
  for (i = 0; i < array.length; i++) {
    console.log(`Welcome ${array[i]}! You are employee #${i+1}.`);
  };
  return array;
});


function tailsNeverFails() {
  let random_num = 1.1;
  let count = 0;
  while (random_num > 0.4) {
    random_num = Math.floor(Math.random() * 10) / 10;
    count += 1;
  };
  return `You got ${count-1} tails in a row!`;
};
