window.onload = function () {
    var board = document.getElementById("board");
    var squares = board.getElementsByTagName("div");
    var status = document.getElementById("status");
    var button = document.querySelector(".btn");

    var gameState = ["", "", "", "", "", "", "", "", ""];
    var turn = "X";

    // Exercise 1 - add the square class to each div
    for (var i = 0; i < squares.length; i++) {
        squares[i].className = "square";
    }

    // Exercise 2 and 3
    for (var i = 0; i < squares.length; i++) {
        squares[i].setAttribute("data-index", i);

        // Exercise 2 - click on a square to put an X or O
        squares[i].onclick = function () {
            var index = this.getAttribute("data-index");

            // Exercise 6 - dont let them change a square that is already taken
            if (gameState[index] != "") {
                return;
            }

            this.innerHTML = turn;
            this.classList.add(turn);
            gameState[index] = turn;

            // Exercise 4 - check if someone won
            checkWinner();

            // switch turns
            if (turn == "X") {
                turn = "O";
            } else {
                turn = "X";
            }
        };

        // Exercise 3 - add hover class when mouse is over a square
        squares[i].onmouseover = function () {
            this.classList.add("hover");
        };

        // take it off when the mouse leaves
        squares[i].onmouseout = function () {
            this.classList.remove("hover");
        };
    }

    // Exercise 4 - check for the winner
    function checkWinner() {
        var wins = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ];

        for (var i = 0; i < wins.length; i++) {
            var a = wins[i][0];
            var b = wins[i][1];
            var c = wins[i][2];

            if (gameState[a] != "" && gameState[a] == gameState[b] && gameState[a] == gameState[c]) {
                status.innerHTML = "Congratulations! " + gameState[a] + " is the Winner!";
                status.classList.add("you-won");
            }
        }
    }

    // Exercise 5 - New Game button
    button.onclick = function () {
        for (var i = 0; i < squares.length; i++) {
            squares[i].innerHTML = "";
            squares[i].className = "square";
            gameState[i] = "";
        }
        turn = "X";
        status.innerHTML = "Move your mouse over a square and click to play an X or an O.";
        status.classList.remove("you-won");
    };
};