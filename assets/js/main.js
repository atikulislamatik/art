jQuery(function ($) {
    'use strict';
    // Preloader
    $(window).ready(function() {
        $(".preloader").fadeOut(1200);
    });
    
    // Sticky Nav2
    $(document).on("scroll", function() {
        if ($(document).scrollTop() > 0) {
            $(".mobile-nav").addClass("is-sticky ");
        } else {
            $(".mobile-nav").removeClass("is-sticky ");
        }
    });

    // Mean Menu
    jQuery('.mean-menu').meanmenu({
        meanScreenWidth: "991"
    });

    // Wow  JS
    new WOW({
        offset: 100,
        mobile: true
    }).init();

    // Popup Video
    $('.popup-youtube').magnificPopup({
        disableOn: 320,
        type: 'iframe',
        mainClass: 'mfp-fade',
        removalDelay: 160,
        preloader: false,
        fixedContentPos: false
    });

	// Scroll Event
	$(window).on('scroll', function(){
		var scrolled = $(window).scrollTop();
		if (scrolled > 300) $('.go-top').addClass('active');
		if (scrolled < 300) $('.go-top').removeClass('active');
	});  

	// Click Event
	$('.go-top').on('click', function() {
		$("html, body").animate({ scrollTop: "0" },  500);
    });


    	// TweenMax JS
	$('.banner-area').mousemove(function(e){
		var wx = $(window).width();
		var wy = $(window).height();
		var x = e.pageX - this.offsetLeft;
		var y = e.pageY - this.offsetTop;
		var newx = x - wx/2;
		var newy = y - wy/2;
		$('.banner-img img:nth-child(1), .banner-img img:nth-child(3), .banner-img img:nth-child(5), .banner-img img:nth-child(7), .banner-img img:nth-child(9), .banner-img img:nth-child(11), .banner-img').each(function(){
			var speed = $(this).attr('data-speed');
			if($(this).attr('data-revert')) speed *= -.7;
			TweenMax.to($(this), 1, {x: (1 - newx*speed), y: (1 - newy*speed)});
		});
	});
	$('.banner-area').mousemove(function(e){
		var wy = $(window).width();
		var wx = $(window).height();
		var y = e.pageY - this.offsetLeft;
		var x = e.pageX - this.offsetTop;
		var newy = y - wy/2;
		var newx = x - wx/2;
		$('.banner-img img:nth-child(1), .banner-img img:nth-child(3), .banner-img img:nth-child(5), .banner-img img:nth-child(7), .banner-img img:nth-child(9), .banner-img img:nth-child(11), .banner-img').each(function(){
			var speed = $(this).attr('data-speed');
			if($(this).attr('data-revert')) speed *= -.7;
			TweenMax.to($(this), 1, {x: (1 - newx*speed), y: (1 - newy*speed)});
		});
    });

    $('.course-area').mousemove(function(e){
		var wx = $(window).width();
		var wy = $(window).height();
		var x = e.pageX - this.offsetLeft;
		var y = e.pageY - this.offsetTop;
		var newx = x - wx/2;
		var newy = y - wy/2;
		$('.mask-shape , .mask-wave').each(function(){
			var speed = $(this).attr('data-speed');
			if($(this).attr('data-revert')) speed *= -0.5;
			TweenMax.to($(this), 1, {x: (1 - newx*speed), y: (1 - newy*speed)});
		});
    });
    $('.contact-area').mousemove(function(e){
		var wx = $(window).width();
		var wy = $(window).height();
		var x = e.pageX - this.offsetLeft;
		var y = e.pageY - this.offsetTop;
		var newx = x - wx/2;
		var newy = y - wy/2;
		$('.mask-wave , .round-shape').each(function(){
			var speed = $(this).attr('data-speed');
			if($(this).attr('data-revert')) speed *= -0.5;
			TweenMax.to($(this), 1, {x: (1 - newx*speed), y: (1 - newy*speed)});
		});
	});
    
    var kursorx = new kursor({
        type: 3,
        color: '#ff7e6f',
        removeDefaultCursor: true

    });



}(jQuery));
