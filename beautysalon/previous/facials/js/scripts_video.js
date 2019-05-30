$(window).load(function() {
	"use strict";
    /* ==============================================
    PRELOADER
    =============================================== */
    var preloaderDelay = 500;
    var preloaderFadeOutTime = 800;

    function hidePreloader() {
        var loadingAnimation = $('#loading-animation');
        var preloader = $('#preloader');

        loadingAnimation.fadeOut();
        preloader.delay(preloaderDelay).fadeOut(preloaderFadeOutTime, function() {
        	$('#logo').addClass('animated fadeInDown');
        	$('.intro').addClass('animated flipInX');
        	$('.timerContent').addClass('animated fadeInUp');
        	$('.menu').addClass('animated bounceIn');
        	$('.footer-social').addClass('animated fadeInUp');
        	$('#cookies-message').addClass('animated fadeInUp');
        	setTimeout ( function () {
        		$('link[rel=stylesheet][href~="css/animate.css"]').remove();
    		},2000);
         });   
    }

    hidePreloader();
    
    function startPage() {
		
	} /*  End animation section home  */

});

$(document).ready(function(){
	"use strict";
	
	/* ==============================================
    DIV's POSITION
    =============================================== */
	
	var windowHeight = $(window).height();
	var homePageHeight = $('#home').height();
	
	if (windowHeight >= homePageHeight){
		$('#home').css("padding-top", (((windowHeight-homePageHeight)/2))-130);
		$('#home').css("padding-bottom", (((windowHeight-homePageHeight)/2))-130);
	}

	$(window).resize(function() {		
		var windowHeight = $(window).height();
		var homePageHeight = $('#home').height();

		if (windowHeight >= homePageHeight){
			$('#home').css("padding-top", ((windowHeight-homePageHeight)/2));
			$('#home').css("padding-bottom", ((windowHeight-homePageHeight)/2));
		}
	});
	
	/* ==============================================
    DETECT THE BROWSER TO LOAD STYLESHEET FOR IE
    =============================================== */
	if (navigator.userAgent.search("MSIE") >= 0) {
		$('head').append('<link rel="stylesheet" type="text/css" media="screen" href="css/ie.css">');
	}
	
	/* ==============================================
    LOAD THE ANIMATIONS IF THE BROWSER IS NOT IE
	================================================== */	
	if( !device.tablet() && !device.mobile() ) { //Load the animations if the device is not a mobile or tablet
		$('head').append('<!--[if !IE]><!--><link rel="stylesheet" type="text/css" media="screen" href="css/animate.css"><!--<![endif]-->');
	}
	
    /* ==============================================
    /* CLOSE COOKIES MESSAGE
	================================================== */
	$(".close-cookies").click(function() {
		$('#cookies-message').fadeOut();
	});
	
	/* ==============================================
    COUNTDOWN
    =============================================== */
	
	countDownCircular();
	
	function countDownCircular() {
		$("#DateCountdown").TimeCircles({
		    "animation": "smooth",
		    "bg_width": 0.2,
		    "fg_width": 0.016666666666666666,
		    "circle_bg_color": "#fff",
		    "time": {
		        "Days": {
		            "text": "days",
		            "color": "#fff",
		            "show": true
		        },
		        "Hours": {
		            "text": "hours",
		            "color": "#fff",
		            "show": true
		        },
		        "Minutes": {
		            "text": "minutes",
		            "color": "#fff",
		            "show": true
		        },
		        "Seconds": {
		            "text": "seconds",
		            "color": "#fff",
		            "show": true
		        }
		    }
		});
	};
	
	$(window).resize(function() {		
		$("#DateCountdown").TimeCircles().rebuild();
	});

	/* ==============================================
	/*	SUSCRIPTION AND CONTACT PANEL
	=============================================== */
	
	var docElem = window.document.documentElement, didScroll, scrollPosition;

	// trick to prevent scrolling when opening/closing button
	function noScrollFn() {
		window.scrollTo( scrollPosition ? scrollPosition.x : 0, scrollPosition ? scrollPosition.y : 0 );
	}

	function noScroll() {
		window.removeEventListener( 'scroll', scrollHandler );
		window.addEventListener( 'scroll', noScrollFn );
	}

	function scrollFn() {
		window.addEventListener( 'scroll', scrollHandler );
	}

	function canScroll() {
		window.removeEventListener( 'scroll', noScrollFn );
		scrollFn();
	}

	function scrollHandler() {
		if( !didScroll ) {
			didScroll = true;
			setTimeout( function() { scrollPage(); }, 60 );
		}
	};

	function scrollPage() {
		scrollPosition = { x : window.pageXOffset || docElem.scrollLeft, y : window.pageYOffset || docElem.scrollTop };
		didScroll = false;
	};

	scrollFn();

	[].slice.call( document.querySelectorAll( '.morph-button' ) ).forEach( function( bttn ) {
		new UIMorphingButton( bttn, {
			closeEl : '.button-close',
			onBeforeOpen : function() {
				// don't allow to scroll
				noScroll();
			},
			onAfterOpen : function() {
				// can scroll again
				canScroll();
			},
			onBeforeClose : function() {
				// don't allow to scroll
				noScroll();
			},
			onAfterClose : function() {
				// can scroll again
				canScroll();
			}
		} );
	} );
	
	/* ---------------------------------------------------------------------- */
	/*	SUSCRIPTION FORM MAILCHIMP
	/* ---------------------------------------------------------------------- */
	    
	var urlForm = 'http://creabox.us7.list-manage.com/subscribe/post';
	var u = 'a9b585106dde1e10e02b6aab4';
	var id = '0183be9d57';

    $('#mc-form').ajaxChimp({
    	url: urlForm+'?u='+u+'&amp;id='+id
	});
	
    /* ==============================================
	/*	CONTACT FORM
	=============================================== */
	
    $('.success-message-2').hide();
    $('.error-message-2').hide();
    
	var $contactform 	= $('#contactform'),
		$success		= 'Your message has been sent. Thank you!';
		
	$contactform.submit(function(){
		$.ajax({
		   type: "POST",
		   url: "php/contact.php",
		   data: $(this).serialize(),
		   success: function(msg)
		   {
				if(msg == 'SEND'){
					$('.error-message-2').hide();
                    $('.success-message-2').hide();
                    $contactform.hide().delay(3000).fadeIn();
                    $('#contactform input').val('');
                    $('#contactform textarea').val('');
                    $('.success-message-2').html('<div class="success-message-2">'+ $success +'</div>');
                    $('.success-message-2').fadeIn().delay(2000).fadeOut();
				}
				else{
					$('.success-message-2').hide();
                    $('.error-message-2').hide();
                    $('.error-message-2').html('<div class="error-message-2">'+ msg +'</div>');
                    $('.error-message-2').fadeIn().delay(3000).fadeOut();
				}
			}
		 });
		return false;
	});	


	/* ---------------------------------------------------------------------- */
	/*  TOOLTIP
	/* ---------------------------------------------------------------------- */
	
	$('.footer-social li a').tooltip();
	
	
});