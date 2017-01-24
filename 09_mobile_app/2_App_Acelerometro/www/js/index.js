var app = {
    // Application Constructor
    initialize: function() {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    },


    onDeviceReady: function() {
        this.receivedEvent('deviceready');

        console.log("Acelerometro: " + navigator.accelerometer);
        alert("Acelerometro: " + navigator.accelerometer);

        navigator.accelerometer.getCurrentAcceleration(app.alRecibirDatos, appAlRecibirError)
    },
    alRecibirDatos: function(aceleration) {
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