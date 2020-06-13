// Select all links with hashes
$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
      &&
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
    }
  });

var headerTransparent = true;
$(window).scroll(function(){
  var headerShouldBeOpaque = $(window).scrollTop()>10;
  if (headerShouldBeOpaque && headerTransparent) {
    headerTransparent = false;
    $('.navbar').addClass("scrolled");
  } else if (!headerShouldBeOpaque && !headerTransparent) {
    headerTransparent = true;
    $('.navbar').removeClass("scrolled")
  }
})

var isVisible = false;
$(window).scroll(function(){
     var shouldBeVisible = $(window).scrollTop()>500;
     if ($(window).width() > 992) {
       if (shouldBeVisible && !isVisible) {
            isVisible = true;
            $('#fixedbtn-up').show();
            $('#fixedbtn-reg').show();
       } else if (isVisible && !shouldBeVisible) {
            isVisible = false;
            $('#fixedbtn-up').hide();
            $('#fixedbtn-reg').hide();
       }

     }
     else {
       var shouldBeVisible = $(window).scrollTop()>200;
       if (shouldBeVisible && !isVisible) {
            isVisible = true;
            $('.nav-bottom').show();
       } else if (isVisible && !shouldBeVisible) {
            isVisible = false;
            $('.nav-bottom').hide();
       }

     }
});
