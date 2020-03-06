$(function () {
  //popovers
  $('[data-toggle="tooltip"]').tooltip();

  //show the input form on ckick and and on blur
  var searshIcon = $('.upperbar .upperbar-content .searsh');

  searshIcon.click(function () {
    $(this).toggleClass('active');
    $('.upperbar .upperbar-content .input').toggleClass('active');
    $('.upperbar .lang').fadeToggle(100);
  });
  $('.upperbar .upperbar-content .input input').blur(function () {
    $(this).parent().removeClass('active');
    $(searshIcon).removeClass('active');
    $('.upperbar .lang').fadeIn(100);
  });

  //show the navbar
  var nav = $('.nav-parent'),
      navbar = $('.nav-parent .nav'),
      burgerBar = $('.navbar .burger-bar');
  $(burgerBar).click(function () {
    showNav();
  });
  $(nav).click(function () {
    removeNav();
  });
  $('.nav-parent .nav').click(function (e) {
    e.stopPropagation();
  });

function showNav(){
  $(burgerBar).addClass('active');
  $(nav).fadeIn(400);
  $(navbar).addClass('active');
};
function removeNav(){
  $(burgerBar).removeClass('active');
  $(nav).fadeOut(400);
  $(navbar).removeClass('active');
};

  //DropDown menu
  var navLinks = $('.nav-parent .nav .nav-links .main-a');

  $(navLinks).click(function () {

    $('.sub-links').slideUp(300);

    if($(this).hasClass('active')){
      $($(this).data('toggle')).slideUp(300);
      $(this).removeClass('active');
    } else{
      $($(this).data('toggle')).slideDown(300);
      $(this).addClass('active');
      $(this).siblings().removeClass('active');
    }
  });

  //media-icon
  var mediaIcon = $('.media-icon'),
    open = $('.media-icon .fa-forward'),
    close = $('.media-icon .fa-backward');

  $(close).click(function () {
    $(mediaIcon).removeClass('active');
    $(close).fadeOut();
    $(open).fadeIn();
  });

  $(open).click(function () {
    $(mediaIcon).addClass('active');
    $(close).fadeIn();
    $(open).fadeOut();
  });

  setTimeout(function () {
    $(mediaIcon).removeClass('active');
    $(close).fadeOut();
    $(open).fadeIn();
  }, 2000);


  /*Call the nice scorll
    $("body").niceScroll({
      cursorcolor: "#1659a0",
      cursorwidth: "8px",
      cursorborder: "none",
      scrollspeed: 10
  });*/

});
