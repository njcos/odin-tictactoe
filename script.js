const gameBoard = (function() {
    const gameArray = [1,2,3,4,5,4,7,8,9]

    function pick(index, mark) {
        gameArray.splice(index, 1, mark)
    }

    const board = () => gameArray;
    return {pick, board}
})();

function player(name) {
    const userName = name;
    const userMark = "x";
    console.log(`Username: ${userName}, Mark: ${userMark}`)
    return {userName, userMark}
}

function game() {  
    pick()

    function lines (mark) {
        const markIndex =[];
        let xLocation = gameBoard.board().indexOf(mark)
        while (xLocation !== -1) {
            markIndex.push(xLocation);
            xLocation = gameBoard.board().indexOf(mark, xLocation + 1)
        }
        return markIndex.toString()
    }
    
    function pick() {      
        if(lines("x") === "0,1,2" || lines("x") === "3,4,5" || lines("x") === "6,7,8" || lines("x") === "0,4,8" || lines("x") === "2,4,6"){
            console.log('You win!')
        } else if(lines("o") === "0,1,2" || lines("o") === "3,4,5" || lines("o") === "6,7,8" || lines("o") === "0,4,8" || lines("o") === "2,4,6")  {
            console.log('Computer wins!')
        } else if (gameBoard.board().every(isNaN)){
            console.log("it's a tie")
        } else {
            const pick = prompt("pick your spot:");
            gameBoard.pick(pick, "x")
            comPick()
        }

    }

    function comPick(){
        if(lines("x") === "0,1,2" || lines("x") === "3,4,5" || lines("x") === "6,7,8" || lines("x") === "0,4,8" || lines("x") === "2,4,6"){
            console.log('You win!')
        } else if(lines("o") === "0,1,2" || lines("o") === "3,4,5" || lines("o") === "6,7,8" || lines("o") === "0,4,8" || lines("o") === "2,4,6")  {
            console.log('Computer wins!')
        } else if (gameBoard.board().every(isNaN)){
            console.log("it's a tie")
        } else {
            let cPick = Math.floor(Math.random()*9);
            if(typeof gameBoard.board()[cPick] === 'number'){
                gameBoard.pick(cPick, "O")
                console.log(gameBoard.board())
                pick()
            } else {
                comPick()
            }
        }
    }
}

game()
