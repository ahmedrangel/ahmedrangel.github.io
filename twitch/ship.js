query = q;
split = query.split(" ");
ship = `${split[0]} y ${split[1]}`;
letras_nombre1 = split[0].substring(0, 3);
letras_nombre2 = split[1].substring(split[1].length - 2);
nombre_ship = `${letras_nombre1}${letras_nombre2}`;
porcentaje = Math.round(Math.random()*100);
if (split.length == 2) {
	mensaje = `${ship} tienen una compatibilidad de ${porcentaje}%. El nombre del ship es: ${nombre_ship}`;
    mensaje;
}