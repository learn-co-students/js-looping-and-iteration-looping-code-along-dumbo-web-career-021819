function printBadges(badgesArray) {
    for (let i = 0; i < badgesArray.length; i++) {
        console.log(`Welcome ${badgesArray[i]}! You are employee #${i+1}.`)
    }
    return badgesArray
}

let numberOfTails = 0
function tailsNeverFails() {
    while (Math.random() > 0.5) {
        numberOfTails += 1
        tailsNeverFails()
    }
    return `You got ${numberOfTails + 1} tails in a row!`
}