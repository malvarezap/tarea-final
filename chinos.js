var usuario, apuesta;

var maquina = maquina (0,3);
var imagenInicio = {
//	imagenInicioURL = "inicio.png",
//	imagenInicioOK = false
}

function maquina(minimo, maximo)
{
    var numero = Math.floor( Math.random() * (maximo - minimo + 1) + minimo );
    return numero;
}
function iniciar() 
{
	apuesta = document.getElementById("apuesta");
	var b = document.getElementById("boton");
	var canvas = document.getElementById("c");
	canvas.width = 500;
	canvas.height = 400;
	contexto = canvas.getContext("2d");

	usuario = prompt("¿Cuántos chinos te quieres guardar? \n(entre 0 y 3)");
	if(usuario > 3)
	{
		alert("¡Sólo tienes 3 chinos!");
		iniciar();
	}
}