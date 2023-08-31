import es from "~/strings/es.js";
import en from "~/strings/en.js";

const locales = { es, en };

class Locale {
  constructor (code) {
    this.code = ref(String(code).toLowerCase());
  }
  get (key) {
    return locales[this.code.value][key] || locales.es[key] || key;
  }
  setLanguage (code = "en") {
    this.code.value = String(code).toLowerCase();
  }
  getLanguage () {
    return this.code.value;
  }
}
export const locale = new Locale("en");

export const t = (key) => {
  return locale.get(key);
};