import { differenceInDays, formatDistanceToNowStrict } from "date-fns";

export const ageCalc = (date) => {
  const now = new Date(); // fecha actual
  const birth = new Date(date); // fecha de nacimiento
  const diff = Math.abs(now - birth);
  const age = Math.floor(diff / (1000 * 60 * 60 * 24 * 365.25));
  return age;
};

export const sortProjects = (projects) => {
  const presentProjects = projects.filter(project => project.end_month === 13).sort((a, b) => {
    if (a.start_year === b.start_year) {
      return b.start_month - a.start_month;
    }
    else {
      return b.start_year - a.start_year;
    }
  });
  const oldProjects = projects.filter(project => project.end_month !== 13).sort((a, b) => {
    if (a.end_year === b.end_year) {
      return b.end_month - a.end_month;
    }
    else {
      return b.end_year - a.end_year;
    }
  });

  const finalProjects = [...presentProjects, ...oldProjects];
  return finalProjects;
};

export const cookieMaxAge = { maxAge: 365 * 24 * 60 * 60 };

export const projectTypes = [
  { value: "web", icon: "twemoji:globe-with-meridians", title: "Website" },
  { value: "node", icon: "logos:nodejs-icon", title: "Node.js" },
  { value: "npm", icon: "logos:npm-icon", title: "NPM Package" },
  { value: "browser-extension", icon: "vscode-icons:file-type-wxt", title: "Browser Extension" }
];

export const distanceToNowStrict = (date, options = {}) => {
  const { addSuffix, locale } = options;
  const daysDifference = differenceInDays(new Date(), date);
  if (daysDifference >= 7 && daysDifference <= 30) {
    const week = Math.floor(daysDifference / 7);
    return (() => {
      const esString = `${week} semana${week === 1 ? "" : "s"}`;
      const enString = `${week} week${week === 1 ? "" : "s"}`;
      if (addSuffix) {
        if (locale && locale.code === "es")
          return `hace ${esString}`;
        return `${enString} ago`;
      }
      if (locale && locale.code === "es")
        return esString;
      return enString;
    })();
  }
  return formatDistanceToNowStrict(date, options);
};
