(function () {
	"use strict";
	
	//scrollspy menu
	$('body').scrollspy({
		target: '.nav_wrapper',
		offset: 81
	});
	
	//mobile  menu
	$('.mobile_menu').slicknav();
	
	//head slider js
	$('#slid_item').skdslider({
		'delay': 5000,
		'animationSpeed': 2000,
		'showNextPrev': false,
		'showPlayButton': false,
		'autoSlide': true,
		'animationType': 'fading'
	});
	
	//nave top js
	var nav_navbar = $('nav.navbar'),
		navOffset = nav_navbar.offset().top;

	nav_navbar.wrap('<div class="nav-wrapper"></div>');
	$('.nav-wrapper').height(nav_navbar.outerHeight());
	
	
	//modal
	$("#myModal").on('hidden.bs.modal', function (e) {
	 	$("#myModal iframe").attr("src", $("#myModal iframe").attr("src"));
	});
	

	// USER FEEDBACK js
	$('.slider-for').slick({
	  slidesToShow: 1,
	  slidesToScroll: 1,
	  arrows: false,
	  fade: true,
	  asNavFor: '.slider_item'
	});
	$('.slider_item').slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		asNavFor: '.slider-for',
		dots: true,
		autoplay:true,
		centerPadding:0,
		centerMode: true,
		arrows:false,
		centerMode:true,
		focusOnSelect: true,
		responsive: [
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					autoplay:true,
					infinity:true,
					dots: true,
					slidesToScroll: 1
				}
			}
		]
	});
	
	//awesometeam js
	$('.awesometeam_slider').slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		centerPadding:0,
		dots: false,
		centerMode: true,
		arrows:false,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 1,
					infinite: true,
					dots: false
				}
			},
			{
				breakpoint: 991,
				settings: {
					slidesToShow: 2,
					autoplay:true,
					infinity:true,
					slidesToScroll: 1
				}
			},
			{
				breakpoint: 767,
				settings: {
					slidesToShow: 2,
					autoplay:true,
					infinity:true,
					dots: true,
					slidesToScroll: 1
				}
			},
			{
				breakpoint: 481,
				settings: {
					slidesToShow: 1,
					autoplay:true,
					infinity:true,
					dots: true,
					slidesToScroll: 1
				}
			}
		]
	});
	
	
	//awesometeam js
	$('.screenshot_slider').slick({
		slidesToShow: 5,
		slidesToScroll: 1,
		centerPadding:0,
		dots: true,
		centerMode: true,
		arrows:false,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 1,
					infinite: true,
					dots: false
				}
			},
			{
				breakpoint: 991,
				settings: {
					slidesToShow: 3,
					autoplay:true,
					infinity:true,
					slidesToScroll: 1
				}
			},
			{
				breakpoint: 767,
				settings: {
					slidesToShow: 2,
					autoplay:true,
					infinity:true,
					dots: true,
					slidesToScroll: 1
				}
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					autoplay:true,
					infinity:true,
					dots: true,
					slidesToScroll: 1
				}
			}
		]
	});
	
	//animation scroll js
	//a[href*="#"]:not([href="#"])
	var html_body = $('html, body');
    $('#appon_nav > ul > li a').on('click', function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                html_body.animate({
                    scrollTop: target.offset().top - 65
                }, 1000);
                return false;
            }
        }
    });
	
	// this is for back to top
	var bc2top = $('.bc2top');
	bc2top.on('click', function() {
		html_body.animate({
			scrollTop:0
		}, 500);
	});
	
	
	$(window).on('scroll', function(){
		var scrollPos = $(this).scrollTop(),
			navbar_right = $('.navbar-right');
		if( scrollPos >= navOffset ){
			nav_navbar.addClass('navbar-fixed-top');
			navbar_right.css('margin-right', '0');
		}else{
			nav_navbar.removeClass('navbar-fixed-top');
			navbar_right.css('margin-right', '-15px');
		}
		
		if(scrollPos > 150){
			bc2top.fadeIn(1000);
		}
		else{
			bc2top.fadeOut(1000);
		}
	});
	
})(jQuery);