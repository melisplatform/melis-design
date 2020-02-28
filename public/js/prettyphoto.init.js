function prettyPhotoInit() {
	(function($) {
		/* if ($('[data-toggle="prettyPhoto"]').length)
			$('[data-toggle="prettyPhoto"]').prettyPhoto(); */
		
		if ( $("a[rel^='prettyPhoto']").length )
			$("a[rel^='prettyPhoto']").prettyPhoto();

		$("body").on("click", "a[rel^='prettyPhoto']", function(e) {
			e.preventDefault();
			$("a[rel^='prettyPhoto']").prettyPhoto();
		});
	})(jQuery);	
}
