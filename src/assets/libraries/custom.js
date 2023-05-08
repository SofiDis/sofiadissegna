$(window).load(function () {
  ////////////////////// MOVE SECTION AND HOMEPAGE ////////////////////////////////////
  $('.fa-chevron-right').click(function () {
    var contoAttuale = $('.moveMargin').attr('data-count');
    var margine = contoAttuale * 100;

    if (contoAttuale <= 1) {
      //alert(margine);
      $('.moveMargin').animate({ marginLeft: '-' + margine + '%' }, 800);
      $('.sectionIndex li').removeClass('active');
      $('.sectionIndex li').eq(contoAttuale).addClass('active');
      contoAttuale++;
      //alert(contoAttuale);
      $('.moveMargin').attr('data-count', contoAttuale);
      // change color of the main elements
      if (contoAttuale == 2) {
        $('body').addClass('dark');
      } else {
        $('body').removeClass('dark');
      }
    }
  });

  $('.fa-chevron-left').click(function () {
    var contoAttuale = $('.moveMargin').attr('data-count');
    if (contoAttuale != 1) {
      contoAttuale--;
      var margine = contoAttuale * 100 - 100;
      $('.sectionIndex li').removeClass('active');
      $('.sectionIndex li')
        .eq(contoAttuale - 1)
        .addClass('active');
      //alert(margine);
      $('.moveMargin').animate({ marginLeft: '-' + margine + '%' }, 800);
      //alert(contoAttuale);
      $('.moveMargin').attr('data-count', contoAttuale);
    }
    // change color of the main elements
    if (contoAttuale == 2) {
      $('body').addClass('dark');
    } else {
      $('body').removeClass('dark');
    }
  });

  // ------------------ effetto  hover globo luminoso

  $('.workSlider .mainTitle')
    .mouseenter(function () {
      $('.glow').css({ transform: 'scale(0.4)', bottom: '1.5rem' });
    })
    .mouseleave(function () {
      $('.glow').removeAttr('style');
    });

  // ------------------ smooth scroll globo luminoso
  // Add smooth scrolling to all links
  $('.glow, .segui').on('click', function (event) {
    $('html, body').animate(
      {
        scrollTop: $('.workData').offset().top,
      },
      800
    );
  });

  ////////////////////// MENU ////////////////////////////////////

  // ------------------ apri e chiudi menu
  $('.burgerMenu').click(function () {
    $('.menuPage').fadeToggle();
    $('.burgerMenu').toggleClass('closed');
    animationMenu.play();
  });
  $('.menuPage .closeMenu').click(function () {
    $('.menuPage').fadeToggle();
  });

  //----- onscroll control over elements   $(window).bind('scroll', function() {});
  var isInViewport = function (elem) {
    var bounding = elem.getBoundingClientRect();
    if (
      elem.offsetHeight >
      (window.innerHeight || document.documentElement.clientHeight)
    ) {
      var fix = elem.offsetHeight - document.documentElement.clientHeight;
      var windowHeight1 = window.innerHeight + fix;
      return (
        bounding.top + elem.offsetHeight >= 0 &&
        bounding.left >= 0 &&
        bounding.bottom <=
          (window.innerHeight + fix ||
            document.documentElement.clientHeight + fix) &&
        bounding.right <=
          (window.innerWidth || document.documentElement.clientWidth)
      );
    } else {
      bounding.top >= 0 &&
        bounding.left >= 0 &&
        bounding.bottom <=
          (window.innerHeight + fix ||
            document.documentElement.clientHeight + fix) &&
        bounding.right <=
          (window.innerWidth || document.documentElement.clientWidth);
    }
  };

  // ------------------ variazione menù scroll
  $('body').on('scroll', function (e) {
    var trigger = document.querySelector('#animateSection');

    if (isInViewport(trigger)) {
      $('body').addClass('dark');
    } else {
      $('body').removeClass('dark');
    }
  });

  ////////////////////// CLASSI AL 100% ////////////////////////////////////

  var viewportW = $(window).width();
  $('.fullW').css({
    width: viewportW,
  });
  $(window).resize(function () {
    $('.fullW').css({
      width: viewportW,
    });
  });

  ////////////////////// SKILL PAGE ////////////////////////////////////

  $('.skill').click(function () {
    if ($(this).hasClass('active')) {
      $('.skillWrap').removeClass('active');
      $('.skill').removeClass('active');
    } else {
      $('.skillWrap').removeClass('active');
      $('.skillWrap').toggleClass('active');
      $(this).toggleClass('active');
    }
  });

  ////////////////////// ANIMATING TITLE ////////////////////////////////////

  if ($('.ml14').length >= 1) {
    // Wrap every letter in a span
    var textWrapper = document.querySelector('.ml14 .letters');
    textWrapper.innerHTML = textWrapper.textContent.replace(
      /\S/g,
      "<span class='letter'>$&</span>"
    );

    anime
      .timeline({ loop: false })
      .add({
        targets: '.ml14 .line',
        scaleX: [0, 1],
        opacity: [0.5, 1],
        easing: 'easeInOutExpo',
        duration: 1000,
      })
      .add({
        targets: '.ml14 .letter',
        opacity: [0, 1],
        translateX: [40, 0],
        translateZ: 0,
        scaleX: [0.3, 1],
        easing: 'easeOutExpo',
        duration: 1000,
        offset: '-=600',
        delay: (el, i) => 150 + 25 * i,
      });

    var pathEls = document.querySelectorAll('path');
    for (var i = 0; i < pathEls.length; i++) {
      var pathEl = pathEls[i];
      var offset = anime.setDashoffset(pathEl);
      pathEl.setAttribute('stroke-dashoffset', offset);
      anime({
        targets: pathEl,
        strokeDashoffset: [offset, 0],
        duration: anime.random(3000, 3000),
        delay: anime.random(0, 2000),
        loop: false,
        direction: 'alternate',
        easing: 'easeInOutSine',
        autoplay: true,
      });
    }
  }

  // ----- ANIMATE LIBRARY ---------------

  // forEach method, could be shipped as part of an Object Literal/Module
  var forEach = function (array, callback, scope) {
    for (var i = 0; i < array.length; i++) {
      callback.call(scope, i, array[i]); // passes back stuff we need
    }
  };

  function getScrollPercent() {
    var h = document.documentElement,
      b = document.body,
      st = 'scrollTop',
      sh = 'scrollHeight';
    return ((h[st] || b[st]) / ((h[sh] || b[sh]) - h.clientHeight)) * 100;
  }
  if ($('.home-page').length >= 1) {
    const // parent = document.querySelector('.outerHeight'),
      els = document.querySelectorAll('.el'),
      tl = anime.timeline({ autoplay: false });

    _.map(els, (el) => {
      anime.set(el, {
        top: anime.random(0, 150) + 'vh',
        left: anime.random(0, 200) + 'vh',
      });

      tl.add(
        {
          targets: el,
          translateX: anime.random(-600, 600) + '%',
          translateY: anime.random(-600, 600) + '%',
          scale: anime.random(0.3, 1.5),
          rotate: anime.random(-365, 365) + 'deg',
          duration: anime.random(500, 5000),
          easing: 'easeInOutCirc',
        },
        0
      );
    });
    // new AnimePlayer({ add: tl })
    var myElement = document.getElementById('animateSection');
    var menuChange = document.getElementById('home-intro');

    var elementWatcher = scrollMonitor.create(myElement);
    var elementWatcher2 = scrollMonitor.create(menuChange);

    window.addEventListener('scroll', () => {
      const persentage = getScrollPercent();

      elementWatcher.enterViewport(function () {
        tl.seek(tl.duration * (persentage * 0.01));
      });

      elementWatcher2.enterViewport(function () {
        $('body').removeClass('dark');
      });
      elementWatcher2.exitViewport(function () {
        $('body').addClass('dark');
      });
    });
  }
});

