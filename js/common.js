window.onunload = function() {};

function sizecheck() {
  w = window.innerWidth ? window.innerWidth : $(window).width();
  h = window.innerHeight ? window.innerHeight : $(window).height();
}

sizecheck();
$(function () {
if (w > 769) {
} else { 
  $("header .drawer").click(function(){
  $('body').toggleClass('nav-open');
  $('header .navbar').fadeToggle(200);
    });

  $("header li a").click(function(){
  $('body').toggleClass('nav-open');
  $('header .navbar').fadeToggle(200);
    });
  }
}); 

const loadAnime = $('#load-animation');
$(window).on('load',function() {
  loadAnime.delay(2400).fadeOut(1000);
});
function stopload() {
  loadAnime.delay(1000).fadeOut(700);
}
setTimeout('stopload()', 10000);

$('.slideShow').slick({
  fade: true,
  autoplaySpeed: 3000,
  speed: 1500,
  autoplay: true,
  slideToShow: 1,
  slideToScroll: 1,
  arrows: true,
  prevArrow: '<div class="slick_prev"></div>',
  nextArrow: '<div class="slick_next"></div>',
  dots: true,
  pauseOnFocus: false,
  pauseOnHover: false,
  pauseOnDotsHover: false,
});

function fadeIn() {
  $('.fadeUpTrigger').each(function(){
    let scroll = $(window).scrollTop();
    let triTop = $(this).offset().top + 100;
    let winHeight = $(window).height();
    if(scroll >= triTop - winHeight){
      $(this).addClass('fadeUp');
    }else{
      $(this).removeClass('fadeUp');
    }
  });

  $('.fadeLeftTrigger').each(function(){
    let scroll = $(window).scrollTop();
    let triTop = $(this).offset().top + 100;
    let winHeight = $(window).height();
    if(scroll >= triTop - winHeight){
      $(this).addClass('fadeLeft');
    }else{
      $(this).removeClass('fadeLeft');
    }
  });

  $('.fadeRightTrigger').each(function(){
    let scroll = $(window).scrollTop();
    let triTop = $(this).offset().top + 100;
    let winHeight = $(window).height();
    if(scroll >= triTop - winHeight){
      $(this).addClass('fadeRight');
    }else{
      $(this).removeClass('fadeRight');
    }
  });

  $('.blurTrigger').each(function(){
    let scroll = $(window).scrollTop();
    let triTop = $(this).offset().top + 100;
    let winHeight = $(window).height();
    if(scroll >= triTop - winHeight){
      $(this).addClass('blur');
    }else{
      $(this).removeClass('blur');
    }
  });
}

$(window).scroll(function () {
  fadeIn();
});

function PageTopAnime() {
  let scroll = $(window).scrollTop();
  if(scroll >= 200){
    $('#page-top').removeClass('DownMove');
    $('#page-top').addClass('UpMove');
  }else{
    if($('#page-top').hasClass('UpMove')){
      $('#page-top').removeClass('UpMove');
      $('#page-top').addClass('DownMove');
    }
  }
}

$(window).scroll(function(){
  PageTopAnime();
});

$('#page-top a').click(function(){
  $('body,html').animate({
    scrollTop:0
  },500);
  return false;
});