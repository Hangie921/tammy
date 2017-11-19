$(document).ready(function() {
  // Header Scroll
  $(window).on('scroll', function() {
    var scroll = $(window).scrollTop();

    if (scroll >= 50) {
      $('#header').addClass('fixed');
      $('#header .nav_link a').removeClass('white');
      $('#header .logo').removeClass('white')
    } else {
      $('#header').removeClass('fixed');
      $('#header .nav_link a').addClass('white');
      $('#header .logo').addClass('white')
    }
  });


  // Flexslider
  $('.flexslider').flexslider({
    animation: "fade",
    directionNav: false,
  });

  // Page Scroll
  var sections = $('section')
  nav = $('nav[role="navigation"]');

  $(window).on('scroll', function() {
    var cur_pos = $(this).scrollTop();
    sections.each(function() {
      var top = $(this).offset().top - 276
      bottom = top + $(this).outerHeight();
      if (cur_pos >= top && cur_pos <= bottom) {
        nav.find('a').removeClass('active');
        nav.find('a[href="#' + $(this).attr('id') + '"]').addClass('active');
      }
    });
  });
  nav.find('a').on('click', function() {
    var $el = $(this)
    id = $el.attr('href');
    $('html, body').animate({
      scrollTop: $(id).offset().top - 75
    }, 500);
    return false;
  });

  // Mobile Navigation
  $('.nav-toggle').on('click', function() {
    $(this).toggleClass('close-nav');
    nav.toggleClass('open');
    return false;
  });
  nav.find('a').on('click', function() {
    $('.nav-toggle').toggleClass('close-nav');
    nav.toggleClass('open');
  });

  // language setting
  // For now, when you choose the language, next time your reload 
  // the page, it will be the language you previous set
  var lang = new Lang();
  lang.dynamic('zh', 'js/lang/langpack/zh.json');
  lang.dynamic('cn', 'js/lang/langpack/cn.json');
  lang.init({
    defaultLang: 'en',
    currentLang: 'en'
  });
  function clickOpt (e) {
    window.lang.change(e.target.value)
    return false
  }

});