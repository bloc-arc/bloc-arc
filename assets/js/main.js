$(function() {
    
    "use strict";
    
    //===== Sticky

    $(window).on('scroll', function () {
        const scroll = $(window).scrollTop();
        if (scroll < 20) {
            $(".navbar-area").removeClass("sticky");
        } else {
            $(".navbar-area").addClass("sticky");
        }
    });
    
    //===== Section Menu Active

    const scrollLink = $('.page-scroll');
    // Active link switching
    $(window).scroll(function () {
        const scrollbarLocation = $(this).scrollTop();
        scrollLink.each(function () {
            const sectionOffset = $(this.hash).offset().top - 73;
            if (sectionOffset <= scrollbarLocation) {
                $(this).parent().addClass('active');
                $(this).parent().siblings().removeClass('active');
            }
        });
    });
    
    //===== close navbar-collapse when a  clicked

    $('.navbar-nav a').on('click', function () {
        $(".navbar-collapse").removeClass("show");
    });

    $('.navbar-toggler').on('click', function () {
        $(this).toggleClass("active");
    });

    $('.navbar-nav a').on('click', function () {
        $('.navbar-toggler').removeClass('active');
    });
    
});