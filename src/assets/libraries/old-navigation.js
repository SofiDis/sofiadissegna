{
  // Burger animation.
  const openCloseMenu = function () {
    $('.burgerMenu').click(function () {
      $('.menuPage').fadeToggle();
      $('.burgerMenu').toggleClass('closed');
      animationMenu.play();
    });
    $('.menuPage .closeMenu').click(function () {
      $('.menuPage').fadeToggle();
    });
  };

  // Little squares animation.
  let animationMenu = function () {
    (mElem = document.querySelectorAll('.m-el')),
      (animationMenu = anime.timeline());

    _.map(mElem, (mel) => {
      anime.set(mel, {
        top: anime.random(0, 150) + 'vh',
        left: anime.random(0, 200) + 'vh',
      });

      animationMenu.add(
        {
          targets: mel,
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

    // ------------------ apri e chiudi menu
    $('.burgerMenu').click(function () {
      animationMenu.restart();
    });

    $('.menuPage .closeMenu').click(function () {
      animationMenu.reset();
    });
  };

  // Init funcitons.
  openCloseMenu();
  animationMenu();
}
