
        
var member = 5; 

var modal = [];
var btn =  [];
var span = [];

// When the user clicks the button, open the modal
function showmodal(z){
    return function() { modal[z].style.display = "block"; };
}

// When the user clicks on <span> (x), close the modal
function closemodal(z){
    return function() { modal[z].style.display = "none"; };
}

for(var j=1; j<=member; j++)
{
    // Get the modal
    modal[j] = document.getElementById("myModal"+j);
    
    // Get the button that opens the modal
    btn[j] = document.getElementById("myBtn"+j);
    
    // Get the <span> element that closes the modal
    span[j] = document.getElementsByClassName("close")[j-1];

    btn[j].onclick = showmodal(j);
    span[j].onclick = closemodal(j);
    
      
}


// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    
  if ( (event.target).id.startsWith("myModal")) {
    (event.target).style.display = "none";
  }
 
}

