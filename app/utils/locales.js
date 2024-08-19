import es from "~/strings/es.js";
import en from "~/strings/en.js";
import { INFO } from "~/utils/info.js";

const locales = { es, en };

class LocaleLang {
  constructor (code) {
    this.code = ref(String(code).toLowerCase());
  }

  i18n (key) {
    return locales[this.code.value][key] || locales.es[key] || key;
  }

  set (code = INFO.lang) {
    this.code.value = String(code).toLowerCase();
    useCookie("lang").value = this.code.value;
    useHead({ htmlAttrs: { lang: this.code.value } });
  }

  get () {
    return this.code.value;
  }

  init () {
    const lang = useCookie("lang", { ...cookieMaxAge });
    this.code.value = lang.value = lang.value ? lang.value : locale.lang.get();
    locale.lang.set(this.code.value);
  }
}

class LocaleColorMode {
  constructor (value) {
    this.dark = ref(Boolean(value));
  }

  set (value = INFO.dark) {
    this.dark.value = value;
    useCookie("dark").value = this.dark.value;
    useHead({ htmlAttrs: { "data-bs-theme": this.dark.value ? "dark" : "light" } });
  }

  get () {
    return this.dark.value;
  }

  init () {
    const dark = useCookie("dark", { ...cookieMaxAge });
    this.dark.value = dark.value === undefined ? INFO.dark : dark.value;
    locale.dark.set(this.dark.value);
  }
}

export const locale = {
  lang: new LocaleLang(INFO.lang),
  dark: new LocaleColorMode(INFO.dark)
};

export const t = (key) => {
  return locale.lang.i18n(key);
};
