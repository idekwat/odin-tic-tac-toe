playTicTacToe();

function playTicTacToe() {
    const placepiece = document.querySelectorAll(".tictactoe");
    const buttonValues = [];

    placepiece.forEach((button) => {
        button.onclick = () => {
            console.log(button.value);
        }
    })
}

function addPiece() {
    
}