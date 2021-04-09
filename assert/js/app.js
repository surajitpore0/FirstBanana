$(document).ready(function() {
    $('#toggle-btn').click(function() {
        $('.nav-links').slideToggle(1000);
    })
})
$(window).scroll(function() {
    let scroll = $(window).scrollTop();

    if (scroll >= 70) {
        $('#nav').addClass("new-nav");
    } else {
        $('#nav').removeClass("new-nav");
    }
})

$('nav a').click(function(links) {
    link.preventDefault();

    let target = $(this).attr('href');
    $('html, body').animated({
            scrollTop: $(target).offset().top
        }, "slow")
        //accordion
    $("#accordion").accordion({

        animate: 1000
    });
    //progress-bars
    $("#p-bar-1").progressbar({
        value: 37
    });
    $("#p-bar-2").progressbar({
        value: 70
    });
    $("#p-bar-3").progressbar({
        value: 60
    });
    $("#p-bar-4").progressbar({
        value: 80
    });
    //owl carousel
    $('.owl-carousel').owlCarousel({
        loop: true,
        smartSpeed: 2000,
        margin: 10,
        nav: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    })
    $(".owl-prev").html('<div><i class="fa fa-chevron-left"></i></div>');
    $(".owl-next").html('<div><i class="fa fa-chevron-right"></i></div>');







})