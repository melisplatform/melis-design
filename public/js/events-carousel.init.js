function eventsCarouselInit() {
    (function($)
      {
            $("#events-carousel").owlCarousel({
                  slideSpeed : 300,
                  paginationSpeed : 400,
                  singleItem:true
            });

            $("#events-speakers").owlCarousel({
                  slideSpeed : 300,
                  paginationSpeed : 400,
                  singleItem:true
            });

      })(jQuery);
}
