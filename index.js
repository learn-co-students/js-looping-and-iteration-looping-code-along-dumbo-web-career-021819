// Code your solutions in this file
function printBadges(names){
    for(i = 0; i < names.length; i++){
        console.log(`Welcome ${names[i]}! You are employee #${i + 1}.`)
    }
    return names
}



function tailsNeverFails() {
    coinFlip = Math.random() >= .5;

    counter = 0
    while (coinFlip){
        counter++
    }
    return `You got ${counter} tails in a row`
}