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



        // Delay Variables
        
        var segmentTextdelayValueInit = 1000;
        var segmentTextdelayOut = 1000;
        var linerdelayValueInit = 1000;
        var desctextInit = 1000;
        var descTextOut = 100;
        var descTextIn = 2000;
        var descTextInactive = 100;
        var linerdelayOut = 100;
        var linerdelayIn = 3800; 

        
        $(window).on('load',function() {

            setTimeout(function () {
                // Home Liner Initialization 
                
                $('.home-carousel').find('.content-block-text .liner').css('transition-delay', linerdelayValueInit+'ms');

                homeOwl();
            },1500);

            function homeOwl() {
                // Owl Carousel (home carousel) Single Initialization

                $('.home-carousel').each(function() {
                    var homeCarousel = $(this);

                    homeCarousel.owlCarousel({
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
                            items: homeCarousel.data('xsnumber')
                        },
                        768:{
                            items: homeCarousel.data('smnumber')
                        },
                        1025:{
                            items: homeCarousel.data('mdnumber')
                        }
                        }
                    });

                    // Home Content Block Description
                    $('.home-carousel .content-block-text').each(function() {
                        var contentBlkWdth = $(this).find('.descript').width();
                        $(this).find('.descript span').width(contentBlkWdth);
                        $(this).find('p').width(0);
                    });

                    $('.home-carousel .owl-item.active .content-block-text .descript').css({
                        'transition-delay':desctextInit+'ms',
                        'width':'100%'
                    });   

                    homeCarousel.on('translate.owl.carousel', function(event) {
                
                        
                        homeCarousel.find('.owl-item').each(function() {   
                            var segmentTextdelayValue = 2300;             
                            $(this).find('.segment-text').each(function(){
                                $(this).css('transition-delay', segmentTextdelayValue+'ms');
                                segmentTextdelayValue = segmentTextdelayValue + 200;
                            });

            
                            $(this).find('.content-block-text .liner').css('transition-delay', linerdelayIn+'ms');

                            $(this).find('.content-block-text .descript').css({
                                'transition-delay':descTextIn+'ms',
                                'width':'100%'
                            });

                        });

                        homeCarousel.find('.owl-item.active .segment-text').each(function() {              
                            $(this).css('transition-delay', segmentTextdelayOut+'ms');
                        });

                        homeCarousel.find('.owl-item.active .content-block-text .liner').each(function() {              
                            $(this).css('transition-delay', linerdelayOut+'ms');
                        });

                        homeCarousel.find('.owl-item.active .content-block-text .descript').css({
                            'transition-delay':descTextOut+'ms',
                            'opacity':'0'
                        });

                        
                    });

                    homeCarousel.on('translated.owl.carousel', function(event) {
                        homeCarousel.find('.owl-item .content-block-text .descript').css({
                            'width':'0%',
                            'opacity':'1',
                            'transition-delay':descTextInactive+'ms'
                        });
                        homeCarousel.find('.owl-item.active .content-block-text .descript').css({
                            'width':'100%',
                            'transition-delay':descTextIn+'ms'
                        });
                    });    

                });

                 // Ripple Effect
                try {
                    $('.content-block-image-section').ripples({
                    resolution: 512,
                    dropRadius: 20, //px
                    perturbance: 0.02,
                    });
                    
                    }
                    catch (e) {
                        return false;
                    }    
                    
                    

                    

            }

            

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


           

            // Parallaxify
            $('.parallaxify').plaxify()
            $.plax.enable();

            heroSliderContentGrinding();
            function heroSliderContentGrinding(){
                $('.sliding-text h2').each(function(){
                    var textContent = $(this).html();
                    var modifiedMarkup = '';
        
                    var textContentSegments = textContent.split(' ');
                    var textLength = textContentSegments.length;
                    for(var i = 0; i< textLength; i++)
                    {
                        if($.trim(textContentSegments[i]) == '<br>' || $.trim(textContentSegments[i]) == '<br/>')
                            modifiedMarkup += '<br>';
                        else
                            modifiedMarkup += '<span class="segment-wrap"><span class="segment-text">'+textContentSegments[i]+'</span></span> ';
                            
                    }
                    $(this).html(modifiedMarkup);
                    var thisElement = $(this);
        
                    setTimeout(function(){
                        setTransitionDelay(thisElement);
                    },500);
                    
                });
            }
        
            function setTransitionDelay(thisElement){
        
                
                thisElement.find('.segment-text').each(function(){
        
                    $(this).css('transition-delay', segmentTextdelayValueInit+'ms');
                    segmentTextdelayValueInit = segmentTextdelayValueInit + 100;
                });

            }

            



        });

	})();    