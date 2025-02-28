
const placepiece = document.querySelectorAll(".tictactoe");
const startgame = document.getElementById("newGame");
const BoardPieces = [];


newGame.onclick = (e) => {
    InitializeGame();
}

function InitializeGame() {
    for(let i = 0; i<BoardPieces.length; i++) {
        BoardPieces[i] = "";
    }
    placepiece.forEach(button => {
        button.innerHTML = "&nbsp";
        button.disabled = false;
    });
    const p1name = document.getElementById("Player1");
    const p2name = document.getElementById("Player2");
    let isplayer = prompt("Player 1 name", "Player1");
    let isplayer2 = prompt("Player 2 name", "Player2");
    p1name.textContent = isplayer;
    p2name.textContent = isplayer2;

    playTicTacToe(isplayer, isplayer2);
}

function playTicTacToe(isplayer, isplayer2) {

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
                setTimeout(CheckBoardState(isplayer, isplayer2), 10);
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

function CheckBoardState(isplayer, isplayer2){
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
        case(topleft == "X" && top == "X" && topright == "X"): //top --- x
        winner = true;
        AnnounceWinner(isplayer);

        break;
        case(topleft == "O" && top == "O" && topright == "O"): //top --- O
        winner = true;
        winningPiece = "O"
        AnnounceWinner(isplayer2);
        break;

        case(left == "X" && middle == "X" && right == "X"): //middle --- x
        winner = true;
        winningPiece = "X"
        AnnounceWinner(isplayer);
        break;
        case(left == "O" && middle == "O" && right == "O"): //middle --- o
        winner = true;
        winningPiece = "O"
        AnnounceWinner(isplayer2);
        break;

        case(botleft == "X" && bottom == "X" && botright == "X"): //bottom --- x
        winner = true;
        winningPiece = "X"
        AnnounceWinner(isplayer);
        break;
        case(botleft == "O" && bottom == "O" && botright == "O"): //bottom --- o
        winner = true;
        winningPiece = "O"
        AnnounceWinner(isplayer2);
        break;

        case(topleft == "X" && left == "X" && botleft == "X"): //left | x
        winner = true;
        winningPiece = "X"
        AnnounceWinner(isplayer);
        break;
        case(topleft == "O" && left == "O" && botleft == "O"): //left | o
        winner = true;
        winningPiece = "O"
        AnnounceWinner(isplayer2);
        break;

        case(top == "X" && middle == "X" && bottom == "X"): //middle | x
        winner = true;
        winningPiece = "X"
        AnnounceWinner(isplayer);
        break;
        case(top == "O" && middle == "O" && bottom == "O"): //middle | o
        winner = true;
        winningPiece = "O"
        AnnounceWinner(isplayer2);
        break;

        case(topright == "X" && right == "X" && botright == "X"): //right | x
        winner = true;
        winningPiece = "X"
        AnnounceWinner(isplayer);
        break;
        case(topright == "O" && right == "O" && botright == "O"): //right | o
        winner = true;
        winningPiece = "O"
        AnnounceWinner(isplayer2);
        break;
        
        case(topleft == "X" && middle == "X" && botright == "X"): // slant \ x
        winner = true;
        winningPiece = "X"
        AnnounceWinner(isplayer);
        break;
        case(topleft == "O" && middle == "O" && botright == "O"): // slant \ o
        winner = true;
        winningPiece = "O"
        AnnounceWinner(isplayer2);
        break;

        case(topright == "X" && middle == "X" && botleft == "X"): // slant / x
        winner = true;
        winningPiece = "X"
        AnnounceWinner(isplayer);
        break;
        case(topright == "O" && middle == "O" && botleft == "O"): // slant / o
        winner = true;
        winningPiece = "O"
        AnnounceWinner(isplayer2);
        break;

        default:
        winner = false;
        break;
    }
}

function AnnounceWinner(winningPiece) {
    alert(winningPiece + " wins");
    placepiece.forEach(button => {
        button.disabled = true;
    });
    startgame.textContent = "Play Again?";
}