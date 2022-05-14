

var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.maxHeight){
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    } 
  });
}


var modal = [];
var btn =  [];
var span = [];

function closemodal(z){
    return function() { modal[z].style.display = "none"; };
}

function showmodal(z){
    return function() { modal[z].style.display = "block"; };
}

for(var j =1;j<=14;j++)
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

function showSlides(n) {
  let a;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (a = 0; a < slides.length; a++) {
    slides[a].style.display = "none";
  }
  for (a = 0; a < dots.length; a++) {
    dots[a].className = dots[a].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}



var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

