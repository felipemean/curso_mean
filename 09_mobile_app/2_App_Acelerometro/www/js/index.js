var app = {
    // Application Constructor
    initialize: function() {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    },


    onDeviceReady: function() {
        this.receivedEvent('deviceready');

        console.log("Acelerometro: " + navigator.accelerometer);
        alert("Acelerometro: " + navigator.accelerometer);

        // navigator.accelerometer.getCurrentAcceleration(app.alRecibirDatos, app.AlRecibirError);

        var options = { frecuency: 3000 }; //Update every 3 seconds

        // var watchID = navigator.accelerometer.watchAcceleration(app.alRecibirDatos, app.AlRecibirError, options);

        var watchID = navigator.geolocation.watchPosition(app.alRecibirGPS, app.alRecibirError, opciones)
    },
    alRecibirGPS: function(geopos) {

        var divGPS = document.getElementById("posicion_gps");
        divGPS.innerHTML = "<p>Latitud: " + geopos.coords.latitude + "</p>" +
            "<p>Longitud: " + geopos.coords.longitude + "</p>" +
            "<p>Altura: " + geopos.coords.altitude + "</p>" +
            "<p>Direccion de recorrido: " + geopos.coords.heading + "</p>" +
            "<p>Velocidad: " + geopos.coords.speed + "</p>"
    },

    alRecibirDatos: function(aceleracion) {
        alert("Aceleracion X: " + aceleracion.x + "\n" +
            "Aceleracion Y: " + aceleracion.y + "\n" +
            "Aceleracion Z: " + aceleracion.z + "\n" +
            "En el momento: " + aceleracion.timestamp + "\n");
    },
    alRecibirError: function(error) {
        alert("Ha habido un error!\n" + " Codigo de  error: " + error.code + "  Mensaje:" + error.message);
    },

    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    }
};

app.initialize();