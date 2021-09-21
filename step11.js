let player = [
    player1 = { name: "MARK", dice: returnDice() },
    player2 = { name: "JAEHYUN", dice: returnDice() }
]

function returnDice() {
    return dice = Math.floor(Math.random() * 6) + 1;
}

function returnResult() {
    if (player[0].dice > player[1].dice) {
        return `${player[0].name}:${player[0].dice} || ${player[1].name}:${player[1].dice} 
        Results : ${player[0].name} WIN!!!`;
    } else if (player[0].dice === player[1].dice) {
        return `DRAW`;
    } else(player[0].dice < player[1].dice)
    return `${player[0].name}:${player[0].dice} || ${player[1].name}: ${player[1].dice} 
            Results : ${player[1].name} WIN!!!`;


}

console.log(returnResult())