if (q) {
    user = u;
    touser = t;
    query = q;
    query = query.replace(/@/g, '');
    espacios = query.split(" ").length - 1;
    porcentaje = Math.round(Math.random()*100);
    mensaje = null;
    if (espacios > 0 && espacios <= 1) {
        split = query.split(" ");
        ship = `${split[0]} y ${split[1]}`;
        letras_nombre1 = split[0].substring(0, 3);
        letras_nombre2 = split[1].substring(split[1].length - 2);
        nombre_ship = `${letras_nombre1}${letras_nombre2}`;
        if (split.length == 2) {
            mensaje = `${ship} son ${porcentaje}% compatibles. ❤️ El nombre del ship es: ${nombre_ship}. angarH `;
        }
        mensaje;
    } else if (espacios >= 2) {
        mensaje = `${u}, No tengo la capacidad de calcular la compatibilidad con más de 2 personas. angarG `;
    } else if (user.toLowerCase() == touser.toLowerCase()) {
        mensaje = `${u}, Acaso estas tratando de ver si eres compatible contigo mismo? angarMonkas`;
    } else {
        ship = `${u} y ${t}`;
        letras_nombre1 = u.substring(0, 3);
        letras_nombre2 = t.substring(t.length - 2);
        nombre_ship = `${letras_nombre1}${letras_nombre2}`;
        mensaje = `${ship} son ${porcentaje}% compatibles. ❤️ El nombre del ship es: ${nombre_ship}. angarH `;
        mensaje;
    }
} else {
    mensaje = `${u}, Menciona a alguien para descubrir tu compatibilidad o otras dos personas para saber la de ellos. angarJu `;
    mensaje;
}