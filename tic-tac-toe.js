window.onload = function () {
    var board = document.getElementById("board");
    var squares = board.getElementsByTagName("div");

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

            this.innerHTML = turn;
            this.classList.add(turn);
            gameState[index] = turn;

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
};