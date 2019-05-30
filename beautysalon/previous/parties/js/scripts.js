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
		$('#home').css("padding-top", (((windowHeight-homePageHeight)/2)-40));
		$('#home').css("padding-bottom", (((windowHeight-homePageHeight)/2)-40));
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
    COUNTDOWN DEFAULT
    =============================================== */
	var now = new Date();
	var dateFinal = new Date('2015','00','01','00','00','00'); // new Date( year , month , day , hour , minutes , seconds)
	var difference = dateFinal - now; //fix a gap of 30 days
	var countTo = difference + now.valueOf();
	$('.timer').countdown(countTo, function(event) {
		var $this = $(this);
		switch(event.type) {
			case "seconds":
			case "minutes":
			case "hours":
			case "days":
			case "weeks":
			case "daysLeft":
				//$this.find('span.'+event.type).html(event.value+' '+event.type);
				$this.find('span.'+event.type).html(event.value);
				break;
			case "finished":
				$this.fadeOut();
				setTimeout ( function () { //if you want add a text
					$this.text("The countdown is ended!");
					$this.fadeIn();
				},1500 );
				break;
		}
		
	if ( ($('.days').html()) == 1 ){
		$('.daysText').text(" day ");
	}else{
		$('.daysText').text(" days ");
	}
	
	if ( ($('.hours').html()) == 1 ){
		$('.hoursText').text(" hour ");
	}else{
		$('.hoursText').text(" hours ");
	}
	
	if ( ($('.minutes').html()) == 1 ){
		$('.minutesText').text(" minute ");
	}else{
		$('.minutesText').text(" minutes ");
	}
	
	if ( ($('.seconds').html()) == 1 ){
		$('.secondsText').text(" second ");
	}else{
		$('.secondsText').text(" seconds ");
	}
	
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

	/* ==============================================
	/*	SUSCRIPTION FORM
	=============================================== */

    $('.success-message').hide();
    $('.error-message').hide();

    $('.subscribe form').submit(function() {
        var postdata = $('.subscribe form').serialize();
        $.ajax({
            type: 'POST',
            url: 'php/sendmail.php',
            data: postdata,
            dataType: 'json',
            success: function(json) {
                if(json.valid == 0) {
                    $('.success-message').hide();
                    $('.error-message').hide();
                    $('.error-message').html(json.message);
                    $('.error-message').fadeIn().delay(3000).fadeOut();
                }
                else {
                    $('.error-message').hide();
                    $('.success-message').hide();
                    $('.subscribe form').hide().delay(3000).fadeIn();
                    $('.subscribe form input').val('');
                    $('.success-message').html(json.message);
                    $('.success-message').fadeIn().delay(2000).fadeOut();
                }
            }
        });
        return false;
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