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

    $('body').sectionScroll({
        ulletsClass: 'section-bullets',
        sectionsClass: 'scrollable-section',
        scrollDuration: 700,
        titles: true,
        topOffset: 0,
        easing: ''
    });
    new WOW().init();
});

function nextpage() {
    $.scrollify.next();
};

function tofirst() {
    $('html, body').animate({
        scrollTop: 0
    }, 1000);
};

function tolast() {
    $('html, body').stop().animate({
        scrollTop: $(document).height()
    }, 1000);
};

var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

var player;

function onYouTubePlayerAPIReady() {
    player = new YT.Player('player', {
        videoId: '4JbPBcoOO9I',
        events: {
            'onStateChange': onPlayerStateChange
        }
    });
}

function play_youtube() {
    document.getElementById("video-overlay").classList.add("invisible");
    document.getElementById("after-video-overlay").classList.add("invisible");
    player.playVideo();
}

function onPlayerStateChange(event) {
    if (event.data === 0) {
        document.getElementById("after-video-overlay").classList.remove("invisible");
    }
}

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
};

document.getElementById("search-button").addEventListener("click", function (event) {
    event.preventDefault();
    var input = document.getElementById('vy');
    if (input.value.length > 0) {
        var options = document.getElementById("obsah").options;
        for (i = 0; i < options.length; i++) {
            if (options[i].value.toUpperCase().indexOf(input.value.toUpperCase()) !== -1) {
                window.location = "/fiit_site/templates/Template.html#!" + options[i].id;
            }
        }
    }
});

$(function(){
    var navMain = $(".navbar-collapse");
    navMain.on("click", "a:not([data-toggle])", null, function () {
        navMain.collapse('hide');
    });
});
