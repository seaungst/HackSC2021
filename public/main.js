function showHide(dest) {
    
    var pages = ["homePage", "createRoom", "joinRoom", "contact"];
    
    for (var item in pages) {
        if (dest != pages[item]){
            document.getElementById(pages[item]).style.display = "none"; 
            console.log("hide " + pages[item]);
        }
        else {
            if (dest == pages[1]) {
                document.getElementById("room-code-field").style.display = "none"; 
            }
            document.getElementById(dest).style.display = "block"; 
            console.log("show " + dest);
        }
    } 
}

function generateRoomCode() {
    var hostName = document.getElementById("host-name").value;
    //var roomCode = Math.floor(100000 + Math.random() * 900000);
    
    document.getElementById("room-code-field").style.display = "block"; 
    
    //document.getElementById("room-code").innerHTML = roomCode; 
    document.getElementById("host-name-display").innerHTML = hostName;
    
}

function startPlayer() {
//    document.getElementById("player-name").textContent = document.getElementById("participant-name").value;
//    document.getElementById("session-code").textContent = document.getElementById("enter-room-code").value;
    
    window.location.href = "../player/playerscreen.html";
}