$(document).ready(function(){
    "use strict";
    
	// Nav
	
	$("#nav-Narafi").click(function(){
		$("#Narafi").show();
    	//$("#Narafi").fadeIn(1000);
		$("#Viso").hide();
	});
	
	$("#nav-Viso").click(function(){
		$("#Viso").show();
		$("#Narafi").hide();
	});

	$(".container").fitVids();

	


	// Nav wizz

	$(window).scroll(function () {
	      //if you hard code, then use console
	      //.log to determine when you want the 
	      //nav bar to stick.  
	      console.log($(window).scrollTop())
	    if ($(window).scrollTop() > 280) {
	      $('#nav_bar').addClass('navbar-fixed');
	    }
	    if ($(window).scrollTop() < 281) {
	      $('#nav_bar').removeClass('navbar-fixed');
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