// code stuff icon animation

const animateIcoHome = function () {
  const DOM = {};
  DOM.read = Array.from(document.querySelectorAll('.home-codestuff'));
  DOM.toWatch = Array.from(document.querySelectorAll('.read-ico'));
  //read init °°°°°°°°
  const read1 = DOM.read[0];
  const read2 = DOM.read[1];
  const read3 = DOM.read[2];
  // creating watcher
  const toWatch3 = DOM.toWatch[0];
  const watcher3 = scrollMonitor.create(toWatch3, -800);
  // setting initial position
  anime.set(read1, { bottom: '-100%' });
  anime.set(read2, { bottom: '-100%' });
  anime.set(read3, { bottom: '-100%' });

  //animation °°°°°°°°
  watcher3.enterViewport(function () {
    alert('ciao');
    anime.remove('.read-ico');
    anime({
      targets: read1,
      bottom: '0%',
      duration: 3000,
      easing: 'easeOutElastic',
      delay: 250,
    });
    anime({
      targets: read2,
      bottom: '0%',
      duration: 2500,
      easing: 'easeOutElastic',
      delay: 350,
    });
    anime({
      targets: read3,
      bottom: '0%',
      duration: 2500,
      easing: 'easeOutElastic',
      delay: 450,
    });
  });
  watcher3.exitViewport(function () {
    anime.remove('.read-ico');
    anime({
      targets: read1,
      bottom: '-100%',
      duration: 2000,
      easing: 'easeOutElastic',
      delay: 250,
    });
    anime({
      targets: read2,
      bottom: '-100%',
      duration: 2000,
      easing: 'easeOutElastic',
      delay: 350,
    });
    anime({
      targets: read3,
      bottom: '-100%',
      duration: 2000,
      easing: 'easeOutElastic',
      delay: 450,
    });
  });
};

animateIcoHome();
