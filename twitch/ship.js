if (q) {
    user = u;
    touser = t;
    query = q;
    query = query.replace(/@/g, '');
    espacios = query.indexOf(' ');
    porcentaje = Math.round(Math.random()*100);
    if (espacios >= 0) {
        split = query.split(" ");
        ship = `${split[0]} y ${split[1]}`;
        letras_nombre1 = split[0].substring(0, 3);
        letras_nombre2 = split[1].substring(split[1].length - 2);
        nombre_ship = `${letras_nombre1}${letras_nombre2}`;
        if (split.length == 2) {
            mensaje = `${ship} son ${porcentaje}% compatibles. ❤️ El nombre del ship es: ${nombre_ship}. `;
        }
        mensaje;
    } else {
        ship = `${u} y ${t}`;
        letras_nombre1 = u.substring(0, 3);
        letras_nombre2 = t.substring(t.length - 2);
        nombre_ship = `${letras_nombre1}${letras_nombre2}`;
        mensaje = `${ship} son ${porcentaje}% compatibles. ❤️ El nombre del ship es: ${nombre_ship}. `;
        mensaje;
    }
} else {
    mensaje = `Menciona a alguien para descubrir tu compatibilidad. angarJu `;
    mensaje;
}