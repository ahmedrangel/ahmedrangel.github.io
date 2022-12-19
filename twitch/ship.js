let query = q;
let split = query.split(" ");
let ship = `${split[0]} y ${split[1]}`;
let letras_nombre1 = split[0].substring(0, 3);
let letras_nombre2 = split[1].substring(split[1].length - 2);
let nombre_ship = `${letras_nombre1}${letras_nombre2}`
let porcentaje = Math.round(Math.random()*100);
if (split.length == 2) {
	mensaje = `${ship} tienen una compatibilidad de ${porcentaje}%. El nombre del ship es: ${nombre_ship}`;
}