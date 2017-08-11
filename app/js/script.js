var slideIndex = 0;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlide");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1} 
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none"; 
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

// ***********************Modals*************************

// *******Modal with video*****************
// Get the modal
var modal = document.getElementById('videoModal');

// Get the button that opens the modal
var btn = document.getElementById("videoBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal 
btn.onclick = function() {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

//******Service Modals********
// WebDev modal
// Get the modal
var modalwebdev = document.getElementById('webDev');

// Get the button that opens the modal
var btnwebdev = document.getElementById("webdev_learnMore");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[1];

// When the user clicks on the button, open the modal 
btnwebdev.onclick = function() {
    modalwebdev.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modalwebdev.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
// window.onclick = function(event) {
//     if (event.target == modalwebdev) {
//         modalwebdev.style.display = "none";
//     }
// }

// dev modal
// Get the modal
var modaldev = document.getElementById('dev');

// Get the button that opens the modal
var btndev = document.getElementById("dev_learnMore");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[2];

// When the user clicks on the button, open the modal 
btndev.onclick = function() {
    modaldev.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modaldev.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
// window.onclick = function(event) {
//     if (event.target == modaldev) {
//         modaldev.style.display = "none";
//     }
// }

// seo modal
// Get the modal
var modalseo = document.getElementById('seo');

// Get the button that opens the modal
var btnseo = document.getElementById("seo_learnMore");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[3];

// When the user clicks on the button, open the modal 
btnseo.onclick = function() {
    modalseo.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modalseo.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
// window.onclick = function(event) {
//     if (event.target == modalseo) {
//         modalseo.style.display = "none";
//     }
// }

// ******************Smooth scrolling**********************
$(document).ready(function(){
  // Add smooth scrolling to all links
  $("a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
   
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
});