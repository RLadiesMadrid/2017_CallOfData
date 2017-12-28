var $ = jQuery;

/* ------------------------------------
 * LOAD START
 -------------------------------------*/
$(window).load(function() {

    $('img:not(".logo-img, .scroll-down-img, .avatar")').each(function() {
        if (/MSIE (\d+\.\d+);/.test(navigator.userAgent)) {
            var ieversion = new Number(RegExp.$1)
            if (ieversion >= 9)
                if (typeof this.naturalWidth === "undefined" || this.naturalWidth === 0) {
                    this.src = "http://placehold.it/" + ($(this).attr('width') || this.width || $(this).naturalWidth()) + "x" + (this.naturalHeight || $(this).attr('height') || $(this).height());
                }
        } else {
            if (!this.complete || typeof this.naturalWidth === "undefined" || this.naturalWidth === 0) {
                this.src = "http://placehold.it/" + ($(this).attr('width') || this.width) + "x" + ($(this).attr('height') || $(this).height());
            }
        }
    });

    $('body').removeClass('display-h');
    $('.site-footer').removeClass('display-h');

    // Touch device
    if (navigator.userAgent.match(/iPad|iPhone|Android/i)) {
        $('body').addClass('touch-device');
    } else {
        $('body').addClass('no-touch-device');
    }

    $("body").on("click", ".navbar-toggle-close, .navbar-toggle", function() {
        var a = $(".navigation, .navbar-close");
        if (a.hasClass("open")) {
            a.removeClass("open");
            $(".full-height-wrapper > .table > .table-cell > ul > li").removeClass("animated");
        } else {
            a.addClass("open");
            var e = 250;
            $(".full-height-wrapper > .table > .table-cell > ul > li").each(function() {
                var a = $(this);
                e += 100;
                setTimeout(function() {
                    a.addClass("animated");
                }, e);
            });
        }
        return !1;
    });

    // ready
    init();

    // section background
    styleHelper();

    // slider
    slider();


    /* ------------------------------------
     * Menu active item BEGIN
     -------------------------------------*/
    $(document).on('scroll', onScroll);

    onScroll();
    /* ------------------------------------
     * Menu active item END
     -------------------------------------*/

    setTimeout(function() {
        $('body').removeClass('load');
    }, 300);

});
/* ------------------------------------
 * LOAD END
 -------------------------------------*/

/* ------------------------------------
 * READY BEGIN
 -------------------------------------*/
$(document).ready(function() {
    'use strict';

    var $navbarStyle2 = $('.navbar.style2, .navbar-fixed-top');
    menuFixedButton($navbarStyle2);

    $('img.frame').each(function() {
        $(this).wrap("<div class='img-frame'></div>");
        $(this).closest(".img-frame").prepend("<div class='dot'></div><div class='dot'></div><div class='dot'></div>");
    });

    /* ------------------------------------
     * Slick carousel
     -------------------------------------*/

    $('#slider-photos').slick({
        lazyLoad: 'ondemand',
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        useCSS: true,
        cssEase: 'linear',
        swipeToSlide: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    arrows: false,
                    slidesToShow: 1
                }
            }
        ]
    });

    /* ------------------------------------
     * Ajax load page START
     -------------------------------------*/
    $(document).on('pjax:send', function(e) {
        $('body').addClass('load');
    })

    $(document).on('pjax:complete', function(e) {
        var portfolio = false;

        if (e.relatedTarget) {
            var url = $(e.relatedTarget).attr('href'),
                hash = url.substring(url.indexOf('#'));

            if ($(e.relatedTarget).hasClass('work-all')) {
                portfolio = true;
            }
        }

        setTimeout(function() {
            init();
            slider();
            styleHelper();
            carousel();

            $('.navigation li').removeClass('active');
            $('[href="' + url + '"]').parent('li').addClass('active');
            $('[href="' + hash + '"]').parent('li').addClass('active');
        }, 1);

        setTimeout(function() {

            if (portfolio === true) {
                $("html, body").animate({
                    scrollTop: $('.portfolio').position().top
                }, 1);
            } else if (url === hash) {
                $("html, body").animate({
                    scrollTop: 0
                }, 1);
            } else {
                $("html, body").animate({
                    scrollTop: $(hash).position().top
                }, 1);
            }

            setTimeout(function() {
                $('body').removeClass('load');
            }, 200);

        }, 700);
    })

    $(document).pjax('.page-load, .single-page-load', '.wrapper', {
        fragment: '.wrapper'
    });
    /* ------------------------------------
     * Ajax load page END
     -------------------------------------*/

    /* ------------------------------------
     * Navigation scroll START
     -------------------------------------*/
    $('body').on('click', '.navigation a:not(.page-load, .single-page-load, [target="_blank"]), .scrollTo', function() {

        if ($(this).closest('li').hasClass('sub-close')) {
            return false;
        }

        var $navbarStyle2 = $('.navbar-fixed-top');
        menuFixedButton($navbarStyle2);

        $('body').addClass('scrollTo');

        var url = $(this).attr('href'),
            hash = url.substring(url.indexOf('#'));

        window.history.pushState({
            path: url
        }, '', url);

        $('.navigation li').removeClass('active');

        $(this).parent('li').addClass('active');

        $("html, body").animate({
            scrollTop: $(hash).position().top
        }, 1000, function() {
            $('body').removeClass('scrollTo');
            $('.navigation.style-3').removeClass('open');
        });

        return false;
    });
    /* ------------------------------------
     * Navigation scroll END
     -------------------------------------*/

});
/* ------------------------------------
 * READY END
 -------------------------------------*/

