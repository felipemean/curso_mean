/*function presionTitulo1(){
    let mi_titulo = $("#titulo1");
    mi_titulo.css("color","#ff0000");
    mi_titulo.css("background-color","#ffff00");
    mi_titulo.css("font-family","Courier");
}
function presionTitulo() {
    let mi_titulo = $("h1");
    mi_titulo.css("color", "#ffff00");
    mi_titulo.css("background-color", "#ff0000");
    mi_titulo.css("font-family", "Arial");
}*/
var conjuntosCSS = {
    titulo1: {
        "color": "#ff0000",
        "background-color": "#ffff00",
        "font-family": "Courier"

    },
    titulo2: {
        "color": "##ffff00",
        "background-color": "#ff0000",
        "font-family": "Arial"
    }
}

$(document).ready(inicializarEventos);


function inicializarEventos() {
    $("h1").click(presionTitulo);
}

function presionTitulo(event) {
    let mi_titulo = $(this);
    //mi_titulo.css(conjuntosCSS[this.id]);

    // Con evevent.target
    //mi_titulo.css(conjuntosCSS[event.target.id]);

    // Con this con jQuery version array DOM
    //let mi_titulo = $(this);
    mi_titulo.css(conjuntosCSS[mi_titulo[0].id]);

}