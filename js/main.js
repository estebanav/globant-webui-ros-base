var map;
$('document').ready(function(){
    // Place your JavaScript code here.
    $(document).ready(function(){
        map = new GMaps({
            el: '#gMap',
            lat: -12.043333,
            lng: -77.028333,
            zoom: 13,
            zoomControl : true,
            zoomControlOpt: {
            style : 'SMALL',
            position: 'TOP_LEFT'
            },
            panControl : false,
            streetViewControl : false,
            mapTypeControl: false,
            overviewMapControl: false
        });

        // Geolocates you and centre your map in your position
        GMaps.geolocate({
            success: function(position){
                map.setCenter(position.coords.latitude, position.coords.longitude);
            },
            error: function(error){
                alert('Geolocation failed: '+error.message);
            },
            not_supported: function(){
                alert("Your browser does not support geolocation");
            }
        });

        map.addMarkers(
            [
            {
                lat: -32.9539939,
                lng: -60.6553408,
                title: 'Globant Rosario Museion',
                click: function(e){
                    alert('Globant Rosario Museion, Alvear 1670, Rosario, Santa Fe, AR');
                }
            },
            {
                lat: -32.9265181,
                lng: -60.6599381,
                title: 'Globant Rosario Nordlink',
                click: function(e) {
                    alert('Globant Rosario Nordlink, Madres de Plaza de Mayo 3020, Rosario, Santa Fe, AR');
                }
            }
            ]
        );




    });
});
