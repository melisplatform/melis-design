function gridaliciousInit() {
	(function($) {
		$('[data-toggle="gridalicious"]').each(function() {
			var $that = $(this);
			
				$that.removeClass('hide2');

				$that.gridalicious({
					gutter:13, // $that.attr('data-gridalicious-gutter') || 
					width: 200, // $that.attr('data-gridalicious-width') ? parseInt($that.attr('data-gridalicious-width')) : 
					animate: true,
					selector: '.widget'
				});
		});
	})(jQuery);
}