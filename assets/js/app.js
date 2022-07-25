/* M4NM JS */
const html = document.querySelector('.wrapper');
const loader = document.querySelector('#preloader');
const player = document.querySelector('.preloader-logo');
const mainplayer = document.querySelector('.main-logo');



  $( document ).ready(function() {
    loader.classList.add('start','filled');
    player.play();
    setTimeout(function () {
        loader.classList.remove('start','filled');
        html.classList.remove('dark');
        mainplayer.play();
        player.stop();
    }, 3000);
});


  $('#menu').on('click', function(){
    $('.menu').toggleClass('change');
    $('.sidenav').toggleClass('side-active');
});

document.getElementById("year").innerHTML = new Date().getFullYear();

var cursor = $(".cursor-dot"),
follower = $(".cursor-fill");

var posX = 0,
    posY = 0;

var mouseX = 0,
    mouseY = 0;

TweenMax.to({}, 0.010, {
  repeat: -1,
  onRepeat: function() {
    posX += (mouseX - posX) / 9;
    posY += (mouseY - posY) / 9;

    TweenMax.set(follower, {
        css: {
        left: posX - 12,
        top: posY - 12
        }
    });

    TweenMax.set(cursor, {
        css: {
        left: mouseX,
        top: mouseY
        }
    });
  }
});

$(document).on("mousemove", function(e) {
    mouseX = e.clientX;
    mouseY = e.clientY;
});
// yellow circle
$("a").on("mouseenter", function() {
    cursor.addClass("active");
    follower.addClass("active");
});
$("a").on("mouseleave", function() {
    cursor.removeClass("active");
    follower.removeClass("active");
});

$("button").on("mouseenter", function() {
  cursor.addClass("active");
  follower.addClass("active");
});
$("button").on("mouseleave", function() {
  cursor.removeClass("active");
  follower.removeClass("active");
});


$('.calendar').slick({
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
  fade: true,
  prevArrow: $('.prev'),
  nextArrow: $('.next'),
});

$('.gallery').slick({
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
  fade: true,
  asNavFor: $('.sub-gallery'),
});

$('.sub-gallery').slick({
  infinite: true,
  slidesToShow: 5,
  slidesToScroll: 1,
  arrows: false,
  asNavFor: $('.gallery'),
  focusOnSelect: true,
  responsive: [
    {
      breakpoint: 1600,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 1300,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    }
  ]
});

$(document).ready(function() {
  $('.lightbox').topbox();
});