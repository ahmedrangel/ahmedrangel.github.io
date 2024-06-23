import es from "~/strings/es.js";
import en from "~/strings/en.js";
import { INFO } from "~/utils/info.js";

const locales = { es, en };

class Locale {
  constructor (code) {
    this.code = ref(String(code).toLowerCase());
  }

  get (key) {
    return locales[this.code.value][key] || locales.es[key] || key;
  }

  setLanguage (code = INFO.lang) {
    this.code.value = String(code).toLowerCase();
  }

  getLanguage () {
    return this.code.value;
  }
}
export const locale = new Locale(INFO.lang);

export const t = (key) => {
  return locale.get(key);
};
