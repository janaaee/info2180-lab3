window.onload = function () {
    var board = document.getElementById("board");
    var squares = board.getElementsByTagName("div");

    // Exercise 1 - add the square class to each div
    for (var i = 0; i < squares.length; i++) {
        squares[i].className = "square";
    }
};