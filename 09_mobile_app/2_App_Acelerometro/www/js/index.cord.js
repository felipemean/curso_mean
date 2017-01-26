var app = {
    // Application Constructor
    initialize: function() {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    },


    onDeviceReady: function() {
        this.receivedEvent('deviceready');

        console.log("Acelerometro: " + navigator.accelerometer);
        alert("Acelerometro: " + navigator.accelerometer);

        // navigator.accelerometer.getCurrentAcceleration(app.alRecibirDatos, app.AlRecibirError)
        var options = { frecuency: 3000 }; //Update every 3 seconds

        var watchID = navigator.accelerometer.watchAcceleration(app.alRecibirDatos, app.AlRecibirError, options);

    },
    alRecibirDatos: function(aceleracion) {
        alert("Aceleracion X: " + aceleracion.x + "\n" +
            "Aceleracion Y: " + aceleracion.y + "\n" +
            "Aceleracion Z: " + aceleracion.z + "\n" +
            "En el momento: " + aceleracion.timestamp + "\n");
    },
    alRecibirError: function(error) {
        alert("Ha habido un error");
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