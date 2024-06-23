/* eslint-disable no-undef */
arr_respuestas = [
  "Es cierto. angarSi",
  "Por supuesto! angarP",
  "Puede ser. angarMmm",
  "No... angarNo",
  "Claro que no. angarNo",
  "No entendí, vuelve a preguntar. angarG",
  "Es muy probable. angarMonkas",
  "Es poco probable. angarW",
  "Sí, definitivamente. angarSi",
  "No lo sé. angarSad",
  "Tal vez Angar sepa. angarL",
  "Tal vez Tiqui tenga la respuesta. angarJu"
];

if (q) {
  respuesta = arr_respuestas[Math.floor(Math.random() * arr_respuestas.length)];
}
else {
  "Escribe una pregunta. angarMad Las respuestas de este comando mayormente son para afirmar o negar una pregunta. angarPls";
}
