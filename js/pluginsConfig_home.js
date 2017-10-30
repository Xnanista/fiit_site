$(document).ready(function () {
    $.scrollify({
        section: ".full-page",
        easing: "easeOutExpo",
        scrollSpeed: 700,
        offset: 0,
        scrollbars: true,
        standardScrollElements: "",
        setHeights: false,
        overflowScroll: true,
        updateHash: false,
        touchScroll: false
    });

    nextpage = function () {
        $.scrollify.next()
    };

    tofirst = function () {
        $('html, body').animate({
            scrollTop: $("#intro").offset().top
        }, 1000);
    };

    new WOW().init();
    $('#play-video').on('click', function (ev) {
        $("#video-overlay").addClass("invisible");
        $("#y-video")[0].src += "&autoplay=1";
        ev.preventDefault();

    });
});

initMap = function () {
    var FIIT = {lat: 48.153823, lng: 17.071865};
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 16,
        center: FIIT
    });
    var marker = new google.maps.Marker({
        position: FIIT,
        map: map
    });
};

vyhladaj = function () {
    var input = $('#vy').val();
    $('#vy').val('');
    $('#obsah').find('option').filter(function () {
        if (this.value.toUpperCase().indexOf(input.toUpperCase()) !== -1) {
            //this.value.toUpperCase() === input.toUpperCase()
            event.preventDefault();
            window.location = "/fiit_site/templates/Template.html#!" + this.id;
        }
    })
};
