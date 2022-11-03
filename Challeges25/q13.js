/*Let's play! You have to return which player won! In case of a draw return Draw!.

Examples(Input1, Input2 --> Output):
"scissors", "paper" --> "Player 1 won!"
"scissors", "rock" --> "Player 2 won!"
"paper", "paper" --> "Draw!"
*/

const rockPaperScissor = (player1, player2) => {
   if(player1 === 'rock'){
    if(player2 === 'rock'){
    console.log("Draw!")
    }
    if(player2 === 'paper'){
        console.log("Player 2 won!")
    }
    if(player2 === 'scissor'){
        console.log("Player 1 won!")
    }
   }
   if(player1 === 'paper'){
    if(player2 === 'rock'){
        console.log("Player 1 won!")
        }
        if(player2 === 'paper'){
           
            console.log("Draw!")
        }
        if(player2 === 'scissor'){
            console.log("Player 2 won!")
        }
}
if(player1 === 'scissor'){
    if(player2 === 'rock'){
        console.log("Player 2 won!")
        }
        if(player2 === 'paper'){
            console.log("Player 1 won!")
        }
        if(player2 === 'scissor'){
            console.log("Draw!")
          
        }
}
};


rockPaperScissor("scissor","paper");
rockPaperScissor("scissor","rock");
rockPaperScissor("rock","rock");