// Side nav toggel.
$('.lines').on('click', function() {
  $('.side-bar').css('left', '0');
  $('.side-bar').addClass('toggled');
});


$('main').on('click', function() {
  $('.side-bar').css('left', '-270px');
  $('.side-bar').removeClass('toggled');
});


// Here we change the nav background and a tag color.
$(window).on('scroll', function() {
  if ($(this).scrollTop() > 10) {
    $('nav').css('background', '#fff');
    $('nav').addClass('scrolled');
    $('.nav-link, .logo-h3').css('color', '#FE5151');
    $('.line').css('background', '#FE5151');
    $('#to-top').css('display', 'block');
  } else if ($(this).scrollTop() < 10) {
    $('nav').css('background', 'transparent');
    $('nav').removeClass('scrolled');
    $('.nav-link, .logo-h3').css('color', '#fff');
    $('.line').css('background', '#fff');
    $('#to-top').css('display', 'none');
  }
});

//Animate the scrolling on nav a click
$('.nav-link, .mobile-link, #to-top').click(function() {
  $('html, body').animate({
    scrollTop: $($(this).attr('href')).offset().top
  }, 500);
  return false;
});




$(function() {

  $(window).scroll(function() {


    $('.story').each(function(i) {

      var bottom_of_object = $(this).position().top + $(this).outerHeight();
      var bottom_of_window = $(window).scrollTop() + $(window).height();

      /* Adjust the number to either have a delay or that the content starts fading a bit before you reach it  */
      bottom_of_window = bottom_of_window;

      if (bottom_of_window > bottom_of_object) {
        $(this).addClass('active');
      } else if (bottom_of_window < bottom_of_object - 100) {
        $(this).removeClass('active');
      }
    });

  });
});
