
const gameBoard = (function() {
    const gameArray = [1,2,3,4,5,4,7,8,9]

    function pick(index, mark) {
        gameArray.splice(index, 1, mark)
    }

    const board = () => gameArray;
    return {pick, board}
})();


function game() {  


    function lines (mark) {
        const markIndex =[];
        let xLocation = gameBoard.board().indexOf(mark)
        while (xLocation !== -1) {
            markIndex.push(xLocation);
            xLocation = gameBoard.board().indexOf(mark, xLocation + 1)
        }
        return markIndex.toString()
    }



    function players () {
        playerArray = [
            {
                id: 0,
                name: "Player One",
                mark: "x"
            },
            {
                id: 1,
                name: "Computer",
                mark: "o"
            }
        ]
        return playerArray
    }


    let currentPlayer = 1;

    function activePlayer () {
        if(currentPlayer === 0){
            return currentPlayer = 1;
        } else {
            return currentPlayer =0;
        }
    }


    pick(players()[activePlayer()])
    function pick(player) {    
        let currentPlayer = player;
        let message = "";
        console.log(lines('x'))
        console.log(lines('o'))

        if(lines("x") === "0,1,2" || lines("x") === "3,4,5" || lines("x") === "6,7,8" || lines("x") === "0,4,8" || lines("x") === "2,4,6"){
            message = "You Win!"
        } else if(lines("o") === "0,1,2" || lines("o") === "3,4,5" || lines("o") === "6,7,8" || lines("o") === "0,4,8" || lines("o") === "2,4,6")  {
            message = "Computer Wins!"
        } else if (gameBoard.board().every(isNaN)){
            message = "It's a tie!"
        } else {
            if(currentPlayer.id === 0) {
                let userPick = NaN
                while(isNaN(gameBoard.board()[userPick])){
                    userPick = prompt('Pick your spot')
                    console.log(`User picks: ${userPick}`)

                }
                    gameBoard.pick(userPick, "x")
                    console.log(gameBoard.board())
                    pick(players()[activePlayer()])

                
            } else if(currentPlayer.id === 1){
                let computerPick = NaN
                while(isNaN(gameBoard.board()[computerPick])){
                    computerPick = Math.floor(Math.random()*9)
                    console.log(`Computer picks: ${computerPick}`)
                }
                gameBoard.pick(computerPick, "o")
                console.log(gameBoard.board())
                pick(players()[activePlayer()])

            }   
        }

        
    
        

        console.log(message)
    }




}

new game()
