function gridaliciousInit() {
	(function($) {
		$('[data-toggle*="gridalicious"]').each(function() {
			var $that = $(this);
			
				$that.removeClass('hide2');

				$that.gridalicious({
					gutter: $that.attr('data-gridalicious-gutter') || 13, 
					width: $that.attr('data-gridalicious-width') ? parseInt($that.attr('data-gridalicious-width')) : 200,
					animate: true,
					selector: '.widget'
				});
		});
	})(jQuery);
}