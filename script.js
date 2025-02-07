const gameBoard = (function() {
    const gameArray = [1,2,3,4,5,6,7,8,9]

    
    function pick(index, mark) {
        gameArray.splice(index, 1, mark)
        console.log(gameArray)
    }
    const board = () => gameArray;
    return {pick, board}
})();

function player(name) {
    const userName = name;
    const userMark = "X";
    console.log(`Username: ${userName}, Mark: ${userMark}`)
    return {userName, userMark}
}

function game() {
    // let pick = prompt("pick your spot:");
    // gameBoard.pick(pick, "x")

    const comPick = () => {
        let pick = Math.floor(Math.random()*9)


        if(typeof gameBoard.board()[pick] === 'number'){
            gameBoard.pick(pick, "O")
            console.log(gameBoard.board())
            comPick()
        } else {
            console.log('Seats taken')
            
        }
    }

    comPick()
}

game()
