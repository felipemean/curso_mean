var express = require('express');  
var app = express();  
var server = require('http').Server(app);  
var io = require("socket.io")(server);
let  contador = 0
var messages = [{  
  id: 1,
  text: "Primer mensaje del servidor",
  author: "Servidor"
},{  
  id: 1,
  text: "Coslada es como un mundo paralelo, con policías mafiosos...",
  author: "Germán"
},{  
  id: 1,
  text: "Sacado del blog del autor",
  author: "Carlos Azaustre"
}];
// usuario par privado
var socketsUsuario = {};

app.use(express.static('public'));
io.on("connection", alConectarseAlguien);

function alConectarseAlguien(socket){
  console.log("Alguien se ha conectado");
  contador++;
  console.log("conexion numero :  "+ contador );
  socket.emit("mensajes", messages);
  //Identificar el AUTHOR privado:
  socket.on("identificar", function(data) {
        socketsUsuario[data.author] = socket;
    });
  //emitir nuevo mensaje publico
  socket.on("nuevo-mensaje", function(data) {
    messages.push(data);
    io.sockets.emit("mensajes", messages);
      });
  //emitir un mensaje PRIVADO;    
  socket.on("nuevo-mensaje-privado", function(data) {
     var socketDestino = socketsUsuario[data.destinatario];
      if (socketDestino) {
            socketDestino.emit("mensaje-privado", data);
        }
      });
  socket.on("disconnect", function() {
    io.sockets.emit("disconnected");
     contador--;
      console.log("Alguien se ha desconectado, \n Numero de conexiones :  "+ contador );
      });
}

/*function alDesconectarseAlguien(socket) {
      socket.emit('disconnected');
      contador--;
      console.log("Alguien se ha desconectado, Numero de conexiones :  "+ contador );
  }*/

app.get('/hello', function(req, res) {  
  res.status(200).send("Hello World!");
});
// Que escuche en un puerto
server.listen(8080, function(){
  console.log("Servidor escuchando en http://localhost:8080");
})
//