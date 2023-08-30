import es from "~/strings/es.js";
import en from "~/strings/en.js";

const locales = { es, en };

class Locale {
  constructor (code) {
    this.code = String(code).toLowerCase();
  }
  get (key) {
    return locales[this.code][key] || locales.en[key] || key;
  }
  setLanguage (code = "es") {
    this.code = String(code).toLowerCase();
  }
  getLanguage () {
    return this.code;
  }
}
export const locale = new Locale("es");

export const t = (key) => {
  return locale.get(key);
};