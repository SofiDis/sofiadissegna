{
  // Needs Anime as a dependency.

  const animateTitle = function () {
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
  };

  animateTitle();
}
