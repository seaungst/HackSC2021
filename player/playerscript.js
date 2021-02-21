var pages = ["waiting-screen", "letter-vote", "two-truths", "question-response", "poll"]

function goTo(pageID) {
    for (var i = 0; i < pages.length; i++) {
        document.getElementById(pages[i]).style.display = "none";
    }
    document.getElementById(pageID).style.display = "block";
    
}

function getData(formID) {
    var IDasID = "#" + formID;
    var values = $(IDasID).serialize();
    
    var temp = document.getElementById("test-output").textContent;
    document.getElementById("test-output").textContent = temp + values + ", ";
    
    document.getElementById(formID).reset();
    
    goTo("waiting-screen");
}