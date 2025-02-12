
const gameBoard = (function() {
    const newGameArray = [1,2,3,4,5,4,7,8,9]
    let gameArray = [1,2,3,4,5,4,7,8,9]

    function pick(index, mark) {
        gameArray.splice(index, 1, mark)
    }

    const board = () => gameArray;
    const newBoard = () => gameArray = [...newGameArray];
    return {pick, board, newBoard}
})();



const game = (() => {  
    const cell = document.querySelectorAll('.cell')
    const winnerBanner = document.querySelector('.winner')
    const userMessage = document.querySelector('.user')
    const compMessage = document.querySelector('.computer')
    const tieMessage = document.querySelector('.tie')
    let gameOver = false;
    console.log(gameOver)
    if(gameOver === false){
        userPick()
    }
    function userPick() {
        function eventHandler(cell, i) {

                if(isNaN(gameBoard.board()[i])){
                    alert('pick again')
                } else {
                    cell.classList.add("showX")
                    gameBoard.pick(i, 'x')
                    console.log(gameBoard.board())
                    if(winner(lines('x'))){
                        console.log("you Win!!")
                        winnerBanner.style.display = 'flex';
                        userMessage.style.display = 'flex'
                        
                    }else if(winner(lines('o'))){
                        console.log("Computer Wins!")
                        winnerBanner.style.display = 'flex'
                        compMessage.style.display = "flex"
                    }else if (gameBoard.board().every(isNaN)){
                        console.log("Tie")
                        winnerBanner.style.display = 'flex'
                        tieMessage.style.display = 'flex'

                        gameOver = true;
                    } else {    
                    }
                    computerPick() 
                
            }
        }
        if(gameOver === false){
            for(let i = 0; i<cell.length; i++){
                let index = i;
                let selectedCell = cell[i]
                selectedCell.addEventListener('click', () => eventHandler(selectedCell, index))          
            }
        } 
    }

    function computerPick(){
        if(gameOver === false) {

            const pick = Math.floor(Math.random()*9) + 1;
            if(isNaN(gameBoard.board()[pick])){
                computerPick()
            } else {
                cell[pick].classList.add("showO")
                gameBoard.pick(pick, 'o')
                console.log(gameBoard.board())
                if(winner(lines('x'))){
                    console.log("you Win!!")
                    winnerBanner.style.display = 'flex';
                    userMessage.style.display = 'flex'
                    
                }else if(winner(lines('o'))){
                    console.log("Computer Wins!")
                    winnerBanner.style.display = 'flex'
                    compMessage.style.display = "flex"
                }else if (gameBoard.board().every(isNaN)){
                    console.log("Tie")
                    winnerBanner.style.display = 'flex'
                    tieMessage.style.display = 'flex'

                    gameOver = true;
                } else {    
                }
                
                
            }
        }
        
    }
    function lines (mark) {
        const markIndex =[];
        let xLocation = gameBoard.board().indexOf(mark)
        while (xLocation !== -1) {
            markIndex.push(xLocation);
            xLocation = gameBoard.board().indexOf(mark, xLocation + 1)
        }
        return markIndex.toString()
    }  



    function winner(str) {
        console.log('str')
            const message = ""
            const winSets = [
                ["0","1","2"],
                ["3","4","5"],
                ["6","7","8"],
                ["0","4","8"],
                ["2","4","6"],
                ["0","3","6"],
                ["2","5","8"],
                ["1","4","7"],
            ]

            for(let i = 0; i < winSets.length; i++) {
                let words = winSets[i]
                let allPresent = true; 
                    for(let j = 0; j<words.length; j++) {
                    if(!str.includes(words[j])) {
                        allPresent = false;
                        break;
                        }
                    }
                if (allPresent) {
                    gameOver = true;
                    return true;
                }
            }
            return false
        
        }



    //     console.log(lines('x'))
    //     if (lines("x").includes("0,1,2") || lines("x").includes("3","4","5") || lines("x").includes("6,7,8") || lines("x").includes("0,4,8") || lines("x").includes("2,4,6") || lines("x").includes("0,3,6") || lines("x").includes("2,5,8") || lines("x").includes("1,4,7")){
    //         message = "You Win!"
    //         console.log(message)
    //         gameOver = true;
    //         console.log(gameOver)
    //     } else if (lines("o") === "0,1,2" || lines("o") === "3,4,5" || lines("o") === "6,7,8" || lines("o") === "0,4,8" || lines("o") === "2,4,6" || lines("o") === "0,3,6" || lines("o") === "2,5,8" || lines("o") === "1,4,7")   {
    //         message = "Computer Wins!"
    //         console.log(message)
    //         gameOver = true;
    //         console.log(gameOver)
    //     } else if ((lines('o') + lines('x') === "0,1,2,3,4,5,6,7,8")){
    //         message = "It's a tie!"
    //         console.log(message)
    //         gameOver = true;
    //         console.log(gameOver)            
    // }



const newGame = (() => {
    const newGame = document.querySelector('.new-game')
    newGame.addEventListener('click', () => {
        gameBoard.newBoard()
        console.log(gameBoard.board())
        console.log(gameBoard.newBoard())
        for(let i = 0; i< cell.length; i++){
            cell[i].classList.remove('showX')
            cell[i].classList.remove('showO')
        }
        gameOver = false;
        winnerBanner.style.display = 'none';
        userMessage.style.display = 'none'
        compMessage.style.display = 'none'
        tieMessage.style.display = 'none'

    })
})();

})();



