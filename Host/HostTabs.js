
function openPage(pageName, elmnt, color) {

    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
  }

    
  // Remove the background color of all tablinks/buttons
  tablinks = document.getElementsByClassName("tablink");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].style.backgroundColor = "";
  }

  // Show the specific tab content
  document.getElementById(pageName).style.display = "block";

  // Add the specific color to the button used to open the tab content
  elmnt.style.backgroundColor = color;
}

// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();

$('.dropdown-toggle').dropdown()

$("#link1").on('click', function(e) {
    // prevent the default action, in this case the following of a link
    e.preventDefault();
    // capture the href attribute of the a element
    var url = $(this).attr('href');
    // perform a get request using ajax to the captured href value
    $.get(url, function() {
        // success
    });
});

let ref = firebase.database.ref("infos");



