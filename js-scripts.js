
function playTicTacToe() {
    const placepiece = document.querySelectorAll(".tictactoe");
    const buttonValues = [];

    placepiece.forEach((button) => {
        button.onclick = () => {
            buttonValues[button.value] = 2;
        }
    })
}