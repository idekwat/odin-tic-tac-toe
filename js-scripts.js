
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
            BoardPieces[button.value] = currentPiece;
            console.log(BoardPieces);
            if(currentRound % 2 == 1) {
                currentPiece = "O";
            }
            else  {
                currentPiece = "X";
            }
            if(!hasWinner) {
                CheckBoardState();
                currentRound++;
            }
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

    switch(!winner) {
        case(topleft == "X" && top == "X" && topright == "X"): //top ---
        winner = true;
        console.log("wat " +winner);
        break;
        /*
        case(topleft == middle && middle == botright && botright == topleft): // slant  \
        winner = true;
        console.log("wat " +winner);
        break;
        case(topleft == left && left == botleft && botleft == topleft): // left |
        winner = true;
        console.log("wat " +winner);
        break;
        case(top == middle && middle == bottom && bottom == top): // middle |
        winner = true;
        console.log("wat " +winner);
        break;
        case(topright == middle && middle == botleft && botleft == topright): // slant /
        winner = true;
        console.log("wat " +winner);
        break;
        case (topright == right && right == botright && botright == topright): // right |
        winner = true;
        console.log("wat " +winner);
        break;
        case (botleft == bottom && bottom == botright && botright == botleft): // bottom ---
        winner = true;
        console.log("wat " +winner);
        break;
        case (left == middle && middle == right && right == left): // middle ---
        winner = true;
        console.log("wat " +winner);
        break;*/
        default:
        winner = false;
        break;

    }
}