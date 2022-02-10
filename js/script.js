$(".fix-hov").mouseenter(function() {
    $(".inerr-img").css({ "transform": "scale(1.2)" })
    $(".inerr-img").css("box-shadow", "0 0 60px rgb(0 0 0 / 50%)")
    $(".inerr-img").addClass("zindexing")
    $(".zindexing").css({ "z-index": "999" })


})

$(".fix-hov").mouseleave(function() {
    $(".inerr-img").css({ "transform": "scale(1)" })
    $(".inerr-img").css("box-shadow", "0 0 60px transparent")
    $(".inerr-img").css({ "z-index": "0" })
    $(".inerr-img").removeClass("zindexing")


})

// $(".fix-hov").mouseout(function(){
//     $(".zindexing").css({"z-index": "0"})
//     })



$(".news-hov").mouseenter(function() {
    $(".news-img").css("transform", "scale(1.5)")
    $(".news-img").css("box-shadow", "0 0 60px rgb(0 0 0 / 50%)")
    $(".news-img").addClass("zindexing")
    $(".zindexing").css({ "z-index": "999" })
})

$(".news-hov").mouseleave(function() {
    $(".news-img").css("transform", "scale(1)")
    $(".news-img").css("box-shadow", "0 0 60px transparent")
    $(".news-img").css({ "z-index": "0" })
    $(".news-img").removeClass("zindexing")
})

$(".collect-hov").mouseenter(function() {
    $(".collect-img").css("transform", "scale(1.3)")
    $(".collect-img").css("box-shadow", "0 0 60px rgb(0 0 0 / 50%)")
    $(".collect-img").addClass("zindexing")
    $(".zindexing").css({ "z-index": "999" })
})

$(".collect-hov").mouseleave(function() {
    $(".collect-img").css("transform", "scale(1)")
    $(".collect-img").css("box-shadow", "0 0 60px transparent")
    $(".collect-img").css({ "z-index": "0" })
    $(".collect-img").removeClass("zindexing")
})

$(".offer-hov").mouseenter(function() {
    $(".offer-img").css("transform", "scale(1.3)")
    $(".offer-img").css("box-shadow", "0 0 60px rgb(0 0 0 / 50%)")
    $(".offer-img").addClass("zindexing")
    $(".zindexing").css({ "z-index": "999" })

})

$(".offer-hov").mouseleave(function() {
    $(".offer-img").css("transform", "scale(1)")
    $(".offer-img").css("box-shadow", "0 0 60px transparent")
    $(".offer-img").css({ "z-index": "0" })
    $(".offer-img").removeClass("zindexing")
})

$('.slider-list').slick({
    slidesToShow: 5,
    arrows: false,
    slidesToScroll: 1,
    autoplaySpeed: 1500,
    autoplay: true,
    responsive: [{
            breakpoint: 768,
            settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '0px',
                slidesToShow: 2,
            }
        },
        {
            breakpoint: 576,
            settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '0px',
                slidesToShow: 1,
            }
        },
        {
            breakpoint: 992,
            settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '0px',
                slidesToShow: 3,
            }
        },
        {
            breakpoint: 1200,
            settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '0px',
                slidesToShow: 4,
            }
        }
    ]
});