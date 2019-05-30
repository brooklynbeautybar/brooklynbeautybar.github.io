if( !device.tablet() && !device.mobile() ) {
	"use strict";
	(function($) {
			// initialize BigVideo
		    var BV = new $.BigVideo();
			BV.init();
			BV.show('vids/brooklynbeautybar.gif',{ambient:true});
		})(jQuery);
				
} else {
	
	$('#bgimg').addClass('poster-image');
	
}




