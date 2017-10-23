$(document).ready(function () {
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
        touchScroll:false
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
});

function initMap() {
    var FIIT = {lat: 48.153823, lng: 17.071865};
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 16,
        center: FIIT
    });
    var marker = new google.maps.Marker({
        position: FIIT,
        map: map
    });
}
