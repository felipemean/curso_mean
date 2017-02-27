// Establecer la conexion creando
var socket = io.connect("/", { "forceNew": true});
socket.on("mensajes", alRecibirMensaje);
socket.on("mensaje-privado", alRecibirMensajePrivado);

function alRecibirMensaje(data) {
    //alert(JSON.stringify(data));
    mostrarMensajes(data);
}
function alRecibirMensajePrivado(data) {
    document.getElementById("divPrivados").innerHTML +=
        `<div>
            <strong>${data.author}</strong>: 
            <em>${data.text}</em>
       </div>`;
}

function mostrarMensajes(data){
    var html = data.map(function(elem, index) {
        return (`
        <div>
            <strong>${elem.author}</strong>:
            <em>${elem.text}</em>
        </div>
        `);
    }).join(" ");
    var d = document.getElementById("divMessages");
    d.innerHTML = html;
}
function mostrarMensajesPrivado(data){
    var html = data.map(function(elem, index) {
        return (`
        <div>
            <strong>${elem.author}</strong>:
            <em>${elem.text}</em>
            <strong>${elem.dest}</strong>
        </div>
        `);
    }).join(" ");
    var d = document.getElementById("divMessagesPrivados");
    d.innerHTML = html;
}

function enviarMensaje(e) {
    var nuevoMensaje = {
        author: document.getElementById("surname").value,
        text : document.getElementById("texto").value
    };
    socket.emit("nuevo-mensaje", nuevoMensaje);
    return false;
}

function enviarMensajePrivados(e) {
    var nuevoMensajePrivado = {
        author: document.getElementById("surname").value,
        text : document.getElementById("texto").value,
        dest : document.getElementById("dest").value
    };
    socket.emit("nuevo-mensajePrivado", nuevoMensajePrivado);
    return false;
}