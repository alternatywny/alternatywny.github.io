

$(function() {
	if($(window).width() > 768){
		
		//cache the window object
		var $window = $(window);
		
		//parallax background effect
		$('section[data-type="background"]').each(function() {
			
			var $bgobj = $(this); //assigning the object
			
			
				$window.scroll(function() {
					
					//scroll the background at var speed
					//the yPos is negative value because we're scrolling it UP!
					var yPos = -($window.scrollTop() / $bgobj.data('speed'));
					
					//Put together our final background position
					var coords = '50% '+ yPos + 'px';
					
					//Move the background$bgobj.css
					$bgobj.css({ backgroundPosition: coords });
				})
			
		})	
	}
});

