export const PROJECTS = [
  {
    id: "muelitas-challenge",
    name: "Muelitas Challenge Ranking 2024",
    url: "https://soloqchallenge.pages.dev",
    desc_es: "Sitio web para el evento Muelitas Challenge 2024 que muestra una tabla de clasificación de streamers de Twitch ordenado por su rango de League of Legends.<br><br>El evento tuvo una duración de 1 mes (1 de marzo 2024 - 31 de marzo 2024) y el sitio web obtuvo un tráfico de alrededor de 1,75 millones de solicitudes y 30 mil visitantes únicos en total.",
    desc_en: "Website for the Muelitas Challenge event that displays a leaderboard of Twitch streamers sorted by their League of Legends rank.<br><br>The event lasted for 1 month (March 1, 2024 - March 31, 2024), and the website had a traffic of around 1.75 million requests and 30k unique visitors in total.",
    images: ["muelitaschallenge-website.jpg"],
    start_month: 2,
    start_year: 2024,
    end_month: 4,
    end_year: 2024,
    desc_li_es: [
      "Desarrolló una tabla de clasificación para el juego League of Legends agregando una lista de streamers con sus respectivas cuentas de juego y redes sociales. Usando Nuxt.js alojado en Cloudflare Pages.",
      "Diseñó una base de datos que guarda información sobre Twitch y League of Legends de cada streamer para ser mostradas directamente de manera visual en el sitio web.",
      "Implementó algunos cron triggers que actualizan periódicamente la información correspondiente a cada streamer para mantener actualizado el sitio web. Usando Cloudflare Workers junto con las API de Riot Games y Twitch."
    ],
    desc_li_en: [
      "Developed a leaderboard for the game League of Legends by adding a list of streamers with their respective game accounts and social media. Using Nuxt.js hosted on Cloudflare Pages.",
      "Designed a database that stores information about Twitch and League of Legends for each streamer to be displayed visually on the website.",
      "Implemented some cron triggers that periodically update the information corresponding to each streamer to keep the website up-to-date. Using Cloudflare Workers in conjunction with the Riot Games and Twitch APIs."
    ],
    tags: ["Nuxt", "Vue.js", "JavaScript", "Node.js", "TypeScript", "HTML", "CSS", "Bootstrap 5", "Cloudflare Pages", "Cloudflare Workers", "Cloudflare D1", "Cron Triggers", "Riot Games API", "Twitch API"],
    repository: "https://github.com/ahmedrangel/muelitaschallenge"
  },
  {
    id: "animed",
    name: "Animed | TV Anime Web Library",
    url: "https://animed.ahmedrangel.com",
    desc_es: "Cliente web para buscar información relacionada con series de TV anime.",
    desc_en: "Web client to search for TV anime series related information.",
    images: ["anime-website.jpg", "anime-website-2.jpg", "anime-website-3.jpg", "anime-website-4.jpg"],
    start_month: 2,
    start_year: 2024,
    end_month: 13,
    end_year: null,
    desc_li_es: null,
    desc_li_en: null,
    tags: ["Nuxt", "Vue.js", "JavaScript", "Node.js", "TypeScript", "HTML", "CSS", "Bootstrap 5", "Cloudflare Pages", "GraphQL", "AniList API"],
    repository: "https://github.com/ahmedrangel/animed"
  },
  {
    id: "unbotme",
    name: "Unbot.me",
    url: "https://unbot.me",
    desc_es: "Unbotme es un bot para Twitch diseñado para banear automáticamente a bots identificados que suelen acechar persistentemente en múltiples canales.",
    desc_en: "Unbotme is a bot for Twitch designed to automatically ban identified bots that persistently lurk in channels.",
    images: ["unbotme-website.jpg"],
    start_month: 1,
    start_year: 2024,
    end_month: 4,
    end_year: 2024,
    desc_li_es: null,
    desc_li_en: null,
    tags: ["Nuxt", "Vue.js", "JavaScript", "Node.js", "TypeScript", "HTML", "CSS", "Bootstrap 5", "Cloudflare Pages", "WebSocket", "REST API"],
    repository: "https://github.com/ahmedrangel/unbot.me"
  },
  {
    id: "drawmond",
    name: "Drawmond",
    url: "https://drawmond.ahmedrangel.com",
    desc_es: "Juego web enfocado a creadores de contenido de Twitch, donde desafían a su audiencia a adivinar los dibujos que el streamer crea.",
    desc_en: "Web game focused on Twitch content creators, where they challenge their audience to guess the drawings that the streamer creates.",
    images: ["drawmond-website.jpg"],
    start_month: 8,
    start_year: 2023,
    end_month: 8,
    end_year: 2023,
    desc_li_es: [
      "Desarrolló un juego web enfocado a creadores de contenido de Twitch, donde éstos desafían a su audiencia a descifrar los dibujos que este crea. Usando Nuxt.js alojado en Cloudflare Pages.",
      "Implementó un lienzo con todas las herramientas básicas para el proceso de dibujo.",
      "Empleó un WebSocket de Twitch para capturar y procesar los mensajes provenientes de la audiencia y gestionó todos los eventos que tienen lugar durante el juego, incluyendo inicio, aciertos, puntuaciones, transiciones, temporizador.",
      "Realizó una traducción manual al inglés de todos los elementos y generó una extensa lista de palabras sobre diversas categorías, junto con sus correspondientes traducciones, para su uso en el juego."
    ],
    desc_li_en: [
      "Developed a web game focused on Twitch content creators, where they challenge their audience to guess the drawings that the streamer creates. Using Nuxt.js hosted on Cloudflare Pages.",
      "Implemented a canvas with all the basic tools for the drawing process.",
      "Used a Twitch WebSocket to capture and process the messages coming from the audience and managed all the events that take place during the game, including start, hits, evaluation, transitions, timer.",
      "Manually translated all items from Spanish to English and generated an extensive list of words across various categories, along with their corresponding translations, for use in the game."
    ],
    tags: ["Nuxt", "Vue.js", "JavaScript", "Node.js", "HTML", "CSS", "Bootstrap 5", "Cloudflare Pages", "WebSocket"],
    repository: "https://github.com/ahmedrangel/drawmond"
  },
  {
    id: "kickclips",
    name: "Kick Clips",
    url: "https://kickclips.ahmedrangel.com",
    desc_es: "Herramienta en línea gratuita para descargar clips MP4 de kick.com.",
    desc_en: "Free online tool for downloading MP4 clips from kick.com.",
    images: ["kickclips-website.jpg"],
    start_month: 6,
    start_year: 2023,
    end_month: 13,
    end_year: null,
    desc_li_es: null,
    desc_li_en: null,
    tags: ["Nuxt", "Vue.js", "JavaScript", "Node.js", "HTML", "CSS", "Bootstrap 5", "Cloudflare Pages"],
    repository: "https://github.com/ahmedrangel/kickclips"
  },
  {
    id: "instagram-scraper",
    name: "Instagram Media Scraper",
    url: "https://github.com/ahmedrangel/instagram-media-scraper",
    desc_es: "Este es un código Node.js simple para obtener información pública y medios (imágenes, videos, carrusel) de cualquier publicación o reel de Instagram sin API. Podrás obtener información, versiones de imágenes, versiones de video y medios carrusel con sus respectivas versiones de imagen y/o versiones de video de cada uno de ellos.",
    desc_en: "This is simple Node.js code to get public information and media (images, videos, carousel) from every instagram post or reel URL without API. You can get information, image versions, video versions and carousel media with their respective image versions and/or video versions of each of them.",
    images: ["instagram-scraper.jpg"],
    start_month: 6,
    start_year: 2023,
    end_month: 1,
    end_year: 2024,
    desc_li_es: null,
    desc_li_en: null,
    tags: ["JavaScript", "ES6+", "Node.js", "Web Scraping"],
    repository: "https://github.com/ahmedrangel/instagram-media-scraper"
  },
  {
    id: "saldometrobus",
    name: "Saldo Metrobus",
    url: "https://saldometrobus.yizack.com",
    desc_es: "Panamá Metrobus Saldo es una app para consultas de saldo y movimientos de todas las tarjetas Metro y Metrobus de la Ciudad de Panamá.",
    desc_en: "Panama Metrobus Balance is an app for balance and movements inquires for all Metro and Metrobus cards in Panama City.",
    images: ["saldometrobus-website.jpg"],
    start_month: 1,
    start_year: 2022,
    end_month: 6,
    end_year: 2022,
    desc_li_es: ["Colaboró junto a <a href=\"https://yizack.com\" target=\"_blank\">Yizack Rangel</a> en el desarrollo de un proyecto web y de Android de 25000+ descargas totales, actualmente ayuda a 6500+ usuarios a conocer el saldo y movimientos las tarjetas de Metro y Metrobús."],
    desc_li_en: ["Collaborated with <a href=\"https://yizack.com\" target=\"_blank\">Yizack Rangel</a> in the development of a web and Android project with 25,000+ downloads totals, currently helps 6500+ users to know the balance and movements of the Metro and Metrobús cards."],
    tags: ["Android Studio", "Java", "PHP", "PostgreSQL", "AWS Elastic Beanstalk", "Bootstrap 5"]
  },
  {
    id: "pespgg",
    name: "PESP.GG Website",
    url: "https://pesp.gg",
    desc_es: "El sitio web PESP.GG es un proyecto colaborativo entre programadores, diseñadores gráficos y la empresa Panama Esports Productions para la creación del sitio web oficial de la empresa.",
    desc_en: "The PESP.GG website is a collaborative project between programmers, graphic designers and the company Panama Esports Productions for the creation of the company's official website.",
    images: ["pespgg-website.jpg"],
    start_month: 9,
    start_year: 2021,
    end_month: 13,
    end_year: null,
    desc_li_es: [
      "El proyecto se desarrolló inicialmente utilizando PHP alojado en AWS EC2 y luego migró a Nuxt alojado en Cloudflare Pages.",
      "Desarrolló un proyecto de sitio web de deportes electrónicos utilizando Nuxt alojado en Cloudflare Pages.",
      "Implementó un panel para administrar las publicaciones del sitio web y ver estadísticas.",
      "Diseñó una Base de Datos para las publicaciones del sitio web usando SQLite en desarrollo y Cloudflare D1 en producción usando Drizzle-ORM para consultas SQL.",
      "Implementó un sistema de almacenamiento de contenido html de imágenes y publicaciones usando Cloudflare R2."
    ],
    desc_li_en: [
      "The project was initially developed using PHP hosted on AWS EC2, then migrated to Nuxt hosted on Cloudflare Pages.",
      "Developed an Esports website project using Nuxt hosted on Cloudflare Pages.",
      "Implemented an admin dashboard to manage the website's posts and see statistics.",
      "Designed a Database for the website's posts using SQLite in development and Cloudflare D1 in production using Drizzle-ORM for SQL queries.",
      "Implemented an images and posts html content storage system using Cloudflare R2."
    ],
    tags: ["PHP", "MySQL", "AWS EC2", "Cloudflare D1", "Cloudflare R2", "Nuxt", "Vue.js", "JavaScript", "Node.js", "HTML", "CSS", "Bootstrap 5", "Cloudflare Pages"],
    repository: "https://github.com/yizack/pesp.gg"
  },
  {
    id: "bayza",
    name: "Bayza Website",
    url: "https://bayzamusic.com",
    desc_es: "Sitio Web de Artista Musical",
    desc_en: "Music Artist Website",
    images: ["bayza-website.jpg"],
    start_month: 1,
    start_year: 2020,
    end_month: 13,
    end_year: null,
    desc_li_es: [
      "Diseñó un sitio web enfocado a exhibir la colección completa de canciones del artista,su biografía, videos, detalles e hipervínculos relevantes.",
      "Desarrolló el sitio utilizando Nuxt.js alojado en GitHub Pages."
    ],
    desc_li_en: [
      "Designed a website focused on showcasing the artist's full collection of songs, biography, videos, details and relevant hyperlinks.",
      "Developed using Nuxt.js hosted on GitHub Pages."
    ],
    tags: ["Nuxt", "Vue.js", "JavaScript", "Node.js", "HTML", "CSS", "Bootstrap 5", "GitHub Pages"],
    repository: "https://github.com/ahmedrangel/bayza"
  },
  {
    id: "expedition",
    name: "Expedition (Landing Page) | Event by TRIEX",
    url: "https://expedition.pesp.gg",
    desc_es: "Landing Page para el evento Expedition por TRIEX. Organizado por PESP",
    desc_en: "Landing Page for Expedition event by TRIEX. Organized by PESP",
    images: ["expedition-website-1.jpg", "expedition-website-2.jpg", "expedition-website-3.jpg", "expedition-website-4.jpg"],
    start_month: 7,
    start_year: 2024,
    end_month: 7,
    end_year: 2024,
    desc_li_es: [
      "Diseñó un landing page e implementó dos registros, uno de inscripciones para participar en el evento y otro para participar un sorteo.",
      "Desarrolló el landing page utilizando Nuxt.js alojado en Cloudflare Pages.",
      "Implementó el sistema de registros utilizando Cloudflare D1."
    ],
    desc_li_en: [
      "Designed a landing page and implemented two registrations, one for participating in the event and one for the giveaway.",
      "Developed the landing page using Nuxt.js hosted on Cloudflare Pages.",
      "Implemented the registration system using Cloudflare D1."
    ],
    tags: ["Nuxt", "Vue.js", "JavaScript", "Typescript", "Node.js", "HTML", "CSS", "Bootstrap 5", "Cloudflare Pages", "Cloudflare D1"]
  }
];
