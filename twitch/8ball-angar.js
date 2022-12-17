arr_respuestas = [
    `Es cierto. angarSi `,
    `Por supuesto! angarP `,
    `Puede ser. angarMmm `,
];

if (q) {
    respuesta = arr_respuestas[Math.floor(Math.random()*arr_respuestas.length)];
} else {
    `Escribe una pregunta. angarMad `;
}