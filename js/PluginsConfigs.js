$.scrollify({
    section : ".full-page",
    easing: "easeOutExpo",
    scrollSpeed: 1100,
    offset : 0,
    scrollbars: true,
    standardScrollElements: "",
    setHeights: false,
    overflowScroll: true,
    updateHash: false,
    touchScroll:true
});

nextpage = function () {
    $.scrollify.next()
};

tofirst = function() {
    $('html, body').animate({
        scrollTop: $("#intro").offset().top
    }, 1000);
};

new WOW().init();
