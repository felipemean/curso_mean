$(document).ready(initializeEvents);

function initializeEvents() {
    $(document).mousemove(moveDetected);
    $recuadro = $("#recuadro");
}



function moveDetected(event) {
    var cx = $("#coordx").text("Coordenada x=" + event.clientX);
    var cy = $("#coordy").text("Coordenada y=" + event.clientY);

    $recuadro.css({
        "top": event.clientX + px,
        "left": event.clientY + px,
        // "position": "absolute"

    })

}