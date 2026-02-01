$(document).ready(function(){
  $("a").on('click', function(event) {
    if (this.hash !== "") { // Handle only anchor links
      event.preventDefault();

      var hash = this.hash;

      $('html, body').animate({
        scrollTop: $(hash).offset().top - $("nav").height() - 10 // Adjust for nav bar height
      }, 800, function(){ // Scroll duration 800ms
      });
    }
  });
});
