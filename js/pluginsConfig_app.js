$(document).on('click', '[data-toggle="lightbox"]', function(event) {
    event.preventDefault();
    $(this).ekkoLightbox();
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