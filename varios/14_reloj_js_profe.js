﻿<!DOCTYPE html>
<html lang="es">
	<head>
		<meta charset="UTF-8">
		<title>Reloj</title>
	</head>
	<body onLoad="comenzarReloj()">
		<h2>Nuestro reloj con Java Script</h2>
		
		<form name="reloj" onSubmit="0">
			<table>
				<tr>
					<td>Hoy es </td>
					<td>La hora es </td>
				</tr>
				<tr>
					<td><input type="text" name="laFecha" size="12" value=""> </td>
					<td><input type="text" name="laHora" size="12" value=""> </td>
					<td><input type="text" name="idTimer" size="12" value=""> </td>
				</tr>
			</table>
		</form>
	</body>
<script>
	var timerID = null;
	
	var timerFuncionando = false;
	//comen
	
	function pararReloj() {
	
		if (timerFuncionando) {
			clearTimeout(timerID);
		}
		timerFuncionando = false;
	}
	function comenzarReloj() {		
		pararReloj();
		obtenerFecha();
		mostrarFechaHora();
	}
	function mostrarFechaHora() {
		var ahora = new Date();
		
		var horas 		= ahora.getHours();
		var minutos 	= ahora.getMinutes();
		var segundos	= ahora.getSeconds();
		
		var soloHora  = (( horas > 12 ) ? horas - 12 : horas );
		
		var valorHora 	 = "" + ((soloHora < 10 ) ? ":0" : ":") + soloHora;
			valorHora	+= ((minutos < 10 ) ? ":0" : ":") + minutos;
			valorHora	+= ((segundos < 10 ) ? ":0" : ":") + segundos;
			valorHora	+= (horas >= 12 ) ? " P.M." : " A.M. ";
		// Resultado:   1:05:17 P.M.
		document.reloj.laHora.value = valorHora;		
		
		timerID = setTimeout("mostrarFechaHora()", 1000);
		
		document.reloj.idTimer.value = timerID;	
		// document.getElementsByName("idTimer")[0].value = timerID;	
		
		timerFuncionando = true;
	}
	function obtenerFecha() {
		var Hoy = new Date();
		var valorHoy = "" + Hoy.getDate()  + " / " + 
							(Hoy.getMonth() + 1) + "/ " +
							(Hoy.getYear() + 1900);
							
		document.reloj.laFecha.value = valorHoy;
		 
	}
	
</script>
</html>

