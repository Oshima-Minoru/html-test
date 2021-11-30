"use strict";


$(function () {
    // フェードイン
    $(window).scroll(function () {
        const wHeight = $(window).height();
        const scrollAmount = $(window).scrollTop();
        $('.scrollanime').each(function () {
            const targetPosition = $(this).offset().top;
            if(scrollAmount > targetPosition - wHeight + 60) {
                $(this).addClass("fadeInDown");
            }
        });
    });
});

var scrollHeight = window.innerHeight / 2;

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  var header = document.getElementsByClassName("header");
  if (document.body.scrollTop > scrollHeight || document.documentElement.scrollTop > scrollHeight) {
    header[0].classList.add("header-scroll");
  } 
  else {
    if(header[0].classList.contains("header-scroll")){
    header[0].classList.remove("header-scroll");
  }
  }
}

function menu(x) {
    x.classList.toggle('change');
    var menu = document.getElementById('menu');
    if (menu.style.maxHeight) {
        menu.style.maxHeight = null;
        menu.style.border = 'none';
    }
    else {
        menu.style.border = '1px solid #E5671D';
        menu.style.maxHeight = menu.scrollHeight + 'px';
        menu.style.maxHeight = '100vh';
    }
}

function faqClick(x) {
    x.parentElement.classList.toggle('faq_show');
    var faq = document.getElementsByClassName('faq_card');
    var i;
    for(i = 0; i< faq.length; i++) {
        if (faq[i] != x.parentElement) {
            if (faq[i].classList.contains('faq_show')) {
                faq[i].classList.remove('faq_show');
                faq[i].lastElementChild.style.maxHeight = null;
            }
        }
    }
    if (x.parentElement.classList.contains('faq_show')) {
        x.parentElement.lastElementChild.style.maxHeight = x.parentElement.lastElementChild.scrollHeight + 'px';
    }
    if (!x.parentElement.classList.contains('faq_show')) {
        x.parentElement.lastElementChild.style.maxHeight = null;
    }
}

$(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
      $('.back-to-top').fadeIn('fast');
    } else {
      $('.back-to-top').fadeOut('fast');
    }
});
  
$('.back-to-top').click(function() {
    $(window).scrollTop(0);
    // $('html, body').animate({
    //   scrollTop: 0
    // }, 500, 'easeInOutExpo');
    return false;
});