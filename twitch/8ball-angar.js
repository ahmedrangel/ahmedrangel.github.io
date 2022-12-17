arr_respuestas = [
    `Es cierto. angarSi `,
    `Por supuesto! angarP `,
    `Puede ser. angarMmm `,
    `Claro que no. angarNo `,
    `No entendí, vuelve a preguntar. angarG `,
    `Es muy probable. angarMonkas `,
    `Es poco probable. angarW `,
    `No lo sé. angarSad `,
    `Tal vez Angar sepa. angarL `,
    `Tal vez Tiqui tenga la respuesta. angarJu`
];

if (q) {
    respuesta = arr_respuestas[Math.floor(Math.random()*arr_respuestas.length)];
} else {
    `Escribe una pregunta. angarMad `;
}