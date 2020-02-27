function eventsCarouselInit() {
      //$(function() {
            //$("#events-carousel").owlCarousel();
            /* $("#events-carousel").owlCarousel({
                  slideSpeed : 300,
                  paginationSpeed : 400,
                  singleItem:true
            }); */
            //$("#events-speakers").owlCarousel();
            /* $("#events-speakers").owlCarousel({
                  slideSpeed : 300,
                  paginationSpeed : 400,
                  singleItem:true
            }); */
            if ( $(".events-tns").length > 0 ) {
                  var eventsSlider = tns({
                        container: ".events-tns",
                        items: 1,
                        mouseDrag: true,
                        slideBy: "page",
                        swipeAngle: false,
                        speed: 500,
                        nav: true,
                        navPosition: "bottom",
                        navAsThumbnails: false
                  });
            }

            if ( $(".speakers-tns").length > 0 ) {
                  var speakerSlider = tns({
                        container: ".speakers-tns",
                        items: 1,
                        mouseDrag: true,
                        slideBy: "page",
                        swipeAngle: false,
                        speed: 500,
                        nav: true,
                        navPosition: "bottom",
                        navAsThumbnails: false
                  });
            }
      //});
}