export const ageCalc = (date) => {
  const now = new Date(); // fecha actual
  const birth = new Date(date); // fecha de nacimiento
  const diff = Math.abs(now - birth);
  const age = Math.floor(diff / (1000 * 60 * 60 * 24 * 365.25));
  return age;
};

export const MoonSun = (dark) => {
  const white = "#f9fafe";
  const black = "#12151c";
  const SVGs = {
    moon: `data:image/svg+xml,%3Csvg%20data-v-7e011970%3D%22%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%20aria-hidden%3D%22true%22%20role%3D%22img%22%20class%3D%22icon%20iconify%22%20width%3D%221em%22%20height%3D%221em%22%20viewBox%3D%220%200%20296%20256%22%3E%3Cg%20fill%3D%22${encodeURIComponent(white)}%22%3E%3Cpath%20d%3D%22M210.69%20158.18A88%2088%200%201%201%2097.82%2045.31A96.08%2096.08%200%200%200%20192%20160a96.78%2096.78%200%200%200%2018.69-1.82Z%22%20opacity%3D%22.2%22%3E%3C%2Fpath%3E%3Cpath%20d%3D%22M240%2096a8%208%200%200%201-8%208h-16v16a8%208%200%200%201-16%200v-16h-16a8%208%200%200%201%200-16h16V72a8%208%200%200%201%2016%200v16h16a8%208%200%200%201%208%208Zm-96-40h8v8a8%208%200%200%200%2016%200v-8h8a8%208%200%200%200%200-16h-8v-8a8%208%200%200%200-16%200v8h-8a8%208%200%200%200%200%2016Zm72.77%2097a8%208%200%200%201%201.43%208A96%2096%200%201%201%2095.07%2037.8a8%208%200%200%201%2010.6%209.06a88.07%2088.07%200%200%200%20103.47%20103.47a8%208%200%200%201%207.63%202.67Zm-19.39%2014.88c-1.79.09-3.59.14-5.38.14A104.11%20104.11%200%200%201%2088%2064c0-1.79%200-3.59.14-5.38a80%2080%200%201%200%20109.24%20109.24Z%22%3E%3C%2Fpath%3E%3C%2Fg%3E%3C%2Fsvg%3E`,
    sun: `data:image/svg+xml,%3Csvg%20data-v-7e011970%3D%22%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%20aria-hidden%3D%22true%22%20role%3D%22img%22%20class%3D%22icon%20iconify%22%20width%3D%221em%22%20height%3D%221em%22%20viewBox%3D%22-30%200%20296%20256%22%3E%3Cg%20fill%3D%22${encodeURIComponent(black)}%22%3E%3Cpath%20d%3D%22M184%20128a56%2056%200%201%201-56-56a56%2056%200%200%201%2056%2056Z%22%20opacity%3D%22.2%22%3E%3C%2Fpath%3E%3Cpath%20d%3D%22M120%2040V16a8%208%200%200%201%2016%200v24a8%208%200%200%201-16%200Zm72%2088a64%2064%200%201%201-64-64a64.07%2064.07%200%200%201%2064%2064Zm-16%200a48%2048%200%201%200-48%2048a48.05%2048.05%200%200%200%2048-48ZM58.34%2069.66a8%208%200%200%200%2011.32-11.32l-16-16a8%208%200%200%200-11.32%2011.32Zm0%20116.68l-16%2016a8%208%200%200%200%2011.32%2011.32l16-16a8%208%200%200%200-11.32-11.32ZM192%2072a8%208%200%200%200%205.66-2.34l16-16a8%208%200%200%200-11.32-11.32l-16%2016A8%208%200%200%200%20192%2072Zm5.66%20114.34a8%208%200%200%200-11.32%2011.32l16%2016a8%208%200%200%200%2011.32-11.32ZM48%20128a8%208%200%200%200-8-8H16a8%208%200%200%200%200%2016h24a8%208%200%200%200%208-8Zm80%2080a8%208%200%200%200-8%208v24a8%208%200%200%200%2016%200v-24a8%208%200%200%200-8-8Zm112-88h-24a8%208%200%200%200%200%2016h24a8%208%200%200%200%200-16Z%22%3E%3C%2Fpath%3E%3C%2Fg%3E%3C%2Fsvg%3E`
  };
  return dark ? SVGs.moon : SVGs.sun;
};

export const sortProjects = (projects) => {
  const presentProjects = projects.filter(project => project.end_month === 13).sort((a, b) => {
    if (a.start_year === b.start_year) {
      return b.start_month - a.start_month;
    } else {
      return b.start_year - a.start_year;
    }
  });
  const oldProjects = projects.filter(project => project.end_month !== 13).sort((a, b) => {
    if (a.end_year === b.end_year) {
      return b.end_month - a.end_month;
    } else {
      return b.end_year - a.end_year;
    }
  });

  const finalProjects = [...presentProjects, ...oldProjects];
  return finalProjects;
};