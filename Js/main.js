

$('.lines').on('click', function() {
  $('.side-bar').css('left', '0');
  $('.side-bar').addClass('toggled');
});


$('main').on('click', function() {
  $('.side-bar').css('left', '-270px');
  $('.side-bar').removeClass('toggled');
});

$(window).on('scroll', function() {
    if($(this).scrollTop() > 10) {
      $('nav').css('background', '#fff');
      $('nav').addClass('scrolled');
      $('.nav-link, .logo-h3').css('color', '#FE5151');
      $('.line').css('background', '#FE5151');
    } else if ($(this).scrollTop() < 10) {
      $('nav').css('background', 'transparent');
      $('nav').removeClass('scrolled');
      $('.nav-link, .logo-h3').css('color', '#fff');
      $('.line').css('background', '#fff');
    }
});
