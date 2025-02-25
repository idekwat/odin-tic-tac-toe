
playTicTacToe();

const BoardPieces = ["", "", "", "", "", "", "", "", ""];

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

    let currentPiece = "O";
    let hasWinner = false;
    let currentRound = 1

    placepiece.forEach((button) => {
        button.onclick = () => {
            BoardPieces[button.value] = currentPiece;
            console.log(BoardPieces);
            if(!hasWinner) {
                CheckBoardState(hasWinner);
            }
            button.disabled = true;
        }
    })



}

function CheckBoardState(hasWinner){
    let topleft = BoardPieces[0];
    let top = BoardPieces[1];
    let topright = BoardPieces[2];
    let left = BoardPieces[3];
    let middle = BoardPieces[4];
    let right = BoardPieces[5];
    let botleft = BoardPieces[6];
    let bottom = BoardPieces[7];
    let botright = BoardPieces[8];

    console.log(hasWinner);
    let checkwinner;

    switch(!hasWinner) {
        case(topleft == top && top == topright): //top ---
        checkwinner == true
        console.log("wat");
        break;
        case(topleft == middle && middle == botright): // slant  \
        break;
        case(topleft == left && left == botleft): // left |
        break;
        case(top == middle && middle == bottom): // middle |
        break;
        case(topright == middle && middle == botleft): // slant /
        break;
        case (topright == right && right == botright): // right |
        break;
        case (botleft == bottom && bottom == botright): // bottom ---
        break;
        case (left == middle && middle == right): // middle ---
        break;

    }
}