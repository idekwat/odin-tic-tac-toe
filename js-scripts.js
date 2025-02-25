
playTicTacToe();

const BoardPieces = ["", "", "", "", "", "", "", "", ""];

function GameState(piece) {
    this.piece = piece;
}

function playTicTacToe() {
    const placepiece = document.querySelectorAll(".tictactoe");
    let currentPiece;
    let currentRound = 1;
    let noWinner = true;

    if(noWinner & currentRound < 6) {
        if(currentRound % 2 == 1) {
            currentPiece = "O";
        }
        else if(currentRound % 2 == 0){
            currentPiece = "X";
        }
        placepiece.forEach((button) => {
            button.onclick = () => {
                BoardPieces[button.value] = currentPiece;
                console.log(BoardPieces);
                console.log(currentPiece);
                console.log(currentRound);
                CheckBoardState(noWinner);
            }
        })
        currentRound++;
    }

}

function CheckBoardState(winner){
    let topleft = BoardPieces[0];
    let top = BoardPieces[1];
    let topright = BoardPieces[2];
    let left = BoardPieces[3];
    let middle = BoardPieces[4];
    let right = BoardPieces[5];
    let botleft = BoardPieces[6];
    let bottom = BoardPieces[7];
    let botright = BoardPieces[8];

    switch(BoardPieces) {
        case(topleft == top & top == topright & topright == topleft):
        winner = true;
        return winner;

        case(topleft == left & left == botleft & botleft == topleft):
        winner = true;
        return winner;

        case(topleft == middle & middle == botright & botright == topleft):
        winner = true;
        return winner;

        case(left == middle & middle == right & right == left):
        winner = true;
        return winner;

        case(botleft == middle & middle == topright) & topright == botleft:
        winner = true;
        return winner;

        case(top == middle & middle == bottom & bottom == top):
        winner = true;
        return winner;

        case(topright == right & right == botright & botright ==topright):
        winner = true;
        return winner;

        default:
        winner = false
        return winner;
    }
}