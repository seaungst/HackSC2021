window.addEventListener("load", function(windowLoadE) {
    var p, letter, button, holder;
    holder = document.getElementById("letter-buttons");
    p = document.createElement("p");

    for (var i = 65; i <= 90; i++) {
        letter = String.fromCharCode(i);
        button = document.createElement("button");
        button.innerHTML = letter;
        button.setAttribute("data-letter", letter);
        button.onclick = function(e) { 
            setLetter(this.getAttribute("data-letter"));
        };
        p.appendChild( button );
    }
});

function setLetter(letter) {
    // output letter from clicking on letter button
}