$(document).ready(inicializaEventosConJQuery);

function presionarBotonConJquery() {
    alert("Botón jQuery pulsado ");
}

function inicializaEventosConJQuery() {
    //$("#botonjquery1").click(presionarBotonConJquery);
    //$("#botonjquery2").click(presionarBotonConJquery);
    $(":button").click(presionarBotonConJquery);

    $("#myList li").eq(2).appendTo("#myList");

    $("h1").html("hello word");

    //$('#myList').append($('#myList li:first'));

    //  $('<p>Último parrafo</p>');
    $('h1').css("font-size" = "50px")
}




// Recorrer arrays y objetos
//var variable = ['a', 'e', 'i', 'o', 'u'];
var variable = { id: '12DW2', precio: 12.34, cantidad: 5 };
$.each(variable, function(i, n) {
    alert('clave :  ' + i + "\ny  valor  :" + n);
});