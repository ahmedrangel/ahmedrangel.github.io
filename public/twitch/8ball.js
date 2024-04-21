/* eslint-disable no-undef */
arr_respuestas = [
  "Es cierto. angarSi",
  "Por supuesto! FallWinning",
  "Puede ser. BegWan",
  "No... angarNo",
  "Claro que no. angarNo",
  "No entendí, vuelve a preguntar. CoolStoryBob ",
  "Es muy probable. Shush",
  "Es poco probable. FallHalp",
  "Sí, definitivamente. angarSi",
  "No lo sé. TearGlove",
];

if (q) {
  respuesta = arr_respuestas[Math.floor(Math.random()*arr_respuestas.length)]
} else {
  "Escribe una pregunta. Las respuestas de este comando mayormente son para afirmar o negar una pregunta. PotFriend";
}