let currentPlayer = 'X';
let board = ['', '', '', '', '', '', '', '', ''];
let gameActive = true;

function cellClicked(index) {
    if (gameActive && board[index] === '') {
        board[index] = currentPlayer;
        document.getElementsByClassName('cell')[index].innerText = currentPlayer;
        if (checkWin()) {
            document.getElementById('message').innerText = `${currentPlayer} wins!`;
            gameActive = false;
        } else if (checkDraw()) {
            document.getElementById('message').innerText = `It's a draw!`;
            gameActive = false;
        } else {
            currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
            document.getElementById('message').innerText = `${currentPlayer}'s turn`;
        }
    }
}

function checkWin() {
    const winConditions = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];
    return winConditions.some(condition => {
        return condition.every(index => {
            return board[index] === currentPlayer;
        });
    });
}

function checkDraw() {
    return board.every(cell => {
        return cell !== '';
    });
}

function resetGame() {
    currentPlayer = 'X';
    board = ['', '', '', '', '', '', '', '', ''];
    gameActive = true;
    document.getElementById('message').innerText = '';
    document.querySelectorAll('.cell').forEach(cell => {
        cell.innerText = '';
    });
}
