
playTicTacToe();

const BoardPieces = [];

/*
function InitializeGame() {
    let noWinner = true;

    while(!noWinner) {
        playTicTacToe();
        console.log(noWinner);
        CheckBoardState(noWinner);
    }
}*/

function playTicTacToe() {
    const placepiece = document.querySelectorAll(".tictactoe");

    let currentPiece = "X";
    let hasWinner = false;
    let currentRound = 1

    placepiece.forEach((button) => {
        button.onclick = () => {
            button.textContent = currentPiece;
            BoardPieces[button.value] = currentPiece;
            if(currentRound % 2 == 1) {
                currentPiece = "O";
            }
            else  {
                currentPiece = "X";
            }
            if(!hasWinner && currentRound<9) {
                currentRound++;
                setTimeout(CheckBoardState, 10);
            }
            else if(!hasWinner && currentRound == 9)
            {
                setTimeout(alert("its a tie"),100);
            }
            console.log(currentRound);
            button.disabled = true;
        }
    })

}

function CheckBoardState(){
    let topleft = BoardPieces[0];
    let top = BoardPieces[1];
    let topright = BoardPieces[2];
    let left = BoardPieces[3];
    let middle = BoardPieces[4];
    let right = BoardPieces[5];
    let botleft = BoardPieces[6];
    let bottom = BoardPieces[7];
    let botright = BoardPieces[8];

    let winner = false;
    let winningPiece;

    switch(!winner) {
        case(topleft == "X" && top == "X" && topright == "X"): //top --- x
        winner = true;
        winningPiece = "X"
        AnnounceWinner(winningPiece);
        break;
        case(topleft == "O" && top == "O" && topright == "O"): //top --- O
        winner = true;
        winningPiece = "O"
        AnnounceWinner(winningPiece);
        break;

        case(left == "X" && middle == "X" && right == "X"): //middle --- x
        winner = true;
        winningPiece = "X"
        AnnounceWinner(winningPiece);
        break;
        case(left == "O" && middle == "O" && right == "O"): //middle --- o
        winner = true;
        winningPiece = "O"
        AnnounceWinner(winningPiece);
        break;

        case(botleft == "X" && bottom == "X" && botright == "X"): //bottom --- x
        winner = true;
        winningPiece = "X"
        AnnounceWinner(winningPiece);
        break;
        case(botleft == "O" && bottom == "O" && botright == "O"): //bottom --- o
        winner = true;
        winningPiece = "O"
        AnnounceWinner(winningPiece);
        break;

        case(topleft == "X" && left == "X" && botleft == "X"): //left | x
        winner = true;
        winningPiece = "X"
        AnnounceWinner(winningPiece);
        break;
        case(topleft == "O" && left == "O" && botleft == "O"): //left | o
        winner = true;
        winningPiece = "O"
        AnnounceWinner(winningPiece);
        break;

        case(top == "X" && middle == "X" && bottom == "X"): //middle | x
        winner = true;
        winningPiece = "X"
        AnnounceWinner(winningPiece);
        break;
        case(top == "O" && middle == "O" && bottom == "O"): //middle | o
        winner = true;
        winningPiece = "O"
        AnnounceWinner(winningPiece);
        break;

        case(topright == "X" && right == "X" && botright == "X"): //right | x
        winner = true;
        winningPiece = "X"
        AnnounceWinner(winningPiece);
        break;
        case(topright == "O" && right == "O" && botright == "O"): //right | o
        winner = true;
        winningPiece = "O"
        AnnounceWinner(winningPiece);
        break;
        
        case(topleft == "X" && middle == "X" && botright == "X"): // slant \ x
        winner = true;
        winningPiece = "X"
        AnnounceWinner(winningPiece);
        break;
        case(topleft == "O" && middle == "O" && botright == "O"): // slant \ o
        winner = true;
        winningPiece = "O"
        AnnounceWinner(winningPiece);
        break;

        case(topright == "X" && middle == "X" && botleft == "X"): // slant / x
        winner = true;
        winningPiece = "X"
        AnnounceWinner(winningPiece);
        break;
        case(topright == "O" && middle == "O" && botleft == "O"): // slant / o
        winner = true;
        winningPiece = "O"
        AnnounceWinner(winningPiece);
        break;

        default:
        winner = false;
        break;
    }
}

function AnnounceWinner(winningPiece) {
    alert(winningPiece + " wins");

}