/* ------------------------------------
 * RESIZE BEGIN
 -------------------------------------*/
$(window).resize(function() {

    // slider conteiner resize
    $('.slide .display-tc').css({
        width: $(window).width(),
        height: $(window).height()
    });

    // Featured item auto height
    autoHeightFeatured();

    // Set height for home section
    $('.video-bg, .image-bg, .home-text-rotate').css('height', $(window).height());

    // Set height and width for paralax portfolio item
    $('.info-wrapper').css({
        'height': $('.portfolio-item').height(),
        'width': $('.portfolio-item').width()
    });

    // Set not found page height
    $('.not-found').css({
        'height': $(window).height(),
        'width': $(window).width()
    });

});
/* ------------------------------------
 * RESIZE END
 -------------------------------------*/

/* ------------------------------------
 * Ready function Start
 -------------------------------------*/
function init() {

    $('.full-height').css('height', $(window).height());

    if ($.fn.elevateZoom && $('.general-img').length > 0) {
        var image = $('.general-img').find('img'),
            zoomType,
            zoomWidth = 458,
            zoomHeight = 458,
            zoomType = 'window';

        if (($('body').width()) < 992) {
            zoomWidth = 0;
            zoomHeight = 0;
            zoomType = 'inner';
        }

        image.removeData('elevateZoom');
        $('.zoomContainer').remove();

        image.elevateZoom({
            gallery: 'thumblist',
            cursor: 'crosshair',
            galleryActiveClass: 'active',
            zoomWindowWidth: zoomWidth,
            zoomWindowHeight: zoomHeight,
            borderSize: 0,
            borderColor: 'none',
            lensFadeIn: true,
            zoomWindowFadeIn: true,
            zoomType: zoomType
        });
    }

    $('.select-sorting .active').click(function() {
        $(this).closest('.select-sorting').addClass('open');
        return false;
    });

    $('.select-sorting .list li').click(function() {
        $('.select-sorting .active span').text($(this).html());
        $('.select-sorting').removeClass('open');
        return false;
    });

    // slider range
    if ($("#price-range").length > 0) {
        $("#price-range").slider({
            range: true,
            min: $('.price_range_amount').data('min'),
            max: $('.price_range_amount').data('max'),
            values: [$('.price_range_amount').data('current-min'), $('.price_range_amount').data('current-max')],
            slide: function(event, ui) {
                // $( "#amount" ).val( "$" + ui.values[ 0 ] + " - $" + ui.values[ 1 ] );
                $('#price-range > span:nth-child(2)').html('<span>' + ui.values[0] + '</span>');
                $('#price-range > span:nth-child(3)').html('<span>' + ui.values[1] + '</span>');
            },
            create: function(event, ui) {
                $('#price-range > span:nth-child(2)').html('<span>' + $('.price_range_amount').data('current-min') + '</span>');
                $('#price-range > span:nth-child(3)').html('<span>' + $('.price_range_amount').data('current-max') + '</span>');
            }
        });

        $("#amount").val("$" + $("#slider-range").slider("values", 0) +
            " - $" + $("#slider-range").slider("values", 1));
    }

    // portfolio focus
    $('.portfolio-filter button').hover(function() {
        $('.portfolio-list .portfolio-item:not(' + $(this).data('filter') + ')').addClass('opacity');
    }, function() {
        $('.portfolio-list .portfolio-item:not(' + $(this).data('filter') + ')').removeClass('opacity');
    });

    // work tabs
    $('.work-process a').click(function(e) {
        e.preventDefault();
        $(this).tab('show');
    });

    // Clients item width
    $('.client-item a').each(function() {
        $(this).width($(this).closest('div').width());
    });


    // Set height for home section
    $('.video-bg, .image-bg, .home-text-rotate').css('height', $(window).height());

    // Set height and width for paralax portfolio item
    $('.info-wrapper').css({
        'height': $('.portfolio-item').height(),
        'width': $('.portfolio-item').width()
    });

    // Set not found page height
    $('.not-found').css({
        'height': $(window).height(),
        'width': $(window).width()
    });

    // Text rotator
    $(".js-rotating").each(function() {
        var $this = $(this);
        $this.Morphext({
            animation: $this.data('animation'),
            separator: ",",
            speed: 3000,
        });
    });

    // Featured item auto height
    autoHeightFeatured();

    /* ------------------------------------
     * Menu BEGIN
     -------------------------------------*/

    // Hide Header on on scroll down
    var didScroll;
    var lastScrollTop = 0;
    var delta = 5;
    var navbarHeight = $('.navigation').outerHeight();

    $(window).scroll(function(event) {
        didScroll = true;
    });


    function hasScrolled() {
        var st = $(this).scrollTop();

        // Make sure they scroll more than delta
        if (Math.abs(lastScrollTop - st) <= delta)
            return;

        // If they scrolled down and are past the navbar, add class .nav-up.
        // This is necessary so you never see what is "behind" the navbar.
        if (st > lastScrollTop && st > navbarHeight) {
            // Scroll Down
            $('.navigation').removeClass('nav-down').addClass('nav-up');
        } else {
            // Scroll Up
            if (st + $(window).height() < $(document).height()) {
                $('.navigation').removeClass('nav-up').addClass('nav-down');
            }
        }

        var winHeight = $(window).height();
        if ($(window).scrollTop() >= winHeight) {
            $('.scroll-to-top').addClass('visible');
        } else {
            $('.scroll-to-top').removeClass('visible');
        }

        lastScrollTop = st;
    }

    $('.scroll-to-top').click(function() {
        $("html, body").animate({
            scrollTop: 0
        }, 1000);
        return false;
    });

    $(".full-height-wrapper .sub").prepend('<li class="sub-close"><a href="#">+</a></li>');
    $(".has-sub i").click(function() {
        var a = $(this).closest("li");
        if (a.hasClass("open")) {
            a.removeClass("open");
        } else {
            a.addClass("open");
        }
        a.find("> ul").css("padding-top", ($(".full-height-wrapper").height() - a.find("> ul").height()) / 2 + "px");
        a.find("> ul").css("bottom", "0px");
        return !1;
    });

    $(".sub-close").click(function() {
        $(this).closest("ul").removeAttr("style");
        $(this).closest(".has-sub").removeClass("open");
    });

    // menu fixed style2
    var $navbarStyle2 = $('.navbar-fixed-top');

    menuFixedButton($navbarStyle2);

    $(window).on('scroll', function() {
        menuFixedButton($navbarStyle2);
    });
    /* ------------------------------------
     * Menu END
     -------------------------------------*/

    /* ------------------------------------
     * Animation Progress Bars START
     -------------------------------------*/
    $('[data-progress-animation]').each(function() {
        $(this).one('inview', function() {
            var $this = $(this);
            var delay = ($this.attr('data-animation-delay') ? $this.attr('data-animation-delay') : 1);

            setTimeout(function() {

                $this.addClass('animated');

                $({
                    someValue: 0
                }).animate({
                    someValue: $this.attr('data-progress-animation')
                }, {
                    duration: 1550,
                    step: function() {
                        $this.attr('data-progress-text', Math.round(this.someValue));
                    }
                });
            }, delay);
        });
    });
    /* ------------------------------------
     * Animation Progress Bars END
     -------------------------------------*/

    /* ------------------------------------
     * Animation Counter START
     -------------------------------------*/
    $('[data-counter-animation]').each(function() {
        var $this = $(this),
            $counter = $this.find('.count');
        $(this).one('inview', function() {
            setTimeout(function() {
                $({
                    someValue: 0
                }).animate({
                    someValue: $this.attr('data-counter-animation')
                }, {
                    duration: 1000,
                    step: function() {
                        $counter.text(Math.round(this.someValue));
                    }
                });
            }, 0);
        });
    });
    /* ------------------------------------
     * Animation Counter END
     -------------------------------------*/

    /* ------------------------------------
     * Animation Layers START
     -------------------------------------*/
    var wow = new WOW({
        boxClass: 'wow',
        animateClass: 'animated',
        offset: 90,
        mobile: false,
        live: true
    });

    wow.init();
    /* ------------------------------------
     * Animation Layers END
     -------------------------------------*/

    /* ------------------------------------
     * Popup gallery START
     -------------------------------------*/
    $('.popup-gallery').magnificPopup({
        delegate: 'a',
        type: 'image',
        showCloseBtn: true,
        gallery: {
            enabled: true,
            navigateByImgClick: true,
            preload: [0, 1]
        }
    });
    /* ------------------------------------
     * Popup gallery END
     -------------------------------------*/

}
/* ------------------------------------
 * Ready function END
 -------------------------------------*/

