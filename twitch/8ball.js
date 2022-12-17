arr_respuestas = [
    `Es cierto. angarSi `,
    `Tal vez. angarMmm `,
    `Claro que no. angarNo `,
    `No entendí, vuelve a preguntar. angarG `,
    `Es muy probable. angarMonkas `,
    `Es poco probable. angarW `
];

if (q) {
    respuesta = arr_respuestas[Math.floor(Math.random()*arr_respuestas.length)];
} else {
    `Porfavor escribe una pregunta. angarMad `;
}