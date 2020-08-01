$(document).ready(function(){
    "use strict";
    
   // Nav
	
	$("#nav-Narafi").click(function(){
		$("#Narafi").show();
		$("#Viso").hide();
        return false;
	});
	
	$("#nav-Viso").click(function(){
		$("#Viso").show();
		$("#Narafi").hide();
        return false;
	});
	
});

// Smooth Scroll
	
//$(function() {
//	$('a[href*="#"]:not([href="#"])').click(function() {
//	if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
//	  var target = $(this.hash);
//	  target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
//	  if (target.length) {
//	    $('html, body').animate({
//	      scrollTop: target.offset().top
//	    }, 1000);
//	    return false;
//	  }
//	}
//	});
//});