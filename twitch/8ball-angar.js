arr_respuestas = [
    `Es cierto. angarSi `,
    `Puede ser. angarMmm `,
    `Claro que no. angarNo `,
    `No entendí, vuelve a preguntar. angarG `,
    `Es muy probable. angarMonkas `,
    `Es poco probable. angarW `,
    `Tal vez angar sepa. angarL `
];

if (q) {
    respuesta = arr_respuestas[Math.floor(Math.random()*arr_respuestas.length)];
} else {
    `Escribe una pregunta. angarMad `;
}

// !addcom !8ball /me $(user), $(eval q = `$(query)`; $(urlfetch https://ahmedrangel.github.io/twitch/8ball-angar.js)) || By Ahmed_R