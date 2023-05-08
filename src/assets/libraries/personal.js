// funzione per prendere altezza e larghezza in maniera dinamica e al caricamento della pagina
$(window).load(function(){
  
  /*$('.sfondo').css({
      height: $(window).height()
  });*/
  var menuh = $(window).height() - $(".navwrap").height();

  $('.comp').css({
      height: $('.comp').width()
  });
  $('.ctit').css({
      height: $('.comp').width()
  });
  $('.fullh').css({
      height: $(window).height(),
      top: menuh
  });


  $(window).resize(function() {
    /*$('.sfondo').css({
      height: $(window).height()
    });*/

    $('.comp').css({
      height: $('.comp').width()
  	});
  	$('.ctit').css({
      height: $('.comp').width()
  	});
  	$('.fullh').css({
      height: $(window).height(),
      top: menuh
  	});
  });

  


	// funzione animare il menù
	var full = $(".sfondo").width();
	var mytl = new TimelineMax();
	mytl.pause(0);
	mytl.from(".listamenu", 0.1, { marginTop:-320},0)
	.to(".listamenu", 0.1, { marginTop:0}, 0)	
	.to(".listamenu", 0.1, { paddingTop:30, paddingBottom:30}, 0)
	.to(".navwrap",0.4, { left:0})
	.to("#voce1", 0.2, { opacity:1}, "=-0.1")
	.to("#voce2", 0.2, { opacity:1}, "=-0.1")
	.to("#voce3", 0.2, { opacity:1}, "=-0.1")
	.to("#voce4", 0.2, { opacity:1}, "=-0.1")
	.to("#voce5", 0.2, { opacity:1}, "=-0.1")
	.to("#voce6", 0.2, { opacity:1}, "=-0.1");

	var menu= document.querySelector( ".menu" );
	var menuItem= menu.querySelectorAll("div");

	var tl4= new TimelineMax({autoStart: false});
	tl4.pause(0);
	tl4.add(TweenMax.to(menu, .4, {rotation: 90, ease: "Power4.easeInOut"}));
	tl4.add(TweenMax.to(menuItem[0], .2, {y: 10, ease: "Back.easeInOut"}));
	tl4.add(TweenMax.to(menuItem[2], .2, {y: -10, ease: "Back.easeInOut"}), "-=.2");
	tl4.add(TweenMax.to([menuItem[0], menuItem[1]], .2, {rotation: 45}));
	tl4.add(TweenMax.to(menuItem[2], .2, {rotation: -45}), "-=.2");
/*--
	menu.addEventListener( "click", function() {
	  this.classList.toggle( "active" );
	  if(menu.classList.contains("active")){
	    tl4.reverse();
	  }else{
	    tl4.play();
	  }
	});
	--*/




		var clicked = false;
	$('#menufull').click(function() {
	   if(clicked){
	        mytl.reverse();
	        tl4.reverse();
	   }else{
	        mytl.play();
	        tl4.play();
	   }
	   clicked = !clicked;
	});

	// ------------------ funzione per aprire le caption

	open = new TimelineMax();
	open.pause(0);
	open.to(".captiondesc",0.3, {opacity:1, scaleX:1, scaleY:1,})
	.to(".ctext", 0.3, {opacity: 1});

	
	$( '.open' ).click(function(){
		var recupero_id = $(this).attr("id");
		var captionid = "#c"+ recupero_id;
		$( captionid).css({display:"block"});
		$( '.captiondesc' ).css({display:"block"});
		$( '.caption' ).css({display: "block"});
		open.play();

		$( '.caption' ).click(function(){
			var captionid = "#c"+ recupero_id;
			$( captionid).css({display:"none"});
			$( '.captiondesc' ).css({display:"none"});
			$( '.caption' ).css({display: "none"});
			open.reverse();
		});


	});

	// ------------------ funzione animare i pulsanti
	$( window ).on( "scroll", function() {
		var currentTop = $( this ).scrollTop(),
		elementTop = $( ".appare" ).offset().top;

		if( currentTop >= elementTop - 500 ) {
		  $( ".appare" ).addClass("compare");
		}



		elementTop2 = $( ".bigtit" ).offset().top;
		if( currentTop >= elementTop2 - 500 ) {
		  $( ".bigtit" ).addClass("compare2");
		}

		word = new TimelineMax();
		word.pause(0);
		word.to(".p1",1, {opacity:1,})
		.to(".p2",0.7, {opacity:1,})
		.to(".p3",0.7, {opacity:1,})
		.to(".p4",0.7, {opacity:1,})
		.to(".p5",0.7, {opacity:1,})
		.to(".p6",0.7, {opacity:1,})
		.to(".p7", 0.7, {opacity: 1,})
		.to(".appare2",0.5, {opacity:1,})
		.to(".contattami",0.5, {opacity:1,});

		parole = $( ".fare" ).offset().top;
		if( currentTop >= parole -500) {
		  word.play();
		}





	});




	// animazione controllata da scroll
	
	tl = new TimelineLite({paused:true, onUpdate:timelineIsUpdating});
	tl.to("#prova",2, { width: 300})
	.to("#prova", 2, {height: 300});

	tl2 = new TimelineLite({paused:true, onUpdate:timelineIsUpdating});
	tl2.to(".titolo",2, { opacity:0})
	.to(".sottotitolo", 2, {opacity:0});

	$( window ).on( "scroll", function(e) {
		

		var scrollTop = $(window).scrollTop();
		var docHeight = $(document).height();
		var winHeight = $(window).height();
		var scrollPercent = (scrollTop) / (docHeight - winHeight);
		var scrollPercentRounded = Math.round(scrollPercent*100)/100;

		tl.progress( scrollPercent ).pause();
		tl2.progress( scrollPercent ).pause();

		$(".nastro1").css({
			top: -scrollPercent*5000
		});
		$(".nastro2").css({
			top: -scrollPercent*10000
		});
		$(".nastro3").css({
			top: -scrollPercent*20000
		});


			

	});

	function timelineIsUpdating() {
		console.log('timelineIsUpdating()');
	}


	// ------------------ funzione pper creare classe 100%

	var viewportW= $(window).width();
	$('.fullW').css({
	      width: viewportW
  	});
	$(window).resize(function() {
	    $('.fullW').css({
	      width: viewportW
	  	});
  	});
	


});

