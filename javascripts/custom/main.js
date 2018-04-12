// MAIN.JS
//--------------------------------------------------------------------------------------------------------------------------------
//This is main JS file that contains custom JS scipts and initialization used in this template*/
// -------------------------------------------------------------------------------------------------------------------------------
// Author: Fabcode Designs.
// Version 1.0 - Initial Release
// Website: http://www.fabcode.net
// Copyright: (C) 2016
// -------------------------------------------------------------------------------------------------------------------------------

/*global $:false */
/*global window: false */


    // All the lines of codes must be inside this function. Actually this function is documentready 
    (function() {
        "use strict";

        //Vieport height and width calculation
	    var vH = $(window).height();

        var vW = $(window).width();


        // Page Header Background background-image

        $('.section-bgimg').each(function() {
            var sectionBgImg = $(this).attr('data-sectionBgImg');
            $(this).css('background-image','url('+sectionBgImg+')');
        });

        
        $(window).on('load',function() {


            // Owl Carousel (theme carousel) Single Initialization

            $('.theme-carousel').each(function() {
                var themeCarousel = $(this);

                themeCarousel.owlCarousel({
                    animateOut: $(this).data('animateout'),
                    animateIn: $(this).data('animatein'),
                    autoplay: $(this).data('autoplay'),
                    autoplayTimeout: $(this).data('autoplaytimeout'),
                    autoplayHoverPause: $(this).data('autoplayhoverpause'),
                    autoHeight: $(this).data('autoheight'),
                    center : $(this).data('center'),
                    loop : $(this).data('loop'),
                    items : $(this).data('itemsdefault'),
                    margin:$(this).data('margin'),
                    stagePadding:$(this).data('stagepadding'),
                    startPosition:$(this).data('startposition'),
                    slideBy:$(this).data('slideby'),
                    nav : $(this).data('nav'),
                    navText : [
                            "<i class='ion-chevron-left'></i>",
                            "<i class='ion-chevron-right'></i>"
                    ],
                    dots: $(this).data('dots'),
                    touchDrag:$(this).data('touchdrag'),
                    mouseDrag:$(this).data('mousedrag'),
                    responsive:{
                      0:{
                          items:1
                      },
                      361:{
                          items: themeCarousel.data('xsnumber')
                      },
                      768:{
                          items: themeCarousel.data('smnumber')
                      },
                      1025:{
                          items: themeCarousel.data('mdnumber')
                      }
                    }
                });
            });


        });

	})();    