/* ------------------------------------
 * Menu style2 scroll START
 -------------------------------------*/
function menuFixedButton($navbarStyle2) {

    if ($(this).scrollTop() >= 100) {
        $navbarStyle2.addClass('scrolled');
    } else {
        if ($navbarStyle2.hasClass('scrolled')) {
            $navbarStyle2.removeClass('scrolled');
        }
    }
}
/* ------------------------------------
 * Menu style2 scroll END
 -------------------------------------*/

/* ------------------------------------
 * Slider START
 -------------------------------------*/
function slider() {
    $('#slides').superslides({
        play: 5000,
        animation: 'fade',
        pagination: false,
    });
    $('.content .display-tc').css({
        width: $(window).width(),
        height: $(window).height()
    });
}
/* ------------------------------------
 * Slider END
 -------------------------------------*/

/* ------------------------------------
 * Section Background START
 -------------------------------------*/
function styleHelper() {

    $('[data-color]').each(function() {
        $(this).css("color", $(this).data("color"));
    });

    $('[data-border-color]').each(function() {
        $(this).css("border-color", $(this).data("border-color"));
    });

    $('[data-background]').each(function() {
        $(this).css("background-image", "url(" + $(this).data("background") + ")");
    });

    $('[data-background-color]').each(function() {
        $(this).css("background-color", $(this).data("background-color"));
    });

    $('[data-overlay-color]').each(function() {
        $(this).css('z-index', 0);
        if ($(this).find('.overlay').length === 0) {
            $(this).append('<div class="overlay" style="background-color: ' + $(this).data("overlay-color") + '; opacity: ' + $(this).data("overlay-opacity") + '"></div>');
        }
    });
}
/* ------------------------------------
 * Section Background END
 -------------------------------------*/


/* ------------------------------------
 * Auto height for featured item START
 -------------------------------------*/
function autoHeightFeatured() {
    $('.features-item').css('height', $('.features-item').width());
}
/* ------------------------------------
 * Auto height for featured item END
 -------------------------------------*/

/* ------------------------------------
 * OnScroll START
 -------------------------------------*/
function onScroll() {
    var $navbarStyle2 = $('.navbar-fixed-top');
    menuFixedButton($navbarStyle2);

    var scrollPos = $(document).scrollTop();

    if ($('body').hasClass('scrollTo')) {
        return false;
    }

    $('.navigation li a:not(.page-load, .single-page-load)').each(function() {

        var attr = $(this).attr('target');
        if (typeof attr !== typeof undefined && attr !== false) {
            return false;
        }

        var currLink = $(this);
        var refElement = $(currLink.attr('href'));

        if (refElement.length === 1) {
            if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
                $('.navigation li').removeClass('active');
                currLink.closest('li').addClass('active');
            } else {
                currLink.closest('li').removeClass('active');
            }
        }
    });
}
/* ------------------------------------
* OnScroll END
-------------------------------------*/
