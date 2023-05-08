
{

// animazione con screenwatcher
//°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°
const watcherAnimation = function(){
		//DOM build °°°°°°°°
		const DOM = {};
		DOM.contentElems = Array.from(document.querySelectorAll('.content-wrap'));
		DOM.draw = Array.from(document.querySelectorAll('.draw'));
		DOM.shape = Array.from(document.querySelectorAll('.shape'));
		DOM.read = Array.from(document.querySelectorAll('.read'));
		DOM.paint = Array.from(document.querySelectorAll('.paint'));
		DOM.code = Array.from(document.querySelectorAll('.code'));
		
		
		// IMAGES INIT
		//Drawings init °°°°°°°°
		const draw1 = DOM.draw[0];
  		const draw2 = DOM.draw[1];
  		//shape init °°°°°°°°
  		const shape1 = DOM.shape[0];
  		const shape2 = DOM.shape[1];
  		const shape3 = DOM.shape[2];
  		//read init °°°°°°°°
  		const read1 = DOM.read[0];
  		const read2 = DOM.read[1];
  		const read3 = DOM.read[2];
  		//paint init °°°°°°°°
  		const paint1 = DOM.paint[0];
  		const paint2 = DOM.paint[1];
  		const paint3 = DOM.paint[2];
  		//code init °°°°°°°°
  		const code1 = DOM.code[0];
  		const code2 = DOM.code[1];
  		const code3 = DOM.code[2];

  		





  		//For the watcher °°°°°°°°
		const toWatch1 = DOM.contentElems[0];
		const watcher = scrollMonitor.create(toWatch1,-300);
		//
		const toWatch2 = DOM.contentElems[1];
		const watcher2 = scrollMonitor.create(toWatch2,-500);
		//
		const toWatch3 = DOM.contentElems[2];
		const watcher3 = scrollMonitor.create(toWatch3,-500);
		//
		const toWatch4 = DOM.contentElems[3];
		const watcher4 = scrollMonitor.create(toWatch4,-500);
		//
		const toWatch5 = DOM.contentElems[4];
		const watcher5 = scrollMonitor.create(toWatch5,-500);

		//Setting anime initial position °°°°°°°°
		anime.set("#mouseScroll", {opacity: 0});

		anime.set(draw1, {left: '100%'});
		anime.set(draw2, {left: '-100%'});

		anime.set(shape1, {bottom: '-100%'});
		anime.set(shape2, {bottom: '-100%'});
		anime.set(shape3, {bottom: '-100%'});

		anime.set(read1, {bottom: '-100%'});
		anime.set(read2, {bottom: '-100%'});
		anime.set(read3, {bottom: '-100%'});

		anime.set(paint1, {bottom: '-100%'});
		anime.set(paint2, {bottom: '-100%'});
		anime.set(paint3, {bottom: '-100%'});

		anime.set(code1, {bottom: '-100%'});
		anime.set(code2, {bottom: '-100%'});
		anime.set(code3, {bottom: '-100%'});


		//First animation °°°°°°°°
		watcher.enterViewport(function() {
			anime.remove(".mouse-scroll");
			anime({
				targets: "#mouseScroll",	        
				opacity: 1,
				duration: 1500,
				easing: 'easeInCirc',
			});
		});

		watcher.exitViewport(function() {
			anime.remove(".mouse-scroll");
			anime({
				targets: "#mouseScroll",	        
				opacity: 0,
				duration: 1500,
				easing: 'easeInCirc',
			});
		});
		

		//Second animation °°°°°°°°
		watcher2.enterViewport(function() {
			anime.remove(".read");
			anime({
				targets:read1,	        
				bottom:'0%',
				duration: 3000,
				easing: 'easeOutElastic',
				delay: 250,
			});
			anime({
				targets:read2,	        
				bottom:'0%',
				duration: 2500,
				easing: 'easeOutElastic',
				delay: 350,
			});
			anime({
				targets:read3,	        
				bottom:'0%',
				duration: 2500,
				easing: 'easeOutElastic',
				delay: 450,
			});
		});
		watcher2.exitViewport(function() {
			anime.remove(".read");
			anime({
				targets:read1,	        
				bottom:'-100%',
				duration: 2000,
				easing: 'easeOutElastic',
				delay: 250,
			});
			anime({
				targets:read2,	        
				bottom:'-100%',
				duration: 2000,
				easing: 'easeOutElastic',
				delay: 350,
			});
			anime({
				targets:read3,	        
				bottom:'-100%',
				duration: 2000,
				easing: 'easeOutElastic',
				delay: 450,
			});
		});



		//Third animation °°°°°°°°
		watcher3.enterViewport(function() {
			anime.remove(".paint");
			anime({
				targets:paint1,	        
				bottom:'0%',
				duration: 3000,
				easing: 'easeOutElastic',
				delay: 250,
			});
			anime({
				targets:paint2,	        
				bottom:'0%',
				duration: 2500,
				easing: 'easeOutElastic',
				delay: 350,
			});
			anime({
				targets:paint3,	        
				bottom:'0%',
				duration: 2500,
				easing: 'easeOutElastic',
				delay: 450,
			});
		});
		watcher3.exitViewport(function() {
			anime.remove(".paint");
			anime({
				targets:paint1,	        
				bottom:'-100%',
				duration: 2000,
				easing: 'easeOutElastic',
				delay: 250,
			});
			anime({
				targets:paint2,	        
				bottom:'-100%',
				duration: 2000,
				easing: 'easeOutElastic',
				delay: 350,
			});
			anime({
				targets:paint3,	        
				bottom:'-100%',
				duration: 2000,
				easing: 'easeOutElastic',
				delay: 450,
			});
		});


		//Fourth animation °°°°°°°°
		watcher4.enterViewport(function() {
			anime.remove(".code");
			anime({
				targets:code1,	        
				bottom:'0%',
				duration: 3000,
				easing: 'easeOutElastic',
				delay: 250,
			});
			anime({
				targets:code2,	        
				bottom:'0%',
				duration: 2500,
				easing: 'easeOutElastic',
				delay: 350,
			});
			anime({
				targets:code3,	        
				bottom:'0%',
				duration: 2500,
				easing: 'easeOutElastic',
				delay: 450,
			});
		});
		watcher4.exitViewport(function() {
			anime.remove(".code");
			anime({
				targets:code1,	        
				bottom:'-100%',
				duration: 2000,
				easing: 'easeOutElastic',
				delay: 250,
			});
			anime({
				targets:code2,	        
				bottom:'-100%',
				duration: 2000,
				easing: 'easeOutElastic',
				delay: 350,
			});
			anime({
				targets:code3,	        
				bottom:'-100%',
				duration: 2000,
				easing: 'easeOutElastic',
				delay: 450,
			});
		});


		//Fourth animation °°°°°°°°
		watcher5.enterViewport(function() {
			anime.remove(".shape");
			anime({
				targets:shape1,	        
				bottom:'0%',
				duration: 3000,
				easing: 'easeOutElastic',
				delay: 250,
			});
			anime({
				targets:shape2,	        
				bottom:'0%',
				duration: 2500,
				easing: 'easeOutElastic',
				delay: 350,
			});
			anime({
				targets:shape3,	        
				bottom:'0%',
				duration: 2500,
				easing: 'easeOutElastic',
				delay: 450,
			});
		});
		watcher5.exitViewport(function() {
			anime.remove(".shape");
			anime({
				targets:shape1,	        
				bottom:'-100%',
				duration: 2000,
				easing: 'easeOutElastic',
				delay: 250,
			});
			anime({
				targets:shape2,	        
				bottom:'-100%',
				duration: 2000,
				easing: 'easeOutElastic',
				delay: 350,
			});
			anime({
				targets:shape3,	        
				bottom:'-100%',
				duration: 2000,
				easing: 'easeOutElastic',
				delay: 450,
			});
		});

		



	}

// initialization
//°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°
const init = function() {
    //createScrollAnimation();
    watcherAnimation();
}
init();
};