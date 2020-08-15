$(document).ready(function(){
    "use strict";
    
	// Nav
	
	$("#nav-Narafi").click(function(){
		$("#Viso").fadeOut( 300 ).delay( 1500 );
		$("#Narafi").fadeIn( 300 );
	});
	
	$("#nav-Viso").click(function(){
		$("#Narafi").fadeOut( 300 ).delay( 1500 );
		$("#Viso").fadeIn( 300 );
	});

	$(".container").fitVids();

	


	// Nav wizz

	$(window).scroll(function () {
	      //if you hard code, then use console
	      //.log to determine when you want the 
	      //nav bar to stick.  
	      console.log($(window).scrollTop())
	    if ($(window).scrollTop() > 280) {
	      $('nav').addClass('navbar-fixed');
	    }
	    if ($(window).scrollTop() < 281) {
	      $('nav').removeClass('navbar-fixed');
	    }
	  });

	



	// Smooth Scroll
		
	$(function() {
		$('a[href*="#"]:not([href="#"])').click(function() {
		if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
		  var target = $(this.hash);
		  target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
		  if (target.length) {
		    $('html, body').animate({
		      scrollTop: target.offset().top
		    }, 450);
		    return false;
		  }
		}
		});
	});


});