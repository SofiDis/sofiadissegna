{
// home animation
//°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°
let animateHome = function (){

	// forEach method, could be shipped as part of an Object Literal/Module
	var forEach = function (array, callback, scope) {
		for (var i = 0; i < array.length; i++) {
	    callback.call(scope, i, array[i]); // passes back stuff we need
	}
	};


	// scroll percentage
	function getScrollPercent() {
		var h = document.documentElement,
		b = document.body,
		st = 'scrollTop',
		sh = 'scrollHeight';
		return (h[st] || b[st]) / ((h[sh] || b[sh]) - h.clientHeight) * 100;
	}

	// animation
	if($(".home-page").length >= 1){
		const
		// parent = document.querySelector('.outerHeight'),
		els = document.querySelectorAll('.el'),
		tl = anime.timeline({ autoplay: false });

		_.map(els, el => {
			anime.set(el, {
				top: anime.random(0, 150) + 'vh',
				left: anime.random(0, 200) + 'vh'});

			tl.add({
				targets: el,
				translateX: anime.random(-600, 600) + '%',
				translateY: anime.random(-600, 600) + '%',
				scale: anime.random(0.3, 1.5),
				rotate: anime.random(-365, 365) + 'deg',
				duration: anime.random(500, 5000), easing: 'easeInOutCirc' },
				0);
		});
		// new AnimePlayer({ add: tl })
		var myElement = document.getElementById("animateSection");
		var menuChange = document.getElementById("home-intro");

		var elementWatcher = scrollMonitor.create( myElement );
		var elementWatcher2 = scrollMonitor.create( menuChange );

		window.addEventListener('scroll', () => {
				const persentage = getScrollPercent();

				elementWatcher.enterViewport(function() {
					tl.seek(tl.duration * (persentage * 0.01));
				});
				
				elementWatcher2.enterViewport(function() {
					$("body").removeClass("dark");
				});
				elementWatcher2.exitViewport(function() {
					$("body").addClass("dark");
				});		

		});
	}
}
// home icon codestuff animation
//°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°
let animateIcoHome = function(){
	const DOM = {};
	DOM.read = Array.from(document.querySelectorAll('.read-ico'));
	DOM.toWatch = Array.from(document.querySelectorAll('.home-codestuff'));
	//read init °°°°°°°°
	const read1 = DOM.read[0];
	const read2 = DOM.read[1];
	const read3 = DOM.read[2];
	// creating watcher
	const toWatchIco = DOM.toWatch[0];
	const watcherIco = scrollMonitor.create(".home-codestuff",-100);
	// setting initial position
	anime.set(read1, {top: '0'});
	anime.set(read2, {top: '0'});
	anime.set(read3, {top: '0'}); 
	anime({
		targets:read1,	        
		top:'1%',
		duration: 1000,
		easing: 'linear',
		delay: 0,
		loop: true,
  		direction: 'alternate',
	});
	anime({
		targets:read2,	        
		top:'1.5%',
		duration: 1000,
		easing: 'linear',
		delay: 50,
		loop: true,
  		direction: 'alternate',
	});
	anime({
		targets:read3,	        
		top:'1%',
		duration: 1000,
		easing: 'linear',
		delay: 100,
		loop: true,
  		direction: 'alternate',
	});

}

// initialization
//°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°
const init = function() {
	animateHome();
}
init();
};




